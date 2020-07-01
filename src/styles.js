import styled, { createGlobalStyle } from "styled-components";

const ArrowPic = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 36%;
  opacity: 0.65;
`;

const Box = styled.div`
  border: 5px dotted white;
`;

const GlobalStyle = createGlobalStyle`
body{
background-color: #afbdb2;
align-item: center;
justify-content: center;
display: flex;
}

`;

const HeaderIntro = styled.h1`
  align-item: center;
  justify-content: center;
  display: flex;
  font-family: "Indie Flower", cursive;
  color: #537e5e;
  border: 8px dotted white;
`;

const InfoAge = styled.p`
  color: #537e5e;
  font-size: x-large;
  ${(props) => props.theme}
`;

const InfoDate = styled.p`
  color: #a86d6d;
  font-size: xx-large;
  ${(props) => props.theme}
`;

const InfoDescription = styled.p`
  color: white;
  font-size: x-large;
  ${(props) => props.theme};
`;

const Name = styled.h1`
  align-item: center;
  justify-content: center;
  display: flex;
  color: #a86d6d;
  font-family: "Libre Barcode 128 Text", cursive;
  font-size: xxx-large;
  opacity: 0.55;
`;

export {
  ArrowPic,
  Box,
  GlobalStyle,
  HeaderIntro,
  InfoAge,
  InfoDate,
  InfoDescription,
  Name,
};
