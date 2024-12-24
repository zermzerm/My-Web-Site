import projectsStyles from "./styles/sectionStyles.module.css";

export default function Projects() {
  return (
    <section className={projectsStyles.projects}>
      <p className={projectsStyles.projectsTop}>Projects</p>
      <div className={projectsStyles.projectsContainer}>
        <div className={projectsStyles.projectsWrapper}>
          <p>TodayTrip</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
        <div className={projectsStyles.projectsWrapper}>
          <p>Jawstify</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
        <div className={projectsStyles.projectsWrapper}>
          <p>OpenMind</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
      </div>
    </section>
  );
}
