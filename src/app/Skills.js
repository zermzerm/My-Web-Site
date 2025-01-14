import sectionStyles from "./styles/sectionStyles.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <main className={sectionStyles.skills}>
      <section className={sectionStyles.skillsContainer}>
        <h1 className={sectionStyles.skillsTitle}>Skills</h1>
        <article className={sectionStyles.skillsWrapper}>
          {/* 기술 스택 */}
          <section className={sectionStyles.skillsSection}>
            <h2 className={sectionStyles.skillsSubTitle}>Technology Stack</h2>

            {/* 언어 및 프레임워크 */}
            <div className={sectionStyles.skillsListContainer}>
              <h3>Languages & Frameworks</h3>
              <ul className={sectionStyles.skillsList}>
                <li>
                  <Image src="/images/HTML.svg" width={70} height={70} alt="HTML" />
                </li>
                <li>
                  <Image src="/images/TypeScript.svg" width={70} height={70} alt="TypeScript" />
                </li>
                <li>
                  <Image src="/images/NextJS-Dark.svg" width={70} height={70} alt="NextJS-Dark" />
                </li>
              </ul>
            </div>

            {/* 상태 관리 및 라이브러리 */}
            <div className={sectionStyles.skillsListContainer}>
              <h3>Library & State Management</h3>
              <ul className={sectionStyles.skillsList}>
                <li>
                  <Image src="/images/React.svg" width={70} height={70} alt="React" />
                </li>
                <li>
                  <Image src="/images/ReactQuery.svg" width={70} height={70} alt="ReactQuery" />
                </li>
                <li>
                  <Image src="/images/Zustand.svg" width={70} height={70} alt="Zustand" />
                </li>
                <li>
                  <Image
                    src="/images/Recoil.svg"
                    width={70}
                    height={70}
                    alt="Recoil"
                    className={sectionStyles.skillsImage}
                  />
                </li>
              </ul>
            </div>

            {/* 스타일링 */}
            <div className={sectionStyles.skillsListContainer}>
              <h3>Styling</h3>
              <ul className={sectionStyles.skillsList}>
                <li>
                  <Image src="/images/CSS.svg" width={70} height={70} alt="CSS" />
                </li>
                <li>
                  <Image
                    src="/images/StyledComponents.svg"
                    width={70}
                    height={70}
                    alt="StyledComponents"
                  />
                </li>
                <li>
                  <Image src="/images/CSSModule.png" width={70} height={70} alt="CSSModule" />
                </li>
                <li>
                  <Image src="/images/Figma.svg" width={70} height={70} alt="Figma" />
                </li>
              </ul>
            </div>
          </section>

          <section className={sectionStyles.skillsUtilities}>
            {/* 버젼 관리 */}
            <article className={sectionStyles.skillsSection}>
              <div className={sectionStyles.skillsListContainer}>
                <h2 className={sectionStyles.skillsSubTitle}>Version Control</h2>
                <ul className={sectionStyles.skillsList}>
                  <li>
                    <Image src="/images/Git.svg" width={70} height={70} alt="Git" />
                  </li>
                  <li>
                    <Image src="/images/Github.svg" width={70} height={70} alt="Github" />
                  </li>
                </ul>
              </div>
            </article>

            {/* 배포 */}
            <article className={sectionStyles.skillsSection}>
              <div className={sectionStyles.skillsListContainer}>
                <h2 className={sectionStyles.skillsSubTitle}>Deployment</h2>
                <ul className={sectionStyles.skillsList}>
                  <li>
                    <Image src="/images/Netlify.svg" width={70} height={70} alt="Netlify" />
                  </li>
                  <li>
                    <Image src="/images/Vercel.svg" width={70} height={70} alt="Vercel" />
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
