"use client";
import { useEffect, useState } from "react";
import sectionStyles from "./styles/sectionStyles.module.css";

function TypingEffect({ text, typingSpeed = 200, delay = 1500 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);

  useEffect(() => {
    let timer;

    if (hasDeleted) return;
    //타이핑 중
    if (!isDeleting && textIdx < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[textIdx]);
        setTextIdx((prev) => prev + 1);
      }, typingSpeed);
    }

    //타이핑 끝
    else if (!isDeleting && textIdx === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    }

    //지우는 중
    else if (isDeleting && textIdx > 0) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTextIdx((prev) => prev - 1);
      }, typingSpeed - 100);
    }

    //지우기 끝
    else if (isDeleting && textIdx === 0) {
      timer = setTimeout(() => {
        setHasDeleted(true);
      }, typingSpeed - 100);
    }

    if (hasDeleted) return <p></p>;
    return () => clearTimeout(timer);
  }, [delay, hasDeleted, isDeleting, text, textIdx, typingSpeed]);

  return <p>{displayText}</p>;
}

export default function MainSection() {
  return (
    <main className={sectionStyles.mainContainer}>
      <TypingEffect text="안녕하세요. 프론트엔드 개발자" typingSpeed={200} delay={1500} />
      <TypingEffect text="박경서입니다." typingSpeed={200} delay={1500} />
      <TypingEffect
        text="창의력을 바탕으로
        혁신적인 프론트엔드 솔루션을 제공하여
        사용자 경험을 향상시키고, 팀의 성과에 기여하는 주도적인 역할을 하겠습니다."
        typingSpeed={200}
        delay={1500}
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
