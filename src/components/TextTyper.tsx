import React, { useState, useEffect } from "react";

interface iTextTyper {
  data: string[];
  typingSpeed: number;
  repeat: boolean;
}

const TextTyper = ({ data, typingSpeed, repeat }: iTextTyper) => {
  const [iterator, setIterator] = useState<number>(0);
  const [currentContent, setcurrentContent] = useState<string>(data[0][0]);

  useEffect(() => {
    const print = () => {
      if (iterator < data.length) {
        if (data[iterator].length > currentContent?.length) {
          setcurrentContent(
            currentContent + data[iterator][currentContent?.length]
          );
        } else {
          setTimeout(() => {
            setIterator((p) => {
              return p + 1;
            });
            setcurrentContent("");
          }, 2000);
        }
      } else {
        if (repeat) {
          setIterator(0);
          setcurrentContent("");
        }
      }
    };

    let printingTimeOut = setTimeout(() => {
      print();
    }, typingSpeed);

    return () => {
      clearTimeout(printingTimeOut);
    };
  }, [iterator, currentContent, typingSpeed, data, repeat]);

  return (
    <span data-testid="type_writter">
      {currentContent ? currentContent : !repeat ? data[data.length - 1] : ""}
      {!(data[iterator]?.length > currentContent?.length) && repeat && (
        <BlinkingDash />
      )}
    </span>
  );
};

export default TextTyper;

const BlinkingDash = () => {
  const [dash, setDash] = useState(" _");
  useEffect(() => {
    setTimeout(() => {
      if (dash) {
        setDash("");
      } else {
        setDash(" _");
      }
    }, 300);
  }, [dash]);
  return <span>{dash && dash}</span>;
};
