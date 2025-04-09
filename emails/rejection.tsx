import {
  Html,
  Head,
  Body,
  Container,
  Img,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const RejectionEmail = ({ role = 'Advertiser', currentRole = 'Ad Manager', removedBy = 'Monika Surendiran', effectiveOn = 'Jan 12, 2025'}) => {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Section>
            <Section style={{ textAlign: 'center' }}>
              <table
                role="presentation"
                style={{
                  margin: '0 auto',
                  marginBottom: '0.75rem',
                }}
              >
                <tr>
                  <td style={{ textAlign: 'center', paddingRight: '0.5rem' }}>
                    <Img
                      src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/adgiest-logo.png"
                      alt="Adgeist"
                      width={100}
                      height={30}
                      style={logoImg}
                    />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={advertiserBox}>{role}</div>
                  </td>
                </tr>
              </table>
            </Section>
          </Section>

          <Section style={{ width: '100%' }}>
            <hr style={dashedLine} ></hr>
          </Section>

          <Section style={box1}>
            <Section style={box2}>
              <Img
                src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/rejection.png"
                alt="invitation"
                width="145"
                height="145"
                style={img1}
              />
              <Text style={title1}>
                You no longer have access to the role of{' '}
                <span style={title1Text}>{currentRole}.</span>
              </Text>
              <Section style={{ textAlign: 'center', marginTop: '-0.6rem' }}>
                <table
                  align="center"
                  cellPadding="0"
                  cellSpacing="0"
                  role="presentation"
                  style={{ margin: '0.5rem auto' }}
                >
                  <tr>
                    <td style={content1}>At</td>
                    <td>
                      <Img
                        src="https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/apt.png"
                        alt="apt"
                        width="24"
                        height="22"
                        style={{ verticalAlign: 'middle', margin: '0 8px' }}
                      />
                    </td>
                    <td style={content1}>AdsProTech pvt.</td>
                  </tr>
                </table>
              </Section>


              <Section style={tableSection}>
                <table style={table}>
                  <thead>
                    <tr>
                      <th style={th}>Detail</th>
                      <th style={th}>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdTitle}>Removed by</td>
                      <td style={td}>{removedBy}</td>
                    </tr>
                    <tr>
                      <td style={tdTitle}>Role</td>
                      <td style={td}>{currentRole}.</td>
                    </tr>
                    <tr>
                      <td style={tdTitle}>Effective on</td>
                      <td style={td}>{effectiveOn}</td>
                    </tr>
                  </tbody>
                </table>
              </Section>
            </Section>
          </Section>

          <div style={footerContainer}>
                                  <Text style={footerText}>Question or help? Contact us.</Text>
                                  <Text style={footerEmail}>@thealteroffice.com</Text>
                                  <Text style={footerSmall}>thealteroffice  &copy; 2024</Text>
                            </div>

         
        </Container>
      </Body>
    </Html>
  );
};

export default RejectionEmail;

const body: React.CSSProperties = {
  fontFamily: 'Courier New, Courier, monospace',
  padding: '1rem',
  width: '100%',
  margin: '0 0 0 0',
  boxSizing: 'border-box',
  overflowX: 'hidden'
};

const container: React.CSSProperties = {
  maxWidth: "100%",
}

const logoImg: React.CSSProperties = {
  height: '1.875rem',
  width: '6.25rem',
};

const dashedLine: React.CSSProperties = {
  borderTop: '1px dashed #7d7b77',
  borderImage:
    'repeating-linear-gradient(to right, #7d7b77 0, #7d7b77 0.375rem, transparent 0.375rem, transparent 0.625rem) 1',
  width: '100%',
  margin: '0 0 1.5rem 0',
  padding: '0 0 0 0',
  display: 'inline-block'
};

const advertiserBox: React.CSSProperties = {
  border: '1px solid #000000',
  backgroundColor: '#D9D9D9',
  height: '1.75rem',
  padding: '0 0.3125rem',
  lineHeight: '1.75rem',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#000',
  marginTop: '-0.125rem',
};

const box1: React.CSSProperties = {
  border: '1px solid #B1B1B1',
  borderRadius: '8px',
  backgroundColor: '#DDDAD6',
  width: '100%',
  maxWidth: '600px', // set a fixed max width for emails instead of %
  margin: '0 auto 1.5rem auto',
  padding: '0.32rem',
  boxSizing: 'border-box',
};


const box2: React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '1fr',
  border: '1px solid #B1B1B1',
  borderRadius: '0.5rem',
};

const title1: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '1.7rem',
  margin: '1rem auto',
  color: '#000',
  textAlign: 'center'
};

const title1Text: React.CSSProperties = {
  color: '#63AA75',
};

const content1: React.CSSProperties = {
  fontSize: '0.68rem',
  margin: 0,
  fontWeight: 700,
  color: '#000',
};

const tableSection: React.CSSProperties = {
  padding: '1rem',
  marginTop: '0.5rem',
};

const table: React.CSSProperties = {
  borderCollapse: 'collapse',
  width: '100%',
};

const th: React.CSSProperties = {
  border: '1px solid #B1B1B1',
  padding: '0.7rem 1.1rem',
  backgroundColor: '#D1CDC7',
  fontWeight: 700,
  fontSize: '0.88rem',
  textAlign: 'left',
  color: '#000',
};

const tdTitle: React.CSSProperties = {
  border: '1px solid #B1B1B1',
  fontWeight: 700,
  padding: '0.7rem 1.1rem',
  fontSize: '0.88rem',
  textAlign: 'left',
  color: '#000',
};

const td: React.CSSProperties = {
  border: '1px solid #B1B1B1',
  padding: '0.7rem 1.1rem',
  fontSize: '0.88rem',
  textAlign: 'left',
  fontWeight: 700,
  color: '#000',
};

const img1: React.CSSProperties = {
  width: '145px',
  height: '145px',
  display: 'block',
  margin: '0 auto'
};

const footerContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    justifyItems: 'center',
    alignItems: 'center',
    rowGap: '0rem',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    marginTop: '1.5rem',
};

const footerText: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '0.83rem',
    margin: '0 0 0 0',
    color: '#000',
};

const footerEmail: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '0.83rem',
    color: '#000',
    margin: '0 0 0 0'
};

const footerSmall: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '0.78rem',
    color: '#000',
    margin: '0.5rem 0 0.5rem 0'
};


