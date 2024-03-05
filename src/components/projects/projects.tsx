import Card from "../card/card";
import "./project.scss";

const projects = [
  {
    name: `Health Coach Institute`,
    link: `https://www.healthcoachinstitute.com/`,
    img: {
      src: "/img/hci.png",
      alt: `Health Coach Institute`,
    },
  },

  {
    name: `Sentinel Data Centers`,
    link: `https://www.sentineldatacenters.com/`,
    img: {
      src: "/img/sentinel.png",
      alt: `Sentinel Data Centers`,
    },
  },

  {
    name: `Buechel Stone`,
    link: `https://www.buechelstone.com/`,
    img: {
      src: "/img/buechel.png",
      alt: `Buechel Stone`,
    },
  },

  {
    name: `Navatar Group`,
    link: `https://www.navatargroup.com/`,
    img: {
      src: "/img/navatar.png",
      alt: `Navatar Group`,
    },
  },

  {
    name: `HCI Live`,
    link: `https://www.hcilive.com/`,
    img: {
      src: "/img/hcilive.png",
      alt: `HCI Live`,
    },
  },

  {
    name: `Functional Nutrition Alliance`,
    link: `https://signup.fxnutrition.com/`,
    img: {
      src: "/img/fxna.png",
      alt: `Functional Nutrition Alliance`,
    },
  },

  {
    name: `Wilbur Ellis`,
    link: `https://www.wilburellis.com/`,
    img: {
      src: "/img/wilbur.png",
      alt: `Wilbur Ellis`,
    },
  },

  {
    name: `National Holdings`,
    link: `https://www.yournational.com/`,
    img: {
      src: "/img/national.png",
      alt: `National Holdings`,
    },
  },

  {
    name: `Health Coach Match`,
    link: `https://www.healthcoachmatch.com/`,
    img: {
      src: "/img/match.png",
      alt: `Health Coach Match`,
    },
  },

  {
    name: `Gilbert Displays`,
    link: `http://www.gilbertexperience.com/`,
    img: {
      src: "/img/gilbert.png",
      alt: `Gilbert Displays`,
    },
  },

  {
    name: `Be Ready Long Island`,
    link: `https://www.bereadyli.org/`,
    img: {
      src: "/img/bereadyli.png",
      alt: `Be Ready Long Island`,
    },
  },

  {
    name: `Github Cards`,
    link: `https://git-cards.herokuapp.com/`,
    img: {
      src: "/img/git.png",
      alt: `Github Cards`,
    },
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-wrapper">
          <div className="project-heading">
            <h2>Projects</h2>
          </div>
          <div className="project-section">
            <div className="project-section-wrapper">
              {projects.map((project) => {
                return <Card key={project.name} {...project}></Card>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
