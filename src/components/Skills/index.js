// import React from "react";
// import styled from "styled-components";
// import { skills } from "../../data/constants";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// export const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// export const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: ${({ theme }) => theme.card};
//   border: 0.1px solid #854ce6;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   padding: 12px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const Skills = () => {
//   return (
//     <Container id="skills">
//       <Wrapper>
//         <Title>Skills</Title>
//         <Desc>
//           Here are some of my skills on which I have been working from past 3 years.
//         </Desc>
//         <SkillsContainer>
//           {skills.map((skill) => (
//             <Skill>
//               <SkillTitle>{skill.title}</SkillTitle>
//               <SkillList>
//                 {skill.skills.map((item) => (
//                   <SkillItem>
//                     <SkillImage src={item.image} />
//                     {item.name}
//                   </SkillItem>
//                 ))}
//               </SkillList>
//             </Skill>
//           ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Skills;


import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 90px 20px;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 70px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Desc = styled.p`
  max-width: 760px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 55px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;
const Skill = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};

  border: 1px solid rgba(133, 76, 230, 0.18);
  border-radius: 22px;

  padding: 28px;

  box-shadow: 0 10px 30px rgba(23, 92, 230, 0.08);

  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 18px 45px rgba(133, 76, 230, 0.18);
  }

  @media (max-width: 768px) {
    padding: 22px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.primary};

  text-align: center;

  margin-bottom: 28px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 14px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 16px;

  border-radius: 30px;

  background: ${({ theme }) => theme.background};

  border: 1px solid rgba(133, 76, 230, 0.18);

  color: ${({ theme }) => theme.text_primary};

  font-size: 15px;
  font-weight: 500;

  transition: all 0.3s ease;

  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;

    transform: translateY(-3px);

    img {
      transform: scale(1.15);
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 14px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;

  object-fit: contain;

  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Technical Skills</Title>

        <Desc>
          My expertise spans Backend Development, Data Analytics, Cloud
          Technologies, Databases, and modern development tools used to build
          scalable, high-performance, and production-ready applications.
        </Desc>

        <SkillsContainer>
          {skills.map((category) => (
            <Skill key={category.title}>
              <SkillTitle>{category.title}</SkillTitle>

              <SkillList>
                {category.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;