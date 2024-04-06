import styled from "styled-components";
import mainpage from "../src/assets/mainpage.png"

export const Button = styled.button`
display: flex;
justify-content: space-around;
align-items: center;
text-align: center;
width: 157px;
height: 48px;
flex-shrink: 0;
border-radius: 5px;
background: #FACA10;
box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
border: none;
cursor: pointer;
h4{
color: #FFF;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.9px;
}  
p{
width: 97px;
height: 22.87px;
flex-shrink: 0;
color: #FFF;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.9px;
} 
      
margin-left:  ${(props) => (props.$read ? '90px':'0px')};
margin-top:${(props) => (props.$read ? '10px':'0px')};
margin-right:${(props)=> (props.$home? '100px':'0px') };
color: ${(props) => (props.$read ? '#FFF':'none')};
&:hover{
    background:${(props) => (props.$read ? "black":'#FACA10')};
 
}
color:${(props) => (props.read1 ? '#FACA10':'none')}
`



export const Case = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-image: url(${mainpage});
width: 100%;
height: 650px;
flex-shrink: 0;
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
export const Case1 = styled.p`
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
`
export const Button1=styled.button`
display: flex;
justify-content: space-around;
align-items: center;
text-align: center;
width: 170px;
height: 48px;
flex-shrink: 0;
border-radius: 5px;
border: 2px solid #F6F6F6;
background: #FFF;
box-shadow: 0px 10px 40px -12px rgba(196, 196, 196, 0.35);
border: none;
cursor: pointer;
& :hover{
    background: #FACA10;
    color: #fff; ;
}

p{
color: #C4C4C4;
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.9px;
};
cursor: pointer;
`

export const Case3inleft=styled.div`
display: flex;
flex:4;
justify-content: space-around ;
align-items: center;
text-align: center;

`

export const Case3inright =styled.div`
display:flex;
flex:1;
justify-content: space-around ;
align-items: center;
text-align: center;
cursor: pointer;`




//
export const CasegroupText1 = styled.p`
width: 169px;
height: 30.189px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Nunito;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left:10px`

export const CasegroupText2 = styled.p`
width: 308px;
height: 82.333px;
flex-shrink: 0;
color: #1E1E1E;
font-family: Lora;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 176%; /* 29.92px */
letter-spacing: 0.34px;
margin-left:10px`

export const Casegroupline =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 319px;
height: 1px;
background: #f2f2f2;
`
export const Testimonials = styled.p`
color: #1E1E1E;
font-family: Nunito;
font-size: 44px;
font-style: normal;
font-weight: 900;
line-height: 133.4%; /* 58.696px */
letter-spacing: 0.88px;`

export const Testimonialsdown = styled.p`
width: 864px;
height: 99px;
flex-shrink: 0;
color: #1E1E1E;
text-align: center;
font-family: Lora;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 176%; /* 31.68px */
letter-spacing: 0.36px;
display:flex;
justify-content:center;
align-items:center;`

export const Testimonialwrapper= styled.div`
background: ${(props)=> (props.$test ?'#fff':'#f2f2f2')};
width: cover;
height: cover;
flex-shrink: 0;
background: #F6F6F6;`

export const Testimonialsimgwrapper = styled.div`
width: 204px;
height: 204px;
flex-shrink: 0;
`
export const Imgback =styled.div`
display:flex;
justify-content: center;
width: 180px;
height: 180px;
flex-shrink: 0;
border-radius: 156px;
z-index: 2;
margin-right: -230px;
`
export const Imgback1=styled.div`
display:flex;
z-index:1;
margin-left:-42px;
margin-top:-13px;`

export const Imgback2 =styled.div`
display:flex;
width: 50px;
height: 37.838px;
flex-shrink: 0;
z-index:3;
margin-left:-145px;
margin-top:125px`


export const Casegroupwrapper = styled.div`
display:grid;
grid-template-areas:'a a a';
justify-content:center;
gap:90px;`

export const Casewrapper=styled.div`
padding:10px;
margin-top:50px;
width: 340px;
height: 500px;
flex-shrink: 0;
border-radius: 15px;
border: 1px solid rgba(250, 202, 16, 0.40);
background: #FFF;
box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.09);`

export const Center = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:80px;`

export const Thefirm = styled.div`
width: 253px;
height: 67px;
flex-shrink: 0;
display:flex;
align-items:center;`

export const IMGcenter = styled.div`
display:flex;
justify-content:center;
`
export const Justdisplay = styled.div`
display:flex;`

export const Jenny=styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #1E1E1E;
font-family: Nunito;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.2px;` 

export const Jennyin =styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #1E1E1E;
font-family: Lora;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.85px;`

export const Dots =styled.div`
display:flex;
justify-content:center;
padding:40px 0px;`

export const Footercontainer=styled.div`
display:flex;
justify-content: center;
width:1440px;`
export const Logowrapper =styled.div`
display:flex;
justify-content:space-around;
width:700px;`

export const Tobewrapper =styled.div`
display:flex;
z-index: 1;
margin-right:-100px;`

export const Handwrapper=styled.div`
display:flex;
z-index: 2;
margin-left:-40px;
margin-bottom:-30px;`

export const Copyright=styled.div`
color: #A5A5A5; 
font-family: Nunito;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 133.4%; /* 16.008px */
letter-spacing: 3.12px;
padding:20px 0px`





