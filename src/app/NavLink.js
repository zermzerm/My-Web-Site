"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";

export default function NavLink() {
  const [status, setStatus] = useState("");

  console.log(status);
  useEffect(() => {
    setStatus("home");
  }, []);
  return (
    <>
      <span className={styles.navTitle}>
        <Link href="#home" onClick={() => setStatus("home")}>
          박경서 사이트
        </Link>
      </span>
      <ul className={styles.navList}>
        <li className={status === "home" && styles.navActive}>
          <Link href="#home" onClick={() => setStatus("home")}>
            Home
          </Link>
        </li>
        <li className={status === "about" && styles.navActive}>
          <Link href="#about" onClick={() => setStatus("about")}>
            About
          </Link>
        </li>
        <li className={status === "skills" && styles.navActive}>
          <Link href="#skills" onClick={() => setStatus("skills")}>
            Skills
          </Link>
        </li>
        <li className={status === "projects" && styles.navActive}>
          <Link href="#projects" onClick={() => setStatus("projects")}>
            Projects
          </Link>
        </li>
        <li className={status === "contact" && styles.navActive}>
          <Link href="#contact" onClick={() => setStatus("contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
