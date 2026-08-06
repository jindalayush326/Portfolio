// import styled from 'styled-components';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Bio } from '../../data/constants';

// const FooterContainer = styled.div`
//   width: 100%;
//   padding: 2rem 0;
//   display: flex;
//   justify-content: center;
//   //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
// `;


// const FooterWrapper = styled.footer`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   align-items: center;
//   padding: 1rem;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const Logo = styled.h1`
//   font-weight: 600;
//   font-size: 20px;
//   color: ${({ theme }) => theme.primary};
// `;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

// const NavLink = styled.a`
// color: ${({ theme }) => theme.text_primary};
//   text-decoration: none;
//   font-size: 1.2rem;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const SocialMediaIcons = styled.div`
//   display: flex;
//   margin-top: 1rem;
// `;

// const SocialMediaIcon = styled.a`
//   display: inline-block;
//   margin: 0 1rem;
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.text_primary};
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

// const Copyright = styled.p`
//   margin-top: 1.5rem;
//   font-size: 0.9rem;
//   color: ${({ theme }) => theme.soft2};
//   text-align: center;
// `;

// function Footer() {
//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         <Logo>Ayush Jindal</Logo>
//         <Nav>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#skills">Skills</NavLink>
//           <NavLink href="#experience">Experience</NavLink>
//           <NavLink href="#projects">Projects</NavLink>
//           <NavLink href="#education">Education</NavLink>
//         </Nav>
//         <SocialMediaIcons>
//           <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
//           <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
//           <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
//         </SocialMediaIcons>
//         <Copyright>
//           &copy; 2024 Ayush Jindal. All rights reserved.
//         </Copyright>

//       </FooterWrapper>
//     </FooterContainer>
//   );
// }

// export default Footer;






import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 70px 20px 30px;
  border-top: 1px solid rgba(133, 76, 230, 0.18);
  background: ${({ theme }) => theme.background};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.p`
  margin-top: 12px;
  max-width: 650px;
  text-align: center;
  line-height: 1.8;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Nav = styled.nav`
  margin-top: 35px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 18px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 35px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.text_primary};

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.35);
  }

  svg {
    font-size: 24px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(133, 76, 230, 0.18);
  margin: 45px 0 25px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
`;

const BackToTop = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.35);
  }

  svg {
    font-size: 26px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ayush Jindal</Logo>

        <Subtitle>
          Software Engineer | Backend Developer | Data Analyst
          <br />
          Passionate about building scalable backend systems,
          cloud-native applications, and data-driven solutions.
        </Subtitle>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <TwitterIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Bio.email}`}
  target="_blank"
  rel="noopener noreferrer"
            aria-label="Email"
          >
            <EmailIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Divider />

        <Bottom>
          <Copyright>
            © {new Date().getFullYear()} Ayush Jindal. All Rights Reserved.
          </Copyright>

          <BackToTop
            href="#"
            aria-label="Back to Top"
          >
            <KeyboardArrowUpIcon />
          </BackToTop>
        </Bottom>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;