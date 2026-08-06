// import React from "react";
// import {
//   Nav,
//   NavLink,
//   NavbarContainer,
//   NavItems,
//   GitHubButton,
//   ButtonContainer,
//   MobileIcon,
//   MobileMenu,
//   MobileLink,
// } from "./NavbarStyledComponent";
// import { Link } from 'react-router-dom';
// import { FaBars } from "react-icons/fa";
// import { Bio } from "../../data/constants";
// import { useTheme } from "styled-components";
// import styled from 'styled-components';

// const StyledNavLogo = styled(Link)`
//   display: flex;
//   align-items: center;
//   color: white;
//   margin-bottom: 20px;
//   cursor: pointer;
//   text-decoration: none;
// `;

// const SpanStyled = styled.span`
//   font-size: 1.6rem;
//   font-weight: 800;
//   color: ${({ theme }) => theme.text_primary};

//   span {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();
//   return (
//     <Nav>
//       <NavbarContainer>
//         <StyledNavLogo to="/">
//           <SpanStyled>
//             {"<"} Ayush <span>Jindal</span> {" />"}
//           </SpanStyled>
//         </StyledNavLogo>
//         <MobileIcon>
//           <FaBars
//             onClick={() => {
//               setIsOpen(!isOpen);
//             }}
//           />
//         </MobileIcon>
//         <NavItems>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#skills">Skills</NavLink>
//           <NavLink href="#experience">Experience</NavLink>
//           <NavLink href="#projects">Projects</NavLink>
//           <NavLink href="#education">Education</NavLink>
//         </NavItems>
//         <ButtonContainer>
//           <GitHubButton href={Bio.github} target="_blank">
//             Github Profile
//           </GitHubButton>
//         </ButtonContainer>
//         {isOpen && (
//           <MobileMenu isOpen={isOpen}>
//             <MobileLink
//               href="#about"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               About
//             </MobileLink>
//             <MobileLink
//               href="#skills"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               Skills
//             </MobileLink>
//             <MobileLink
//               href="#experience"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               Experience
//             </MobileLink>
//             <MobileLink
//               href="#projects"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               Projects
//             </MobileLink>
//             <MobileLink
//               href="#education"
//               onClick={() => {
//                 setIsOpen(!isOpen);
//               }}
//             >
//               Education
//             </MobileLink>
//             <GitHubButton
//               style={{
//                 padding: "10px 16px",
//                 background: `${theme.primary}`,
//                 color: "white",
//                 width: "max-content",
//               }}
//               href={Bio.github}
//               target="_blank"
//             >
//               Github Profile
//             </GitHubButton>
//           </MobileMenu>
//         )}
//       </NavbarContainer>
//     </Nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";

import { Bio } from "../../data/constants";

const StyledNavLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavbarContainer>
        <StyledNavLogo to="/">
          <LogoText>
            {"<"} Ayush <span>Jindal</span> {" />"}
          </LogoText>
        </StyledNavLogo>

        <NavItems>
          {navLinks.map((item) => (
            <li key={item.title}>
              <NavLink href={item.href}>{item.title}</NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileMenu isOpen={isOpen}>
          {navLinks.map((item) => (
            <MobileLink
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </MobileLink>
          ))}

          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "10px",
              background: theme.primary,
              color: "#fff",
            }}
          >
            GitHub Profile
          </GitHubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;