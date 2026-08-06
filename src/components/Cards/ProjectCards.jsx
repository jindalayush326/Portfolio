// import React from 'react'
// import styled from 'styled-components'


// const Button = styled.button`
//     display: none;
//     width: 100%;
//     padding: 10px;
//     background-color: ${({ theme }) => theme.white};
//     color: ${({ theme }) => theme.text_black};
//     font-size: 14px;
//     font-weight: 700;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all 0.8s ease-in-out;
// `
// const Card = styled.div`
//     width: 330px;
//     height: 490px;
//     background-color: ${({ theme }) => theme.card};
//     cursor: pointer;
//     border-radius: 10px;
//     box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
//     overflow: hidden;
//     padding: 26px 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//     transition: all 0.5s ease-in-out;
//     &:hover {
//         transform: translateY(-10px);
//         box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
//         filter: brightness(1.1);
//     }
//     &:hover ${Button} {
//         display: block;
//     }
// `

// const Image = styled.img`
//     width: 100%;
//     height: 180px;
//     background-color: ${({ theme }) => theme.white};
//     border-radius: 10px;
//     box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
// `

// const Tags = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 8px;
//     margin-top: 4px;
// `

// const Tag = styled.span`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     background-color: ${({ theme }) => theme.primary + 15};
//     padding: 2px 8px;
//     border-radius: 10px;
// `

// const Details = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 0px;
//     padding: 0px 2px;
// `
// const Title = styled.div`
//     font-size: 20px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_secondary};
//     overflow: hidden;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `

// const Date = styled.div`
//     font-size: 12px;
//     margin-left: 2px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};
//     @media only screen and (max-width: 768px){
//         font-size: 10px;
//     }
// `


// const Description = styled.div`
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 99};
//     overflow: hidden;
//     margin-top: 8px;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     text-overflow: ellipsis;
// `

// const Members = styled.div`
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
// `
// const Avatar = styled.img`
//     width: 38px;
//     height: 38px;
//     border-radius: 50%;
//     margin-left: -10px;
//     background-color: ${({ theme }) => theme.white};
//     box-shadow: 0 0 10px rgba(0,0,0,0.2);
//     border: 3px solid ${({ theme }) => theme.card};
// `

// const ProjectCards = ({project,setOpenModal}) => {
//     return (
//         <Card onClick={() => setOpenModal({state: true, project: project})}>
//             <Image src={project.image}/>
//             <Tags>
//                 {project.tags?.map((tag, index) => (
//                 <Tag>{tag}</Tag>
//                 ))}
//             </Tags>
//             <Details>
//                 <Title>{project.title}</Title>
//                 <Date>{project.date}</Date>
//                 <Description>{project.description}</Description>
//             </Details>
//             <Members>
//                 {project.member?.map((member) => (
//                     <Avatar src={member.img}/>
//                 ))}
//             </Members>
//             {/* <Button>View Project</Button> */}
//         </Card>
//     )
// }

// export default ProjectCards


import React from "react";
import styled from "styled-components";
import { Launch, GitHub } from "@mui/icons-material";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 22px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255,255,255,.08);

  backdrop-filter: blur(16px);

  transition: all .35s ease;

  cursor: pointer;

  &:hover{
      transform: translateY(-10px);

      border-color:${({theme})=>theme.primary};

      box-shadow:
      0 20px 50px rgba(0,0,0,.35);

      .project-image{
          transform: scale(1.08);
      }

      .overlay{
          opacity:1;
      }

      .view-btn{
          transform:translateY(0);
          opacity:1;
      }
  }
`;

const ImageContainer = styled.div`
  position: relative;

  overflow:hidden;

  height:220px;
`;

// const Overlay = styled.div`
//   position:absolute;
//   inset:0;

//   background:linear-gradient(
//   rgba(0,0,0,.15),
//   rgba(0,0,0,.75));

//   display:flex;
//   justify-content:center;
//   align-items:center;

//   opacity:0;

//   transition:.35s ease;
// `;

// const ViewButton = styled.div`
//   padding:12px 24px;

//   border-radius:40px;

//   background:${({theme})=>theme.primary};

//   color:white;

//   font-weight:600;

//   display:flex;
//   align-items:center;
//   gap:8px;

//   transform:translateY(20px);

//   opacity:0;

//   transition:.35s ease;
// `;

const Image = styled.img`
  width:100%;
  height:100%;

  object-fit:cover;

  transition:.5s ease;
`;

const Content = styled.div`
  padding:22px;

  display:flex;
  flex-direction:column;

  flex:1;
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
gap:12px;
`;

const Title = styled.h3`
margin:0;

font-size:22px;

font-weight:700;

color:${({theme})=>theme.text_primary};
`;

const Date = styled.span`
font-size:13px;

color:${({theme})=>theme.text_secondary};

white-space:nowrap;
`;

const Description = styled.p`
margin:18px 0;

color:${({theme})=>theme.text_secondary};

line-height:1.7;

font-size:15px;

display:-webkit-box;
-webkit-line-clamp:4;
-webkit-box-orient:vertical;
overflow:hidden;
`;

const Tags = styled.div`
display:flex;

flex-wrap:wrap;

gap:10px;

margin-bottom:22px;
`;

const Tag = styled.span`
padding:6px 12px;

border-radius:999px;

font-size:12px;

font-weight:600;

background:rgba(133,76,230,.15);

color:${({theme})=>theme.primary};

border:1px solid rgba(133,76,230,.25);
`;

const Footer = styled.div`
margin-top:auto;

display:flex;

justify-content:space-between;

align-items:center;
`;

const ActionButtons = styled.div`
display:flex;
gap:12px;
`;

const IconButton = styled.a`
display:flex;
align-items:center;
justify-content:center;

width:42px;
height:42px;

border-radius:50%;

background:rgba(255,255,255,.06);

color:${({theme})=>theme.text_primary};

transition:.3s;

&:hover{
    background:${({theme})=>theme.primary};
    color:white;
}
`;

const DetailsButton = styled.button`
border:none;

padding:10px 18px;

border-radius:30px;

cursor:pointer;

font-weight:600;

background:${({theme})=>theme.primary};

color:white;

transition:.3s;

&:hover{
    transform:translateY(-2px);
}
`;

const ProjectCards = ({ project, setOpenModal }) => {

  return (

    <Card>

      <ImageContainer>

        <Image
          className="project-image"
          src={project.image}
          alt={project.title}
        />

        {/* <Overlay className="overlay">

          <ViewButton className="view-btn">
            View Project
          </ViewButton>

        </Overlay> */}

      </ImageContainer>

      <Content>

        <Header>

          <Title>{project.title}</Title>

          <Date>{project.date}</Date>

        </Header>

        <Description>

          {project.description}

        </Description>

        <Tags>

          {project.tags?.slice(0,5).map((tag,index)=>(
            <Tag key={index}>{tag}</Tag>
          ))}

        </Tags>

        <Footer>

          <ActionButtons>

            {project.github &&

            <IconButton
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e)=>e.stopPropagation()}
            >
              <GitHub/>
            </IconButton>

            }

            {project.webapp &&

            <IconButton
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              onClick={(e)=>e.stopPropagation()}
            >
              <Launch/>
            </IconButton>

            }

          </ActionButtons>

          <DetailsButton
            onClick={() =>
              setOpenModal({
                state:true,
                project
              })
            }
          >
            Details
          </DetailsButton>

        </Footer>

      </Content>

    </Card>

  );
};

export default ProjectCards;