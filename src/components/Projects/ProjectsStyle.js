import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 24px;
  position: relative;
  overflow: hidden;

  background: radial-gradient(
      circle at top right,
      rgba(133, 76, 230, 0.12),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(88, 166, 255, 0.08),
      transparent 35%
    );

  @media (max-width: 768px) {
    padding: 80px 18px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Desc = styled.p`
  width: 100%;
  max-width: 760px;

  text-align: center;
  line-height: 1.8;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};

  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 35px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;

  margin-bottom: 60px;
`;

export const ToggleButton = styled.button`
  border: none;
  outline: none;

  cursor: pointer;

  padding: 12px 22px;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;

  transition: all 0.35s ease;

  background: ${({ active, theme }) =>
    active ? theme.primary : "rgba(255,255,255,0.05)"};

  color: ${({ active, theme }) =>
    active ? "#fff" : theme.text_primary};

  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.primary : "rgba(255,255,255,0.08)"};

  backdrop-filter: blur(18px);

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) => theme.primary};

    color: white;

    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.35);
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

export const Divider = styled.div`
  display: none;
`;

export const CardContainer = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

  gap: 32px;

  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;