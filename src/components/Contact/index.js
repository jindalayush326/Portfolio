// import React from 'react';
// import styled from 'styled-components';
// import { Snackbar } from '@mui/material';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
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
//   padding: 0px 0px 80px 0px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
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

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;

// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ theme }) => theme.card};
//   padding: 32px;
//   border-radius: 16px;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `;

// const ContactTitle = styled.div`
//   font-size: 24px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;

// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;

// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `;

// const Contact = () => {
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   // Simulating form submission (you will replace this with your actual email sending code)
//   //   setTimeout(() => {
//   //     setOpenSnackbar(true);
//   //     // Redirecting to home page after 3 seconds
//   //     setTimeout(() => {
//   //       window.location.href = '/'; // Replace with your home page URL
//   //     }, 3000);
//   //   }, 1000);
//   // };

//   return (
//     <Container>
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
//         <ContactForm action="https://formsubmit.co/jindalgoldy326@gmail.com" method="POST" >
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput type="email" placeholder="Your Email" name="mail" required />
//           <ContactInput placeholder="Your Name" name="name" required />
//           <ContactInput placeholder="Subject" name="subject" required />
//           <ContactInput type="hidden" name="_captcha" value={false} />
//           <ContactInput type="hidden" name="_template" value={false} />
//           <ContactInputMessage placeholder="Message" rows="4" name="message" required />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//         <Snackbar
//           open={openSnackbar}
//           autoHideDuration={6000}
//           onClose={() => setOpenSnackbar(false)}
//           message="Email sent successfully!"
//           severity="success"
//         />
//       </Wrapper>
//     </Container>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import styled from "styled-components";
import { Snackbar, Alert } from "@mui/material";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 90px 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 70px 16px;
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
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 45px;
`;

const InfoCard = styled.div`
  min-width: 220px;
  padding: 18px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.2);
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.2);
  }
`;

const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`;

const InfoValue = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 40px;
  background: ${({ theme }) => theme.card};
  border-radius: 22px;
  border: 1px solid rgba(133, 76, 230, 0.2);
  box-shadow: 0 10px 35px rgba(23, 92, 230, 0.15);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInput = styled.input`
  flex: 1;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(133, 76, 230, 0.2);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(133, 76, 230, 0.15);
  }
`;

const ContactTextarea = styled.textarea`
  min-height: 170px;
  resize: vertical;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(133, 76, 230, 0.2);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(133, 76, 230, 0.15);
  }
`;

const ContactButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #854ce6, #a855f7);
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.35);
  }
`;

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setOpenSnackbar(true);
    }, 500);
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Let's Connect</Title>

        <Desc>
          I'm always open to discussing Software Engineering, Backend
          Development, Data Analytics, new opportunities, collaborations,
          or innovative ideas. Feel free to reach out and I'll get back to
          you as soon as possible.
        </Desc>

        <ContactInfo>
          <InfoCard>
            <InfoTitle>📧 Email</InfoTitle>
            <InfoValue>
              jindalayushaj@gmail.com
            </InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>📱 Phone</InfoTitle>
            <InfoValue>
              +91-7351661361
            </InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>📍 Location</InfoTitle>
            <InfoValue>
              Uttar Pradesh, India
            </InfoValue>
          </InfoCard>
        </ContactInfo>

        <ContactForm
          action="https://formsubmit.co/jindalgoldy326@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <ContactTitle>
            Send Me a Message 🚀
          </ContactTitle>

          <Row>
            <ContactInput
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <ContactInput
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </Row>

          <ContactInput
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <ContactTextarea
            name="message"
            placeholder="Write your message..."
            required
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact"
          />

          <ContactButton type="submit">
            Send Message 🚀
          </ContactButton>
        </ContactForm>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setOpenSnackbar(false)}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
