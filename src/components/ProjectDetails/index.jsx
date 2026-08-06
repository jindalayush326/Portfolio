// import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
// import { Modal } from '@mui/material';
// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// background-color: #000000a7;
// display: flex;
// align-items: top;
// justify-content: center;
// overflow-y: scroll;
// transition: all 0.5s ease;
// `;

// const Wrapper = styled.div`
// max-width: 800px;
// width: 100%;
// border-radius: 16px;
// margin: 50px 12px;
// height: min-content;
// background-color: ${({ theme }) => theme.card};
// color: ${({ theme }) => theme.text_primary};
// padding: 20px;
// display: flex;
// flex-direction: column;
// position: relative;
// `;

// const Title = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   margin: 8px 6px 0px 6px;
//   @media only screen and (max-width: 600px) {
//       font-size: 24px;
//       margin: 6px 6px 0px 6px;
//   }
// `;

// const Date = styled.div`
//     font-size: 16px;
//     margin: 2px 6px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary};
//     @media only screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `



// const Desc = styled.div`
//     font-size: 16px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_primary};
//     margin: 8px 6px;
//     @media only screen and (max-width: 600px) {
//         font-size: 14px;
//         margin: 6px 6px;
//     }
// `;

// const Image = styled.img`
//     width: 100%;
//     object-fit: cover;
//     border-radius: 12px;
//     margin-top: 30px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
// `;

// const Label = styled.div`
//     font-size: 20px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};
//     margin: 8px 6px;
//     @media only screen and (max-width: 600px) {
//         font-size: 16px;
//         margin: 8px 6px;
//     }
// `;

// const Tags = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin: 8px 0px;
//     @media only screen and (max-width: 600px) {
//         margin: 4px 0px;
//     }
// `;

// const Tag = styled.div`
//     font-size: 14px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     margin: 4px;
//     padding: 4px 8px;
//     border-radius: 8px;
//     background-color: ${({ theme }) => theme.primary + 20};
//     @media only screen and (max-width: 600px) {
//         font-size: 12px;
//     }
// `;

// const Members = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//     flex-wrap: wrap;
//     margin: 12px 6px;
//     @media only screen and (max-width: 600px) {
//         margin: 4px 6px;
//     }
// `;

// const Member = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 12px;
// `;

// const MemberImage = styled.img`
//     width: 50px;
//     height: 50px;
//     object-fit: cover;
//     border-radius: 50%;
//     margin-bottom: 4px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
//     @media only screen and (max-width: 600px) {
//         width: 32px;
//         height: 32px;
//     }
// `;

// const MemberName = styled.div`
//     font-size: 16px;
//     font-weight: 500;
//     width: 200px;
//     color: ${({ theme }) => theme.text_primary};
//     @media only screen and (max-width: 600px) {
//         font-size: 14px;
//     }
// `;


// const ButtonGroup = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin: 12px 0px;
//     gap: 12px;
// `;

// const Button = styled.a`
//     width: 100%;
//     text-align: center;
//     font-size: 16px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};
//     padding: 12px 16px;
//     border-radius: 8px;
//     background-color: ${({ theme }) => theme.primary};
//     ${({ dull, theme }) => dull && `
//         background-color: ${theme.bgLight};
//         color: ${theme.text_secondary};
//         &:hover {
//             background-color: ${({ theme }) => theme.bg + 99};
//         }
//     `}
//     cursor: pointer;
//     text-decoration: none;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: ${({ theme }) => theme.primary + 99};
//     }
//     @media only screen and (max-width: 600px) {
//         font-size: 12px;
//     }
// `;


// const index = ({ openModal, setOpenModal }) => {
//     const project = openModal?.project;
//     return (
//         <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
//             <Container>
//                 <Wrapper>
//                     <CloseRounded
//                         style={{
//                             position: "absolute",
//                             top: "10px",
//                             right: "20px",
//                             cursor: "pointer",
//                         }}
//                         onClick={() => setOpenModal({ state: false, project: null })}
//                     />
//                     <Image src={project?.image} />
//                     <Title>{project?.title}</Title>
//                     <Date>{project.date}</Date>
//                     <Tags>
//                         {project?.tags.map((tag) => (
//                             <Tag>{tag}</Tag>
//                         ))}
//                     </Tags>
//                     <Desc>{project?.description}</Desc>
//                     {project.member && (
//                         <>
//                             <Label>Members</Label>
//                             <Members>
//                                 {project?.member.map((member) => (
//                                     <Member>
//                                         <MemberImage src={member.img} />
//                                         <MemberName>{member.name}</MemberName>
//                                         <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
//                                             <GitHub />
//                                         </a>
//                                         <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
//                                             <LinkedIn />
//                                         </a>
//                                     </Member>
//                                 ))}
//                             </Members>
//                         </>
//                     )}
//                     <ButtonGroup>
//                         <Button dull href={project?.github} target='new'>View Code</Button>
//                         <Button href={project?.webapp} target='new'>View Live App</Button>
//                     </ButtonGroup>
//                 </Wrapper>
//             </Container>

//         </Modal>
//     )
// }

// export default index


