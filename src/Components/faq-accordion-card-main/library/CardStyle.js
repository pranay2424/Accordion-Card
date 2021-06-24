import styled from "styled-components";

const CardStyle = styled.div`
  @media only screen and (max-width: 375px) {
    background-color: white;
    margin: 0px;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    width: 90vw;
    z-index: 0;
    box-shadow: 2px 2px 30px hsl(240, 6%, 50%);
    border-radius: 10px;
  }

  background-color: white;
  margin: 0px;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 30px hsl(240, 6%, 50%);
  height: 500px;
  width: 1000px;
  z-index: 0;
  border-radius: 10px;
`;

export default CardStyle;
