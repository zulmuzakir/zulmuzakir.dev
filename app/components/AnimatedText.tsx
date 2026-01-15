import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  letterDelay?: number;
  tag?: React.ElementType;
}

// Letter-by-letter reveal animation
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  letterDelay = 0.05,
  tag: Tag = "span",
}: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const letters = text.split("");

  return (
    <Tag className={`inline-block overflow-hidden ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-gpu"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(100%)",
            transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)`,
            transitionDelay: `${delay + index * letterDelay}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </Tag>
  );
}

// Word-by-word reveal animation
interface AnimatedWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  wordDelay?: number;
}

export function AnimatedWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  wordDelay = 0.1,
}: AnimatedWordsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-[0.3em] overflow-hidden ${wordClassName}`}
        >
          <span
            className="inline-block animate-gpu"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(100%)",
              transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)`,
              transitionDelay: `${delay + index * wordDelay}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

// Typing effect animation
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export function Typewriter({
  text,
  className = "",
  speed = 50,
  delay = 0,
  showCursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="blink inline-block w-[2px] h-[1em] bg-current ml-1 align-middle" />
      )}
    </span>
  );
}

// Number counter animation
interface AnimatedCounterProps {
  target: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, started]);

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
