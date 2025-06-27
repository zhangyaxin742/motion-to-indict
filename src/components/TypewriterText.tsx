
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorBlinkRate?: number;
}

export const TypewriterText = ({ 
  text, 
  className = '', 
  typingSpeed = 60, 
  cursorBlinkRate = 500 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      // Hide cursor after typing is complete
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, typingSpeed]);

  useEffect(() => {
    if (!isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
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
