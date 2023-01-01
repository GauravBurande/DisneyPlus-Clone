import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Content>
                <BgImage />
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/2021, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

`
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`
const BgImage = styled.div`
height: 100%;
width: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("images/login-background.jpg");
position: absolute;
z-index: -1;
top: 0;
right: 0;
 `

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`
const CTALogoOne = styled.img`
width: 100%;
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
`

const SignUp = styled.a`
padding: 16px 0;
background-color: #0063e5;
font-weight: bold;
color: white;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
border: 1px solid transparent;
border-radius: 5px;
:hover {
    background-color: #0483ee;
    cursor: pointer;
}
`
const Description = styled.p`
    color: hsla(0, 0%, 96.3%,1);
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin-bottom: 2vw;
`

const CTALogoTwo = styled.img`
width: 100%;
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: inline-block;
vertical-align: bottom;
`


export default Login
