// import React, { useEffect, useState, useRef } from "react";
// import styled, { keyframes } from "styled-components";
// import ExperienceCard from "../Cards/ExperienceCard";
// import { experiences } from "../../data/constants";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   padding: 40px 0px 80px 0px;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 60px 0;
//   gap: 10px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 36px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 28px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 16px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 14px;
//   }
// `;

// const TimelineSection = styled.div`
//   width: 100%;
//   max-width: 900px;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
// `;

// const Timeline = styled.div`
//   position: relative;
//   max-width: 1000px;
//   margin: 80px auto;
//   &::after {
//     content: '';
//     position: absolute;
//     width: 4px;
//     height: 100%;
//     background: ${({ theme }) => theme.text_secondary};
//     top: 0;
//     left: 50%;
//     margin-left: -2px;
//     z-index: 1;
//     animation: moveline 4s linear forwards;
//   }
//   @keyframes moveline {
//     0% {
//       height: 0;
//     }
//     100% {
//       height: 100%;
//     }
//   }
// `;

// const ContainerItem = styled.div`
//   padding: 8px 40px;
//   position: relative;
//   width: 50%;
//   opacity: 0;
//   animation: fadeIn 1s linear forwards;
//   animation-delay: ${({ delay }) => delay}s;
//   @keyframes fadeIn {
//     0% {
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0px);
//     }
//   }
// `;

// const LeftContainer = styled(ContainerItem)`
//   left: 0;
// `;

// const RightContainer = styled(ContainerItem)`
//   left: 50%;
// `;

// const TextBox = styled.div`
//   padding: 16px 24px;
//   background: ${({ theme }) => theme.background};
//   position: relative;
//   border-radius: 6px;
//   font-size: 13px;
//   @keyframes boxAppear {
//     0% {
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0px);
//     }
//   }
// `;

// const LeftContainerArrow = styled.span`
//   height: 0;
//   width: 0;
//   position: absolute;
//   top: 20px;
//   z-index: 1;
//   border-top: 12px solid transparent;
//   border-bottom: 12px solid transparent;
//   border-left: 12px solid ${({ theme }) => theme.background};
//   right: -12px;
// `;

// const RightContainerArrow = styled.span`
//   height: 0;
//   width: 0;
//   position: absolute;
//   top: 20px;
//   z-index: 1;
//   border-top: 12px solid transparent;
//   border-bottom: 12px solid transparent;
//   border-right: 12px solid ${({ theme }) => theme.background};
//   left: -12px;
// `;

// const moveCircle = keyframes`
//   0% {
//     top: 0;
//   }
//   100% {
//     top: 100%;
//   }
// `;

// const TimelineCircle = styled.div`
//   position: absolute;
//   top: ${({ top }) => top}px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 24px;
//   height: 24px;
//   background: ${({ theme }) => theme.primary};
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${moveCircle} 4s linear forwards;
//   animation-delay: ${({ delay }) => delay}s;
// `;

// const CircleImage = styled.img`
//   width: 16px;
//   height: 16px;
//   border-radius: 50%;
// `;

// const Experience = () => {
//   const [visibleIndex, setVisibleIndex] = useState(-1);
//   const boxRefs = useRef([]);

//   useEffect(() => {
//     const intervals = experiences.map((_, index) =>
//       setTimeout(() => setVisibleIndex(index), (index + 1) * 1000)
//     );

//     return () => intervals.forEach(clearTimeout);
//   }, []);

//   return (
//     <Container id="experience">
//       <Wrapper>
//         <Title>Experience</Title>
//         <Desc>
//           My work experience as a Software Developer and working on different Companies and Projects.
//         </Desc>
//         <TimelineSection>
//           <Timeline>
//             {experiences.map((exp, index) =>
//               index % 2 === 0 ? (
//                 <LeftContainer
//                   key={exp.id}
//                   delay={index + 1}
//                   style={{ opacity: visibleIndex >= index ? 1 : 0 }}
//                   ref={(el) => (boxRefs.current[index] = el)}
//                 >
//                   <TextBox>
//                     <ExperienceCard experience={exp} />
//                     <LeftContainerArrow />
//                   </TextBox>
//                 </LeftContainer>
//               ) : (
//                 <RightContainer
//                   key={exp.id}
//                   delay={index + 1}
//                   style={{ opacity: visibleIndex >= index ? 1 : 0 }}
//                   ref={(el) => (boxRefs.current[index] = el)}
//                 >
//                   <TextBox>
//                     <ExperienceCard experience={exp} />
//                     <RightContainerArrow />
//                   </TextBox>
//                 </RightContainer>
//               )
//             )}
//             {experiences.map((exp, index) => (
//               <TimelineCircle
//                 key={index}
//                 top={boxRefs.current[index]?.offsetTop || 0}
//                 delay={(index + 1) * 1}
//               >
//                 <CircleImage src={exp.img} alt="Profile" />
//               </TimelineCircle>
//             ))}
//           </Timeline>
//         </TimelineSection>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Experience;











import React from "react";
import styled from "styled-components";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Desc = styled.p`
  max-width: 750px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 45px;
  }
`;

const Timeline = styled.div`
  width: 100%;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    &:before {
      left: 22px;
    }
  }
`;

const TimelineItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ right }) =>
    right ? "flex-end" : "flex-start"};
  position: relative;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding-left: 55px;
    margin-bottom: 40px;
  }
`;

const TimelineContent = styled.div`
  width: calc(50% - 55px);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(133, 76, 230, 0.35);
  z-index: 2;

  @media (max-width: 900px) {
    left: 22px;
    width: 40px;
    height: 40px;
  }
`;

const CircleImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
  }
`;

const Connector = styled.div`
  position: absolute;
  top: 40px;
  width: 55px;
  height: 2px;
  background: ${({ theme }) => theme.primary};

  ${({ right }) =>
    right
      ? `
      right: calc(50% - 55px);
    `
      : `
      left: calc(50% - 55px);
    `}

  @media (max-width: 900px) {
    left: 22px;
    width: 35px;
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Professional Experience</Title>

        <Desc>
          My professional journey as a Software Engineer specializing in
          Backend Development, scalable distributed systems, cloud
          technologies, and Data Analytics. I enjoy building reliable software
          that solves real-world business problems.
        </Desc>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              right={index % 2 !== 0}
            >
              <Circle>
                <CircleImage
                  src={experience.img}
                  alt={experience.company}
                />
              </Circle>

              <Connector right={index % 2 !== 0} />

              <TimelineContent>
                <ExperienceCard
                  experience={experience}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;