
import { useEffect, useState, useRef } from "react";

type TypewriterProps = {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
};

const TypewriterEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const currentText = texts[currentIndex];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleTyping = () => {
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
        return;
      }
      
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      } else {
        if (displayText === currentText) {
          setIsWaiting(true);
        } else {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }
      }
    };
    
    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : isWaiting ? delayBetweenTexts : speed
    );
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, delayBetweenTexts, deleteSpeed, displayText, isDeleting, isWaiting, speed, texts]);
  
  return (
    <div className="inline-flex items-center">
      <span>{displayText}‎ </span>
      <span className="cursor-blink" />
    </div>
  );
};

export default TypewriterEffect;
