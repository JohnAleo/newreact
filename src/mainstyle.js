import styled from "styled-components";
import mainpage from "../src/assets/mainpage.png"

export const Button = styled.div`
margin-left: ${(props) => (props.$asosiy ? '150px':'0px')};
margin-left:  ${(props) => (props.$read ? '75px':'0px')};
margin-top:${(props) => (props.$read ? '10px':'0px')};
color:${(props) => (props.$read ? '#FFF;':'black')};

:hover {
    background:${(props) => (props.$read ? 'black':'#FACA10')};
    color: ${(props) => (props.$read ? '#FFF':'black')}
} ;

cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 157px;
height: 48px;
flex-shrink: 0;
border-radius: 5px;
background: #FACA10;
box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
#FACA10
p {
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #FFF;    
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.9px;           
}`;


export const Case = styled.div`
display:flex;
align-items: center;
background-image: url(${mainpage});
width: 852px;
height: 650px;
flex-shrink: 0;
border-radius: 37px;
background: linear-gradient(180deg, rgba(245, 246, 247, 0.00) 0%, #F4F4F4 100%);
`

export const Caseleft = styled.div` 
h2{

display:flex;
justify-content: center;
width: 620px;
height: 118px;
flex-shrink: 0;
color: #1E1E1E;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
-webkit-text-stroke-width: 1;
-webkit-text-stroke-color: #000;
font-family: Nunito;
font-size: 44px;
font-style: normal;
font-weight: 900;
line-height: 133.4%; /* 58.696px */
letter-spacing: 0.88px;
}

p{

display : flex;
justify-content: center;
color: #1E1E1E;
font-family: Lora;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 176%; /* 31.68px */
letter-spacing: 0.36px;
margin-left: 60px;
}

`;
export const Caseright = styled.div`
width: 852px;
height: 650px;
flex-shrink: 0;
border-radius: 37px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`
export const Case1 = styled.div`
padding: 40px;
display:flex;
justify-content: center;
color: #1E1E1E;
font-family: Nunito;
font-size: 44px;
font-style: normal;
font-weight: 900;
line-height: 133.4%; /* 58.696px */
letter-spacing: 0.88px;`

export const Case3=styled.div`

display: flex;
justify-content: space-around ;
align-items: center;
text-align: center;
cursor: pointer;
:hover{
    background: #FACA10; 
    color: #FFF;
}
padding: 40px 0;
color: #C4C4C4;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.9px;
border-radius: 5px;
box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
`
export const Case4 =styled.div`
display:grid;
grid-template-areas:'a a a';
justify-content:center;
gap: 30px;
h4{
width: 169px;
height: 30.189px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Nunito;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left:10px
}
p{
margin-left:10px;
width:308px;
height: 82.333px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Lora;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 176%; /* 29.92px */
letter-spacing: 0.34px;
}
a{
width: 319px;
height: 1px;
background: #E7E7E7;
}

`
export const Case5 =styled.div`
h2{
display: flex;
justify-content: center;
color: #1E1E1E;
font-family: Nunito;
font-size: 44px;
font-style: normal;
font-weight: 900;
line-height: 133.4%; /* 58.696px */
letter-spacing: 0.88px;
}

`











