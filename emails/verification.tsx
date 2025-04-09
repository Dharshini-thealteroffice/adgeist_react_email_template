import { Html, Head, Body, Img, Container, Text, Section } from '@react-email/components';
import * as React from 'react';

export const VerificationEmail = ({ role = 'Advertiser', otp = '123456' }) => {
    return (
        <Html lang="en">
            <Head />
            <Body style={body} >
                <Container style={container}>
                    {/* Logo & Label */}
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


                    {/* Divider */}
                    <Section style={{ width: '100%' }}>
                        <hr style={dashedLine} ></hr>
                    </Section>

                    {/* Card Box */}
                    <div style={cardWrapper}>
                        <div style={cardBox}>
                            <h1 style={title}>Welcome to Adgeist!</h1>
                            <h3 style={subtitle}>
                                To complete your email verification, please use the One-Time Password (OTP) below.
                            </h3>
                            <p style={subdesc}>
                                For your security, do not share this code; if you didn’t request it, please ignore this email or contact our support team.
                            </p>

                            <div style={otpSectionWrapper}>
                                <div style={otpContainer}>

                                    <Text style={otpTextTop}>Your OTP is:</Text>
                                    <div style={otpBox}>
                                    <Text style={otpCode}>{otp}</Text></div>
                                    <Text style={otpTextSmall}>This OTP is valid for the</Text>
                                    <Text style={otpTextSmall}>next 10 minutes.</Text>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Footer */}
                    <div style={footerContainer}>
                        <Text style={footerText}>Question or help? Contact us.</Text>
                        <Text style={footerEmail}>@thealteroffice.com</Text>
                        <Text style={footerSmall}>thealteroffice  &copy; 2024</Text>
                    </div>
                </Container>
            </Body>
        </Html>
    );
}

export default VerificationEmail


const body: React.CSSProperties = {
    fontFamily: 'Courier New, Courier, monospace',
    padding: '1rem',
    width: '100%',
    margin: '0 0 0 0',
    boxSizing: 'border-box',
    overflowX: 'hidden'
};

const container : React.CSSProperties ={
    maxWidth: "100%"
}

const logoImg: React.CSSProperties = {
    height: '1.875rem',
    width: '6.25rem',
};

const otpBox: React.CSSProperties = {
   textAlign: 'center',
   display: 'inline-block',
   border: '1px solid #000000',
    padding: '2% 13% 2% 15%',
    maxWidth: '14rem',
    marginTop: '1%',
    marginRight: '3%'
}



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

const dashedLine: React.CSSProperties = {
    borderTop: '1px dashed #7d7b77',
    borderImage:
      'repeating-linear-gradient(to right, #7d7b77 0, #7d7b77 0.375rem, transparent 0.375rem, transparent 0.625rem) 1',
    width: '100%',
    margin: '0 0 1.5rem 0',
    padding: '0 0 0 0',
    display: 'inline-block'
  };
  

  const cardWrapper: React.CSSProperties = {
    border: '1px solid #B1B1B1',
    borderRadius: '8px',
    boxShadow: '0 0 2px #A59681',
    width: '100%',
    maxWidth: '600px', // set a fixed max width for emails instead of %
    margin: '0 auto 1.5rem auto',
    padding: '0.32rem',
    backgroundColor: '#DDDAD6',
    boxSizing: 'border-box',
  };  

const cardBox: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr',
    border: '1px solid #B1B1B1',
    borderRadius: '0.5rem',
};

const title: React.CSSProperties = {
    color: '#000',
    fontWeight: 700,
    textAlign: 'center',
    fontSize: '1.7rem',
    margin: '0.5rem 0 0 0',
};

const subtitle: React.CSSProperties = {
    fontFamily: 'Courier New, monospace',
    fontWeight: 700,
    textAlign: 'center',
    fontSize: '1.38rem',
    color: '#000',
    padding: '0 1.5rem',
    lineHeight: '1.601875rem',
    letterSpacing: '-0.04em',
    margin: '0.5rem 0 1.4rem 0',
};

const subdesc: React.CSSProperties = {
    fontSize: '0.82rem',
    fontWeight: 700,
    padding: '0 1.6rem',
    color: '#000',
    textAlign: 'center',
    lineHeight: '1.12rem',
    letterSpacing: '-0.04em',
    margin: '0.5rem 0 0.1rem 0',
};

const otpSectionWrapper: React.CSSProperties = {
    display: 'block',
    textAlign: 'center',
    padding: 0,
    margin: '0 0 0 0'
};


const otpContainer: React.CSSProperties = {
    height: '19.45rem',
    width: '98%',
    maxWidth: '23rem',
    backgroundImage: 'url("https://d2cfeg6k9cklz9.cloudfront.net/mail-template-icons/plain-envelope.png")',
    backgroundSize: '100% auto',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'inline-block',
    marginBottom: '-2%'
};


const otpTextTop: React.CSSProperties = {
    fontWeight: 700,
    color: '#000',
    fontSize: '0.85rem',
    margin: '19% 0 0 0'
};

const otpCode: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1.65rem',
    color: '#000',
    letterSpacing: '-0.025rem',
    margin: '0px 0 0 0',
};

const otpTextSmall: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '0.655rem',
    color: '#000',
    marginTop: '4%',
    lineHeight: '5%',
    paddingLeft: '1%',
    paddingRight: '1%' 
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

