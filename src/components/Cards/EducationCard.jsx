// import React from "react";
// import styled from "styled-components";

// const Card = styled.article`
//   width: 650px;
//   border-radius: 16px;
//   padding: 18px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   border: 1px solid #854ce6;
//   background: ${({ theme }) => theme.card};
//   box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: rgba(23, 92, 230, 0.25) 0px 10px 30px;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 14px;
//   }
// `;

// const Top = styled.div`
//   display: flex;
//   gap: 16px;
//   align-items: flex-start;
// `;

// // const Image = styled.img`
// //   width: 70px;
// //   height: 70px;
// //   object-fit: contain;
// //   border-radius: 10px;
// //   background: #fff;
// //   padding: 4px;

// //   @media (max-width: 768px) {
// //     width: 46px;
// //     height: 46px;
// //   }
// // `;

// const Image = styled.img`
//   width: 70px;
//   height: 70px;
//   object-fit: contain;
//   background: #fff;
//   border-radius: 12px;
//   padding: 6px;

//   @media (max-width: 768px) {
//     width: 55px;
//     height: 55px;
//   }
// `;

// const Body = styled.div`
//   flex: 1;
// `;

// const Name = styled.h3`
//   font-size: 18px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Degree = styled.p`
//   margin: 4px 0;
//   font-size: 15px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// // const Date = styled.p`
// //   margin: 0;
// //   font-size: 13px;
// //   color: ${({ theme }) => theme.text_secondary};
// // `;

// const Date = styled.div`
//   display: inline-flex;
//   align-items: center;
//   margin-top: 8px;
//   padding: 6px 12px;
//   border-radius: 20px;
//   background: ${({ theme }) => theme.primary}20;
//   color: ${({ theme }) => theme.primary};
//   font-size: 13px;
//   font-weight: 600;
//   width: fit-content;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     padding: 5px 10px;
//   }
// `;
// const Grade = styled.p`
//   margin: 0;
//   font-size: 15px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const Description = styled.p`
//   margin: 0;
//   font-size: 15px;
//   line-height: 1.7;
//   color: ${({ theme }) => theme.text_secondary};

//   display: -webkit-box;
//   -webkit-line-clamp: 4;
//   -webkit-box-orient: vertical;
//   overflow: hidden;

//   ${Card}:hover & {
//     -webkit-line-clamp: unset;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const EducationCard = ({ education }) => {
//   return (
//     <Card>
//       <Top>
//         <Image
//           src={education.img}
//           alt={education.school}
//           loading="lazy"
//         />

//         <Body>
//           <Name title={education.school}>{education.school}</Name>

//           <Degree>{education.degree}</Degree>

//           <Date>{education.date}</Date>
//         </Body>
//       </Top>

//       {education.grade && (
//         <Grade>
//           <strong>CGPA / Grade:</strong> {education.grade}
//         </Grade>
//       )}

//       {education.desc && (
//         <Description>{education.desc}</Description>
//       )}
//     </Card>
//   );
// };

// export default EducationCard;


import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.article`
width: 100%;
max-width: 720px;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.25);
  box-shadow: 0 8px 30px rgba(23, 92, 230, 0.15);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(23, 92, 230, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 18px;
    gap: 14px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: #fff;
  border-radius: 16px;
  padding: 8px;
  border: 1px solid rgba(133, 76, 230, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Degree = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  display: inline-flex;
  align-self: flex-start;
  margin-top: 12px;
  padding: 7px 16px;
  border-radius: 30px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(133, 76, 230, 0.35);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.12);
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  font-weight: 600;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  line-height: 1.8;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : 4)};
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReadMore = styled.button`
  width: fit-content;
  margin-top: 4px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const EducationCard = ({ education }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <Top>
        <Image
          src={education.img}
          alt={education.school}
          loading="lazy"
        />

        <Body>
          <Name title={education.school}>
            {education.school}
          </Name>

          <Degree>
            {education.degree}
          </Degree>

          <Date>
            {education.date}
          </Date>
        </Body>
      </Top>

      {education.grade && (
        <Grade>
          🎓 {education.grade}
        </Grade>
      )}

      {education.desc && (
        <>
          <Description expanded={expanded}>
            {education.desc}
          </Description>

          {education.desc.length > 220 && (
            <ReadMore
              onClick={() =>
                setExpanded(!expanded)
              }
            >
              {expanded
                ? "Read Less"
                : "Read More"}
            </ReadMore>
          )}
        </>
      )}

      {education.coursework &&
        education.coursework.length > 0 && (
          <>
            <div
              style={{
                fontWeight: 600,
                marginTop: 6,
                color: "#854CE6",
              }}
            >
              Relevant Coursework
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {education.coursework.map(
                (course, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      background:
                        "rgba(133,76,230,.12)",
                      color: "#854CE6",
                      fontSize: "13px",
                      fontWeight: 500,
                      border:
                        "1px solid rgba(133,76,230,.25)",
                    }}
                  >
                    {course}
                  </div>
                )
              )}
            </div>
          </>
        )}
    </Card>
  );
};

export default EducationCard;