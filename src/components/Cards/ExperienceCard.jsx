import React, { useState } from 'react';
import styled from 'styled-components';

const Description = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  max-height: ${({ expanded }) => (expanded ? 'none' : '40px')};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : '3')};
  -webkit-box-orient: vertical;
  transition: max-height 0.3s ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Span = styled.span`
  display: block;
`;

const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.background};
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 8px;
    gap: 6px;
    width: 100%;
  }

  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  cursor: pointer; /* Add cursor pointer to indicate clickable */
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Company = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Role = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 6px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Date = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 12px;
  padding: 6px 14px;

  border-radius: 30px;

  background: rgba(133, 76, 230, 0.18);

  color: #c89cff;

  font-size: 13px;
  font-weight: 600;

  border: 1px solid rgba(133, 76, 230, 0.35);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: -8px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Skill = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Image = styled.img`
  width: 82px;
  height: 82px;

  object-fit: contain;

  background: white;

  padding: 8px;

  border-radius: 14px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 6px 18px;

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
  }
`;

const ExperienceCard = ({ experience, onExpand }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
    onExpand(); // Call the parent callback to handle scroll
  };

  return (
    <Card onClick={handleToggleExpand}>
      <Top>
        <Image
          src={experience.img}
          alt={experience.company}
          loading="lazy"
        />
        <Body>
          <Company>{experience.company}</Company>
          <Role>{experience.role}</Role>

          {/* Use a proper styled component or HTML element for date */}
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description expanded={expanded}>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {/* Use an anchor tag for linking documents */}
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          Certificate
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
