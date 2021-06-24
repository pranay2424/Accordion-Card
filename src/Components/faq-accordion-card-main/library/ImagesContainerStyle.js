import styled from "styled-components";

const ImagesContainerStyle = styled.nav`
  @media only screen and (max-width: 375px) {
    img {
      height: 180px !important;
      width: 180px !important;
      border-radius: 10px;
      position: absolute
    }
    display: flex;
    justify-content: center;
    z-index: 1;
    
  }
  img {
    height: 450px;
    width: 500px;
    border-radius: 10px;
  }
  width: 500px;
  max-height: 500px;
  display: flex;
  align-items: center;
  transform: translate(-22%);
  left: 50px;
`;

export default ImagesContainerStyle;
