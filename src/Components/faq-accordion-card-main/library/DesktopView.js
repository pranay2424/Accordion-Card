import styled from "styled-components";

const DesktopView = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    z-index: -1;

    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: linear-gradient(#af67e9, #6565e7);
  }

  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0%;
  margin: 0%;
  z-index: -1;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#af67e9, #6565e7);
`;

export default DesktopView;
