import { useState, useEffect } from "react";

const TextTyper = ({ data, typingSpeed, repeat }) => {
  const [iterator, setIterator] = useState(0);
  const [currentContent, setcurrentContent] = useState(data[0][0]);

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
          setcurrentContent(data[data.length - 1]);
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

  return <span>{currentContent}</span>;
};

export default TextTyper;
