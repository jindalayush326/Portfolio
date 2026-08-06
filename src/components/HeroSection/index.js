import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  // SocialMediaIcons,
  // SocialMediaIcon,
  ResumeButton,
  ContactButton,
  ButtonGroup,
    StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
  StatIcon,
} from "./HeroStyle";
import HeroImg from "../../images/ayush.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I'm <br /> {Bio.name}
            </Title>
            <TextLoop>
              I'm a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <StatsContainer>
              <StatCard>
                <StatIcon>
                  <LaptopMacIcon />
                </StatIcon>
                <StatNumber>1+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <WorkOutlineIcon />
                </StatIcon>
                <StatNumber>10+</StatNumber>
                <StatLabel>Projects</StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <CodeIcon />
                </StatIcon>
                <StatNumber>20+</StatNumber>
                <StatLabel>Technologies</StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <AnalyticsIcon />
                </StatIcon>
                <StatNumber>3</StatNumber>
                <StatLabel>Domains</StatLabel>
              </StatCard>
            </StatsContainer>
           <ButtonGroup>
              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </ResumeButton>

              <ContactButton href="#contact">
                Let's Connect
              </ContactButton>
            </ButtonGroup>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
  <HeroBgAnimation />
  <Img src={HeroImg} alt="hero-image" />
</HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
