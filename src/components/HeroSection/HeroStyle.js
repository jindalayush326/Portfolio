import styled from "styled-components";
// import _default from "../../themes/default";

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  padding: 90px 30px 120px;

  background: ${({ theme }) => theme.background};

  @media (max-width: 960px) {
    padding: 80px 20px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  z-index: 0;
`;

export const HeroInnerContainer = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 70px;

  position: relative;
  z-index: 2;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  z-index: 2;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 60px;
  }
`;

export const Img = styled.img`
  position: relative;

  z-index: 3;

  width: 100%;
  max-width: 410px;
  max-height: 410px;

  object-fit: cover;

  border-radius: 50%;

  border: 3px solid ${({ theme }) => theme.primary};

  box-shadow: 0 0 40px rgba(133,76,230,.35);
`;

export const Title = styled.h1`
  font-size: 62px;
  font-weight: 800;
  line-height: 1.15;
  color: ${({theme})=>theme.text_primary};

  margin-bottom:20px;

  @media(max-width:768px){
      font-size:42px;
  }
`;

export const TextLoop = styled.div`
  display:flex;
  align-items:center;
  gap:12px;

  font-size:34px;

  font-weight:700;

  margin-bottom:22px;

  color:${({theme})=>theme.text_primary};

  @media(max-width:768px){
      font-size:26px;
      justify-content:center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.p`
  max-width:650px;

  font-size:19px;

  line-height:1.9;

  color:${({theme})=>theme.text_secondary};

  margin-bottom:35px;
`;

export const ResumeButton = styled.a`
display:inline-flex;

justify-content:center;

align-items:center;

width:220px;

height:58px;

border-radius:14px;

background:linear-gradient(135deg,#854CE6,#A855F7);

color:white;

font-size:18px;

font-weight:700;

text-decoration:none;

transition:.3s;

&:hover{

transform:translateY(-4px);

box-shadow:0 15px 35px rgba(133,76,230,.35);

}
`;



export const ContactButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 58px;

  border-radius: 14px;

  text-decoration: none;

  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.primary};

  background: transparent;

  border: 2px solid ${({ theme }) => theme.primary};

  transition: all 0.35s ease;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(133, 76, 230, 0.35);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 54px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 45px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 24px;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
`;

export const StatNumber = styled.h2`
  margin: 0;
  font-size: 34px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const StatLabel = styled.p`
  margin-top: 6px;
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const StatIcon = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;