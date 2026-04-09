'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  className?: string;
}

export default function TypeWriter({ words, className = '' }: TypeWriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText(
          isDeleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );
      },
      isDeleting ? 60 : 100
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