import React from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import {
  CloseRounded,
  GitHub,
  Launch,
  LinkedIn,
  CalendarToday,
} from "@mui/icons-material";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 950px;

  background: ${({ theme }) => theme.card};

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  overflow: hidden;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);

  animation: popup 0.35s ease;

  position: relative;

  @keyframes popup {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 42px;
  height: 42px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: rgba(0, 0, 0, 0.45);

  color: white;

  transition: 0.3s;

  z-index: 5;

  &:hover {
    background: ${({ theme }) => theme.primary};
    transform: rotate(90deg);
  }
`;

const Hero = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 430px;

  object-fit: cover;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    ${({ theme }) => theme.card} 2%,
    transparent 60%
  );
`;

const Content = styled.div`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.text_secondary};

  font-size: 14px;
`;

const Title = styled.h2`
  margin: 0;

  font-size: 34px;

  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  margin-top: 24px;

  color: ${({ theme }) => theme.text_secondary};

  font-size: 16px;

  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SectionTitle = styled.h3`
  margin-top: 35px;
  margin-bottom: 18px;

  font-size: 22px;

  color: ${({ theme }) => theme.text_primary};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 20px;
`;

const Tag = styled.span`
  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(133, 76, 230, 0.15);

  color: ${({ theme }) => theme.primary};

  font-size: 13px;

  font-weight: 600;

  border: 1px solid rgba(133, 76, 230, 0.25);
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 14px 16px;

  border-radius: 14px;

  background: rgba(255,255,255,.03);

  border: 1px solid rgba(255,255,255,.06);

  transition: .3s ease;

  &:hover{
    border-color:${({ theme }) => theme.primary};
    transform: translateX(6px);
  }
`;

const MemberImage = styled.img`
  width: 54px;
  height: 54px;

  border-radius: 50%;

  object-fit: cover;

  border: 2px solid ${({ theme }) => theme.primary};
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 600;

  color: ${({ theme }) => theme.text_primary};
`;

const MemberRole = styled.div`
  font-size: 13px;

  color: ${({ theme }) => theme.text_secondary};

  margin-top: 3px;
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.a`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255,255,255,.05);

  color: ${({ theme }) => theme.text_primary};

  transition: .3s;

  &:hover{
    background:${({ theme }) => theme.primary};
    color:white;
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: rgba(255,255,255,.08);

  margin: 35px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;

  margin-top: 35px;

  @media(max-width:640px){
    flex-direction:column;
  }
`;

const Button = styled.a`
  flex:1;

  display:flex;
  justify-content:center;
  align-items:center;

  gap:10px;

  padding:15px 18px;

  border-radius:14px;

  text-decoration:none;

  font-weight:600;

  transition:.3s ease;

  background:${({ primary, theme }) =>
    primary
      ? theme.primary
      : "rgba(255,255,255,.05)"};

  color:${({ primary, theme }) =>
    primary
      ? "#fff"
      : theme.text_primary};

  border:1px solid
    ${({ primary, theme }) =>
      primary
        ? theme.primary
        : "rgba(255,255,255,.08)"};

  &:hover{
    transform:translateY(-3px);

    box-shadow:0 12px 28px rgba(0,0,0,.25);
  }
`;

const Empty = styled.div`
  text-align:center;

  color:${({ theme }) => theme.text_secondary};

  padding:40px 0;
`;

const Index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  if (!project) return null;

  return (
    <Modal
      open={true}
      onClose={() =>
        setOpenModal({
          state: false,
          project: null,
        })
      }
    >
      <Overlay>
        <Wrapper>

          <CloseButton
            onClick={() =>
              setOpenModal({
                state: false,
                project: null,
              })
            }
          >
            <CloseRounded />
          </CloseButton>

          <Hero>
            <Image
              src={project.image}
              alt={project.title}
            />
            <Gradient />
          </Hero>

          <Content>

            <Header>

              <Left>
                <Title>{project.title}</Title>
              </Left>

              <Right>
                <CalendarToday
                  style={{ fontSize: 18 }}
                />
                {project.date}
              </Right>

            </Header>

            <Tags>
              {project.tags?.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                </Tag>
              ))}
            </Tags>

            <Description>
              {project.description}
            </Description>

            {project.member?.length > 0 && (
              <>
                <SectionTitle>
                  Team Members
                </SectionTitle>

                <Members>

                  {project.member.map(
                    (member, index) => (
                      <Member key={index}>

                        <MemberImage
                          src={member.img}
                          alt={member.name}
                        />

                        <MemberInfo>

                          <MemberName>
                            {member.name}
                          </MemberName>

                          <MemberRole>
                            Team Member
                          </MemberRole>

                        </MemberInfo>

                        <Socials>

                          {member.github && (
                            <IconButton
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHub />
                            </IconButton>
                          )}

                          {member.linkedin && (
                            <IconButton
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedIn />
                            </IconButton>
                          )}

                        </Socials>

                      </Member>
                    )
                  )}

                </Members>
              </>
            )}


                        <Divider />

            <SectionTitle>Project Links</SectionTitle>

            {(project.github || project.webapp) ? (
              <ButtonGroup>

                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                    Source Code
                  </Button>
                )}

                {project.webapp && (
                  <Button
                    primary
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Launch />
                    Live Demo
                  </Button>
                )}

              </ButtonGroup>
            ) : (
              <Empty>
                Links are not available for this project.
              </Empty>
            )}

          </Content>

        </Wrapper>

      </Overlay>

    </Modal>
  );
};

export default Index;