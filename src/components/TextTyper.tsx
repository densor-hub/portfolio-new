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
          setIterator((p) => {
            return p + 1;
          });
          setcurrentContent("");
        }
      } else {
        if (repeat) {
          setIterator(0);
          setcurrentContent("");
        } else {
          console.log(currentContent);
          // setcurrentContent();
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
    <span>
      {currentContent ? currentContent : !repeat ? data[data.length - 1] : ""}
    </span>
  );
};

export default TextTyper;
