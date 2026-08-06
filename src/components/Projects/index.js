// import React, { useState } from "react";
// import {
//   Container,
//   Wrapper,
//   Title,
//   Desc,
//   CardContainer,
//   ToggleButtonGroup,
//   ToggleButton,
//   Divider,
// } from "./ProjectsStyle";
// import ProjectCard from "../Cards/ProjectCards";
// import { projects } from "../../data/constants";

// const Projects = ({ openModal, setOpenModal }) => {
//   const [toggle, setToggle] = useState("all");

//   return (
//     <Container id="projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>
//           I have worked on various projects. From Web Development to Machine
//           Learning. Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup>
//           {toggle === "all" ? (
//             <ToggleButton active value="all" onClick={() => setToggle("all")}>
//               All
//             </ToggleButton>
//           ) : (
//             <ToggleButton value="all" onClick={() => setToggle("all")}>
//               All
//             </ToggleButton>
//           )}
//           <Divider />
//           {toggle === "backend" ? (
//             <ToggleButton
//               active
//               value="backend"
//               onClick={() => setToggle("backend")}
//             >
//               BACKEND DEVELOPMENT
//             </ToggleButton>
//           ) : (
//             <ToggleButton
//               value="backend"
//               onClick={() => setToggle("backend")}
//             >
//               BACKEND DEVELOPMENT
//             </ToggleButton>
//           )}
//           <Divider />
//           {toggle === "analytics" ? (
//             <ToggleButton
//               active
//               value="analytics"
//               onClick={() => setToggle("analytics")}
//             >
//               ANALYTICS
//             </ToggleButton>
//           ) : (
//             <ToggleButton
//               value="analytics"
//               onClick={() => setToggle("analytics")}
//             >
//               ANALYTICS
//             </ToggleButton>
//           )}
//           <Divider />
//           {toggle === "machine learning" ? (
//             <ToggleButton
//               active
//               value="machine learning"
//               onClick={() => setToggle("machine learning")}
//             >
//               MACHINE LEARNING
//             </ToggleButton>
//           ) : (
//             <ToggleButton
//               value="machine learning"
//               onClick={() => setToggle("machine learning")}
//             >
//               MACHINE LEARNING
//             </ToggleButton>
//           )}
//           <Divider />
//           {toggle === "web app" ? (
//             <ToggleButton
//               active
//               value="web app"
//               onClick={() => setToggle("web app")}
//             >
//               WEB APP'S
//             </ToggleButton>
//           ) : (
//             <ToggleButton value="web app" onClick={() => setToggle("web app")}>
//               WEB APP'S
//             </ToggleButton>
//           )}
//           <Divider />
//           {toggle === "designing" ? (
//             <ToggleButton
//               active
//               value="designing"
//               onClick={() => setToggle("designing")}
//             >
//               Designing
//             </ToggleButton>
//           ) : (
//             <ToggleButton
//               value="designing"
//               onClick={() => setToggle("designing")}
//             >
//               Designing
//             </ToggleButton>
//           )}
//         </ToggleButtonGroup>
//         <CardContainer>
//           {toggle === "all" &&
//             projects.map((project) => (
//               <ProjectCard
//                 key={project.id} // Added key for better rendering
//                 project={project}
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//               />
//             ))}
//           {projects
//             .filter((item) => item.category === toggle) // Corrected to use ===
//             .map((project) => (
//               <ProjectCard
//                 key={project.id} // Added key for better rendering
//                 project={project}
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//               />
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;


import React, { useMemo, useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
} from "./ProjectsStyle";

import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const categories = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Web Apps", value: "web app" },
  { label: "Analytics", value: "analytics" },
  { label: "Machine Learning", value: "machine learning" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <Container id="projects">
      <Wrapper>

        <Title>Featured Projects</Title>

        <Desc>
          A collection of backend systems, full-stack applications, analytics,
          and machine learning projects built using modern technologies such as
          Golang, React, PostgreSQL, Redis, Docker, and Python.
        </Desc>

        <ToggleButtonGroup>
          {categories.map((category) => (
            <ToggleButton
              key={category.value}
              active={activeCategory === category.value}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Desc
          style={{
            marginTop: "-20px",
            marginBottom: "40px",
            fontSize: "15px",
            opacity: 0.8,
          }}
        >
          Showing {filteredProjects.length} Project
          {filteredProjects.length !== 1 ? "s" : ""}
        </Desc>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>

      </Wrapper>
    </Container>
  );
};

export default Projects;