import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
 // position: fixed;
  width: 100%;  
 // z-index: 2000;
`;

export const NavLeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavLeftSymContainer = styled.div`
 width: 253px;
 height: 67px;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 text-align: center;
`;

export const NavRightContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #1E1E1E;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9px;
  p {
    cursor: pointer;
  }
  p:hover {
    color: yellowgreen;
  }
`;