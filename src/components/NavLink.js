"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function NavLink() {
  const [status, setStatus] = useState("");

  console.log(status);
  useEffect(() => {
    setStatus("home");
  }, []);
  return (
    <>
      <Section>
        <Link href="#home" onClick={() => setStatus("home")}>
          박경서 포트폴리오
        </Link>
      </Section>
      <Ul>
        <Li active={status === "home"}>
          <Link href="#home" onClick={() => setStatus("home")}>
            Home
          </Link>
        </Li>
        <Li active={status === "about"}>
          <Link href="#about" onClick={() => setStatus("about")}>
            About
          </Link>
        </Li>
        <Li active={status === "skills"}>
          <Link href="#skills" onClick={() => setStatus("skills")}>
            Skills
          </Link>
        </Li>
        <Li active={status === "projects"}>
          <Link href="#projects" onClick={() => setStatus("projects")}>
            Projects
          </Link>
        </Li>
        <Li active={status === "contact"}>
          <Link href="#contact" onClick={() => setStatus("contact")}>
            Contact
          </Link>
        </Li>
      </Ul>
    </>
  );
}

const Section = styled.section`
  padding-right: 200px;
  color: #6467c0;
`;

const Ul = styled.ul`
  padding-left: 200px;
`;

const Li = styled.li`
  color: ${({ active }) => (active ? "#6467c0" : "#fff")};
`;
