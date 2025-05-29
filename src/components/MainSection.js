"use client";
import { useEffect, useState } from "react";
import sectionStyles from "./styles/sectionStyles.module.css";

function TypingEffect({ text, typingSpeed = 200, delay = 1500 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimer;

    // 다 끝난 상태
    if (hasDeleted) {
      setDisplayText(text);
      setShowCursor(false);
      return;
    }

    // 타이핑 중
    if (!isDeleting && textIdx < text.length) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + text[textIdx]);
        setTextIdx((prev) => prev + 1);
      }, typingSpeed);
    }
    // 타이핑 끝
    else if (!isDeleting && textIdx === text.length) {
      typingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    }
    // 지우는 중
    else if (isDeleting && textIdx > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTextIdx((prev) => prev - 1);
      }, typingSpeed - 100);
    }
    // 지우기 끝
    else if (isDeleting && textIdx === 0) {
      typingTimer = setTimeout(() => {
        setHasDeleted(true);
      }, typingSpeed - 100);
    }

    return () => clearTimeout(typingTimer);
  }, [delay, hasDeleted, isDeleting, text, textIdx, typingSpeed]);

  // 커서 깜빡임
  useEffect(() => {
    if (hasDeleted) return;

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 200);

    return () => clearInterval(cursorTimer); // 클린업 함수로 타이머 정리
  }, [hasDeleted]);

  return (
    <p>
      {displayText}
      <span
        style={{
          display: "inline-block",
          width: "1px",
          height: "1em",
          backgroundColor: showCursor ? "black" : "transparent",
          marginLeft: "2px",
        }}
      ></span>
    </p>
  );
}

export default function MainSection() {
  return (
    <main className={sectionStyles.mainContainer}>
      <TypingEffect
        text="안녕하세요. 프론트엔드 개발자"
        typingSpeed={200}
        delay={4700}
      />
      <TypingEffect text="박경서입니다." typingSpeed={200} delay={7450} />
      <TypingEffect text="창의력을 바탕으로" typingSpeed={200} delay={6860} />
      <TypingEffect
        text="혁신적인 프론트엔드 솔루션을 제공하여"
        typingSpeed={200}
        delay={3500}
      />
      <TypingEffect
        text="사용자 경험을 향상시키고, 팀의 성과에 기여하는 주도적인 역할을 하겠습니다."
        typingSpeed={150}
        delay={995}
      />
      {/* <p className={sectionStyles.mainTitle}>안녕하세요. 프론트엔드 개발자</p>
      <p className={sectionStyles.mainName}>박경서입니다.</p>
      <p className={sectionStyles.mainDescription}>
        창의력을 바탕으로
        <br /> 혁신적인 프론트엔드 솔루션을 제공하여
        <br /> 사용자 경험을 향상시키고, 팀의 성과에 기여하는 주도적인 역할을 하겠습니다.
      </p> */}
    </main>
  );
}
