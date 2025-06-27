import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number; // average speed per character in ms
  cursorBlinkRate?: number;
}

export const TypewriterText = ({
  text,
  className = '',
  typingSpeed = 40, // faster base speed
  cursorBlinkRate = 500,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Randomize delay for natural effect
      const randomDelay = typingSpeed + Math.random() * typingSpeed * 0.3;

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, randomDelay);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      // Hide cursor after a pause
      setTimeout(() => setShowCursor(false), 800);
    }
  }, [currentIndex, text, typingSpeed]);

  useEffect(() => {
    if (!isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkRate);

      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete, cursorBlinkRate]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse text-motion-red">|</span>
      )}
    </span>
  );
};
