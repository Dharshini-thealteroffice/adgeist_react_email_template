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

export const InvitationEmail = ({
  userType = "Advertiser",
  role = "Ad Manager",
  invitedBy = "Monika ",
  sentOn = "Jan 12, 2025",
  brandName = "AdsProTech pvt",
  source = "cdcd",
  logo = "https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/apt.png",
  message = "dfeskjnfj felf efpofe fopeigk fpoekpki fpoekfpok ofkpeo pfokeo okfoekp "
}) => {
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
                }}
              >
                <tr>
                  <td style={{ textAlign: "center", paddingRight: "0.1rem" }}>
                    <Img
                      src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/adgiest-logo.png"
                      alt="Adgeist"
                      width={100}
                      height={30}
                      style={logoImg}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div style={advertiserBox}>{userType}</div>
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
                src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/invitation.png"
                alt="invitation"
                width="100"
                height="100"
                style={img1}
              />
              <Text style={title1}>
                You are invited to join as an{" "}
                <span style={title1Text}>{role}</span>
              </Text>
              <Section style={{ textAlign: "center", marginTop: "-0.6rem" }}>
                <table
                  align="center"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                  style={{ margin: "0.4rem auto 0rem auto" }}
                >
                  <tr>
                    <td style={{color: "black", fontSize: "0.7rem"}}>At</td>
                    <td>
                      <Img
                        src={logo}
                        alt="apt"
                        width="24"
                        height="22"
                        style={{ verticalAlign: "middle", margin: "0 8px" }}
                      />
                    </td>
                    <td style={{color: "black", fontSize: "0.7rem"}}>{brandName}.</td>
                  </tr>
                </table>
              </Section>

              <Section style={tableSection}>
                <table style={table}>
                  <thead>
                    <tr>
                      <th style={{...th, width: "95px"}}>Detail</th>
                      <th style={th}>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdTitle}>Invited by</td>
                      <td style={td}>{invitedBy}</td>
                    </tr>
                    <tr>
                      <td style={tdTitle}>Role</td>
                      <td style={td}>{role}</td>
                    </tr>
                    <tr>
                      <td style={tdTitle}>Sent on</td>
                      <td style={td}>{sentOn}</td>
                    </tr>
                     <tr>
                      <td style={tdTitle}>Message</td>
                      <td style={{...td, lineHeight: "1rem"}}>{message}</td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              <div style={buttonWrapper}>
                <a href={source} style={buttonStyle}>
                  Accept Invite
                </a>
              </div>

              <div style={{...content1, marginBottom: "10px"}}>This invite link will expire in 7 days. You'll need to log in to accept this invite.</div>
            </Section>
          </Section>

          <div style={{marginBottom: "0.8rem"}}>
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
    letterSpacing: "-0.02rem"
};

const container: React.CSSProperties = {
 maxWidth: "500px",
  border: "1px solid #B1B1B1",
  backgroundColor:"#d1cdc7",
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
  padding: "0 0.2125rem",
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
  width: "95%",
  justifyContent: "center",
  alignSelf: "center",
  margin: "0 auto 0.9rem auto",
  padding: "0.32rem",
  boxSizing: "border-box",
  boxShadow: "0px 0px 4px 0px #A59681 inset"
};

const box2: React.CSSProperties = {
  justifyContent: "center",
  width: "100%",
  border: "1px solid #B1B1B1",
  borderRadius: "8px",
};

const title1: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.45rem",
  margin: "0.2rem auto 0.5rem auto",
  width: "100%",
  maxWidth: "350px",
  color: "#000",
  textAlign: "center",
};

const title1Text: React.CSSProperties = {
  color: "#63AA75",
};

const content1: React.CSSProperties = {
 width: "100%",
  maxWidth: "330px", // simulate 60% on desktop
  margin: "0 auto",
  fontSize: "0.73rem",
  textAlign: "center",
  color: "#000",
  lineHeight: "0.8rem"
};

const tableSection: React.CSSProperties = {
  padding: "1rem",
    marginTop: "-3px"
};

const table: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "90%",
  margin: "0 auto 0 auto"
};

const th: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  padding: "0.6rem 0.9rem",
  backgroundColor: "#D1CDC7",
  fontWeight: 700,
  fontSize: "0.88rem",
  textAlign: "left",
  color: "#000",
  letterSpacing: "0.01rem"
};

const tdTitle: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  fontWeight: "bolder",
  padding: "0.6rem 0.9rem",
  fontSize: "0.93rem",
  textAlign: "left",
  color: "#000",
  letterSpacing: "0.01rem"
};

const td: React.CSSProperties = {
  border: "1px solid #B1B1B1",
  padding: "0.6rem 0.9rem",
  fontSize: "0.91rem",
  textAlign: "left",
  color: "#000",
  letterSpacing: "0.01rem"
};

const img1: React.CSSProperties = {
  width: "132px",
  height: "132px",
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
  marginTop: "-3px"
};

const footerText1: React.CSSProperties = {
  fontSize: "0.75rem",
  marginBottom: "0px",
  color: "#000",
  textAlign: "center",
  letterSpacing: "0.009rem"
};

const footerText2: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.65rem",
  color: "#000",
  marginBottom: "0px",
  textAlign: "center",
  opacity: "50%",
  letterSpacing: "0.003rem"
};