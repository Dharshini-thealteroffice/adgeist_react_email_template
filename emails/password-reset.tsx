import {
  Html,
  Head,
  Body,
  Img,
  Container,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

export const VerificationEmail = ({ role = "Advertiser", otp = "123456" }) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={body}>
        <Container style={container}>
          {/* Logo & Label */}
          <Section>
            <Section style={{ textAlign: "center" }}>
              <table
                role="presentation"
                style={{
                  margin: "0.7rem auto",
                  marginBottom: "0.7rem",
                }}
              >
                <tr>
                  <td style={{ textAlign: "center", paddingRight: "0.5rem" }}>
                    <Img
                      src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/adgiest-logo.png"
                      alt="Adgeist"
                      width={100}
                      height={30}
                      style={logoImg}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div style={advertiserBox}>{role}</div>
                  </td>
                </tr>
              </table>
            </Section>
          </Section>

          {/* Divider */}
          <Section style={{ width: "100%" }}>
            <hr style={dashedLine}></hr>
          </Section>

          {/* Card Box */}
          <div style={cardWrapper}>
            <div style={cardBox}>
              <h1 style={title}>Welcome to Adgeist!</h1>
              <h3 style={subtitle}>
               To complete password reset, please use the verification code below.
              </h3>

              <div>
                <div
                  style={{
                    backgroundImage:
                      'url("https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/plain-envelope.png")',
                    backgroundSize: "auto 95%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    height: "20rem",
                    width: "100%",
                   
                    paddingTop: "1.8rem",
                    boxSizing: "border-box",
                    textAlign: "center"
                  }}

                >
                  <Text
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "#000",
                      marginBottom: "0rem",
                    }}
                  >
                    Your Verification Code:
                  </Text>

                  <div
                    style={{
                      display: "inline-block",
                      border: "1px solid #000000",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "6px",
                      padding: "0.7rem 1.5rem",
                      maxWidth: "12rem",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 400,
                        fontSize: "1.4rem",
                        letterSpacing: "0.7rem",
                        width: "100%",
                        margin: "0 auto 0 auto",
                        color: "#000",
                      }}
                    >
                      {otp}
                    </Text>
                  </div>

                  <Text
                    style={{
                      fontSize: "0.65rem",
                      color: "#000",
                      opacity: "80%",
                      marginTop: "0rem",
                    }}
                  >
                    This code is valid for 10 minutes.
                  </Text>
                </div>
              </div>

              <div style={{ marginBottom: "1rem", marginTop: "-8px" }}>
                <p style={subdesc}>
                  For your security, don't share this code with anyone. If you
                  didn't request this, please ignore this email or contact our
                  support team.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div style={{ marginBottom: "0.8rem" }}>
            <div>
              <div style={{ ...footerText1, fontWeight: "bold" }}>
                Need help? Reach out to us at
              </div>
              <div style={{ ...footerText1, fontWeight: "bolder" }}>
                mugesh@thealteroffice.com
              </div>
            </div>
            <div style={{ marginTop: "11px" }}>
              <div style={footerText2}>
                AdGeist by ITW Global and The Alter Office
              </div>
              <div style={footerText2}>
                &copy; 2025 The Alter Office. All rights reserved.
              </div>
            </div>
          </div>
        </Container>
      </Body>
    </Html>
  );
};

export default VerificationEmail;

const body: React.CSSProperties = {
  fontFamily: `'Lucida Console', 'Courier New', monospace`,
  padding: "1rem",
  width: "100%",
  margin: "0 0 0 0",
  boxSizing: "border-box",
  letterSpacing: "-0.02rem",
};

const container: React.CSSProperties = {
  maxWidth: "450px",
  border: "1px solid #B1B1B1",
  backgroundColor: "#d1cdc7",
};

const logoImg: React.CSSProperties = {
  height: "1.875rem",
  width: "6.25rem",
};

const otpBox: React.CSSProperties = {
  textAlign: "center",
  display: "inline-block",
  border: "1px solid #000000",
  padding: "0.5rem",
  justifyContent: "center",
  maxWidth: "12rem",
  width: "100%",
  position: "absolute",
  top: "4.7rem",
  left: "49%",
  transform: "translateX(-50%)",
  backgroundColor: "#D9D9D9",
  borderRadius: "6px",
};

const advertiserBox: React.CSSProperties = {
  border: "1px solid #000000",
  backgroundColor: "#D9D9D9",
  height: "1.75rem",
  padding: "0 0.3125rem",
  lineHeight: "1.75rem",
  fontWeight: 700,
  fontSize: "1rem",
  color: "#000",
  marginTop: "-0.125rem",
};

const dashedLine: React.CSSProperties = {
  borderTop: "1px dashed #7d7b77",
  width: "100%",
  margin: "0 0 0.8rem 0",
  padding: "0 0 0 0",
  display: "inline-block",
};

const cardWrapper: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  borderRadius: "10px",
  backgroundColor: "#DDDAD6",
  width: "93%",
  alignSelf: "center",
  margin: "0 auto 0.9rem 1rem",
  padding: "0.32rem",
  boxSizing: "border-box",
  boxShadow: "0px 0px 4px 0px #A59681 inset",
};

const cardBox: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  borderRadius: "8px",
  justifyContent: "center",
  width: "100%",
};

const title: React.CSSProperties = {
  color: "#63AA75",
  fontWeight: 700,
  textAlign: "center",
  fontSize: "1.6rem",
  margin: "0.8rem auto 0 auto",
  maxWidth:"400px",
  width: "100%"
};

const subtitle: React.CSSProperties = {
  fontFamily: "Courier New, monospace",
  fontWeight: 700,
  textAlign: "center",
  fontSize: "1.29rem",
  color: "#000",
  padding: "0 1.5rem",
  lineHeight: "1.601875rem",
  letterSpacing: "-0.04em",
  width: "85%",
  maxWidth: "350px",
  margin: "0.5rem auto 0.2rem auto",
};

const subdesc: React.CSSProperties = {
  fontSize: "0.65rem",
  color: "#000",
  opacity: "60%",
  textAlign: "center",
  width: "95%",
  maxWidth: "350px",
  lineHeight: "1rem",
  margin: "0.5rem auto 0.1rem auto",
};

const otpContainer: React.CSSProperties = {
  position: "relative", // required for absolute positioning inside
  height: "19.5rem",
  width: "100%",
  backgroundImage:
    'url("https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/plain-envelope.png")',
  backgroundSize: "auto 100%",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
};

const otpTextTop: React.CSSProperties = {
  color: "#000",
  fontSize: "0.85rem",
  position: "absolute",
  top: "2rem",
  fontWeight: 400,
  left: "50%",
  transform: "translateX(-50%)",
};

const otpCode: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#000",
  width: "100%",
  letterSpacing: "0.7rem",
  margin: "0", // center the text vertically if needed
};

const otpTextSmall: React.CSSProperties = {
  fontSize: "0.655rem",
  color: "#000",
  opacity: "80%",

  marginTop: "4%",
  width: "100%",
  position: "absolute",
  top: "6.5rem",
  left: "50%",
  transform: "translateX(-50%)",
};

const footerText1: React.CSSProperties = {
  fontSize: "0.75rem",
  marginBottom: "0px",
  color: "#000",
  textAlign: "center",
  letterSpacing: "0.009rem",
};

const footerText2: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.65rem",
  color: "#000",
  marginBottom: "0px",
  textAlign: "center",
  opacity: "50%",
  letterSpacing: "0.003rem",
};
