import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
} from "@react-email/components";

export const AdspaceRejected = ({
  role = "Advertiser",
  firstName = "Advertiser",
  siteName = "siteName", 
  url = "fnkjenfkne",
  reason="Non-compliant content"
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
                  margin: "1rem auto",
                  marginBottom: "0.75rem",
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
              <Section style={box3}>
                <div style={{ ...content1, marginBottom: "12px" }}>
                  Hi <span style={{ fontWeight: "bolder" }}>{firstName}</span>,
                </div>
                <div style={{ ...content1, marginBottom: "12px" }}>
                    Your ad space  <span style={{ fontWeight: "bolder" }}>{siteName}</span> {" "} was not approved during our review process.
                </div>

                 <div style={{ ...content1, marginBottom: "12px" }}>
                  Unfortunately, we couldn&apos;t approve your company at this
                  time due to the following:
                </div>

                <div style={box4}>
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      color: "black"
                    }}
                  >
                    Reason:
                  </div>
                  <div style={box5}>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        fontSize: "1.15rem",
                        color: "black"
                      }}
                    >
                      {reason}
                    </div>
                  </div>
                </div>

                <div style={{ ...content1, marginBottom: "12px", marginTop: "8px" }}>
                  You can revise your submission and try again.
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <a href={url} style={buttonStyle}>
                    RESUBMIT AD SPACE
                  </a>
                </div>
              </Section>
            </Section>
          </Section>

          <div style={{marginBottom: "1rem"}}>
            <div>
              <div style={{ ...footerText1, fontWeight: "bold" }}>
                Need help? Reach out to us at
              </div>
              <div style={{ ...footerText1, fontWeight: "bolder" }}>
                mugesh@thealteroffice.com
              </div>
            </div>
            <div style={{ marginTop: "18px" }}>
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

export default AdspaceRejected;

const body: React.CSSProperties = {
 fontFamily: `'Lucida Console', 'Courier New', monospace`,
  padding: "1rem",
  width: "100%",
  margin: "0 0 0 0",
  boxSizing: "border-box",
  overflowX: "hidden",
  letterSpacing: "-0.05rem"
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
  margin: "0 0 1rem 0",
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
  margin: "0 auto 1.2rem auto",
  padding: "0.32rem",
  boxSizing: "border-box",
  boxShadow: "0px 0px 4px 0px #A59681 inset"
};

const box2: React.CSSProperties = {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "1fr",
  border: "1px solid #B1B1B1",
  borderRadius: "8px",
};

const box3: React.CSSProperties = {
  padding: "1rem",
};

const box4: React.CSSProperties = {
  backgroundColor: "#D1CDC7",
  padding: "1rem",
};

const box5: React.CSSProperties = {
  backgroundColor: "#D9D9D9",
  padding: "1rem",
  border: "1px solid #B1B1B1",
  borderRadius: "10px",
  marginTop: "5px",
  boxShadow: "0px 0px 3px 0px #A59681",
};

const content1: React.CSSProperties = {
  fontSize: "1rem",
  margin: 0,
  lineHeight: "1.5rem",
  color: "#000",
  fontWeight: "normal",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#000000",
  marginTop: "6px",
  height: "32px",
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "0.85rem",
  letterSpacing: "0.025em",
  textTransform: "uppercase",
  textAlign: "center",
  alignItems: "center",
  display: "inline-block",
  lineHeight: "32px",
  textDecoration: "none",
  borderRadius: "6px",
  paddingRight: "7px",
  paddingLeft: "7px"
};

const footerText1: React.CSSProperties = {
  fontSize: "0.75rem",
  marginBottom: "6px",
  color: "#000",
  textAlign: "center",
  letterSpacing: "0.009rem"
};

const footerText2: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "0.65rem",
  color: "#000",
  marginBottom: "6px",
  textAlign: "center",
  opacity: "50%",
  letterSpacing: "0.003rem"
};
