
// import React from 'react'
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import { education, experiences } from '../../data/constants';
// import EducationCard from '../Cards/EducationCard';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 0px 0px 60px 0px;
//     @media (max-width: 960px) {
//         padding: 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 40px 0px 0px 0px;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//     @media (max-width: 660px) {
//         align-items: end;
//     }
// `;



// const index = () => {
//     return (
//         <Container id="education">
//             <Wrapper>
//                 <Title>Education</Title>
//                 <Desc>
//                     My education has been a journey of self-discovery and growth. My educational details are as follows.
//                 </Desc>
//                 <TimelineSection>
//                     <Timeline>
//                         {education.map((education,index) => (
//                             <TimelineItem >
//                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                                     <EducationCard education={education}/>
//                                 </TimelineContent>
//                                 <TimelineSeparator>
//                                     <TimelineDot variant="outlined" color="secondary" />
//                                     {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
//                                 </TimelineSeparator>
//                             </TimelineItem>
//                         ))}
//                     </Timeline>

//                 </TimelineSection>
//             </Wrapper>
//         </Container>
//     )
// }

// export default index










import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

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
  margin-bottom: 18px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Desc = styled.p`
  max-width: 760px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTimeline = styled(Timeline)`
  padding: 0 !important;
  margin: 0 auto !important;
  width: 100%;
  max-width: 900px;

  .MuiTimelineItem-root {
    min-height: 320px;
  }

  .MuiTimelineItem-root::before {
    display: none !important;
    flex: 0 !important;
    padding: 0 !important;
  }

  .MuiTimelineContent-root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 24px !important;
  }

  .MuiTimelineSeparator-root {
    flex: 0;
  }

  @media (max-width: 768px) {
    .MuiTimelineContent-root {
      justify-content: flex-start;
      padding-left: 18px !important;
    }
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education & Learning</Title>

        <Desc>
          My academic journey has built a strong foundation in Computer
          Science, Artificial Intelligence, Backend Engineering, Databases,
          Software Development, and Data Analytics. It has equipped me with
          both technical knowledge and problem-solving skills that I continue
          to apply in real-world software engineering projects.
        </Desc>

        <TimelineSection>
          <StyledTimeline position="right">
  {education.map((item, index) => (
    <TimelineItem key={item.id}>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor: "#111827",
            border: "4px solid #854CE6",
            width: 22,
            height: 22,
            boxShadow: "0 0 15px rgba(133,76,230,.45)",
          }}
        />

        {index !== education.length - 1 && (
          <TimelineConnector
            sx={{
              bgcolor: "#854CE6",
              width: "3px",
              minHeight: "140px",
            }}
          />
        )}
      </TimelineSeparator>

      <TimelineContent sx={{
        pb: 8,
        display: "flex",
        justifyContent: "center",
    }}>
        <EducationCard education={item} />
      </TimelineContent>
    </TimelineItem>
  ))}
</StyledTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;