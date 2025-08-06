import {
  Html,
  Head,
  Body,
  Container,
  Img,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const InvitationEmail = ({ role = "Advertiser" }) => {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
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

          <Section style={{ width: "100%" }}>
            <hr style={dashedLine}></hr>
          </Section>

          <Section style={box1}>
            <Section style={box2}>
              <Img
                src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/open-envelope.png"
                alt="password reset"
                width="145"
                height="145"
                style={img1}
              />
              <Text style={title1}>Password Changed Successfully!</Text>
              <Section style={{ textAlign: "center", marginTop: "-0.6rem" }}>
                <Text style={title2}>
                  Your AdGeist account password was updated successfully. If
                  this was you, no action is needed.
                </Text>
              </Section>
              <Section style={{ textAlign: "center", marginTop: "-0.6rem" }}>
                <Text style={title3}>
                  If this wasn't you, click the button below to secure your
                  account.
                </Text>
              </Section>

              <div style={buttonWrapper}>
                <a href="https://example.com" style={buttonStyle}>
                  THAT WASN'T ME!
                </a>
              </div>

              <Section style={{ textAlign: "center", marginTop: "-0.6rem" }}>
                <Text style={title4}>Security Tip:</Text>
                <Text style={title5}>
                  Never share your login credentials with anyone, not even us.
                </Text>
              </Section>
            </Section>
          </Section>

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

export default InvitationEmail;

const body: React.CSSProperties = {
   fontFamily: `'Lucida Console', 'Courier New', monospace`,
  padding: "1rem",
  width: "100%",
  margin: "0 0 0 0",
  boxSizing: "border-box",
  overflowX: "hidden",
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

const dashedLine: React.CSSProperties = {
  borderTop: "1px dashed #7d7b77",
  width: "100%",
  margin: "0 0 0.7rem 0",
  padding: "0 0 0 0",
  display: "inline-block",
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

const box1: React.CSSProperties = {
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

const box2: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  borderRadius: "8px",
  justifyContent: "center",
  width: "100%",
};

const title1: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.6rem",
  width: "100%",
  maxWidth: "450px",
  margin: "0rem auto 1rem auto",
  textAlign: "center",
  lineHeight: "1.75rem",
  color: "#63AA75",
};

const title2: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  width: "100%",
  maxWidth: "380px",
  margin: "0rem auto 1.2rem auto",
  color: "#000",
  textAlign: "center",
  lineHeight: "1.7rem",
};

const title3: React.CSSProperties = {
  fontSize: "0.8rem",
  width: "100%",
  maxWidth: "380px",
  margin: "0rem auto 0rem auto",
  color: "#000",
  textAlign: "center",
  lineHeight: "0.95rem",
};

const title4: React.CSSProperties = {
  fontWeight: "bolder",
  fontSize: "0.78rem",
  width:"100%",
  margin: "0.7rem auto 0rem auto",
  color: "#000",
  textAlign: "center",
  lineHeight: "1rem",
};

const title5: React.CSSProperties = {
  fontSize: "0.7rem",
    width: "100%",
  maxWidth: "450px",
  margin: "0rem auto 1.5rem auto",
  color: "#000",
  textAlign: "center",
  lineHeight: "1.1rem",
};

const img1: React.CSSProperties = {
  width: "145px",
  height: "145px",
  display: "block",
  margin: "0 auto",
};

// Button container style
const buttonWrapper: React.CSSProperties = {
  textAlign: "center",
};

// Button style
const buttonStyle: React.CSSProperties = {
  backgroundColor: "#000000",
  width: "150px",
  height: "30px",
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "0.82rem",
  letterSpacing: "0.025em",
  textTransform: "uppercase",
  textAlign: "center",
  alignItems: "center",
  display: "inline-block",
  lineHeight: "30px",
  textDecoration: "none",
  borderRadius: "6px",
  marginBottom: "12px",
  marginTop: "10px",
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
