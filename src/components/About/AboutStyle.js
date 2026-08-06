// import styled from 'styled-components';
// import _default from '../../themes/default';


// export const SocialMediaIcons = styled.div`
//   display: flex;
//   margin-top: 1rem;
// `;

// export const SocialMediaIcon = styled.a`
//   display: inline-block;
//   margin: 0 1rem;
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.text_primary};
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;





import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const AboutContent = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 24px;
`;

export const AboutTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const SocialMediaIcon = styled.a`
  font-size: 26px;
  color: ${({ theme }) => theme.text_primary};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;