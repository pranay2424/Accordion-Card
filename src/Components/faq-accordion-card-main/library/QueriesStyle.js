import styled from "styled-components";

const QueriesStyle = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin: 0px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 20px;
    height: auto;
    width: auto;
    text-align: center !important;
    border-radius: 10px;
    z-index: 1;
    

    h1 {
      font-weight: 700;
    }
    
    p {
      margin-right: 0px!important;
      border-bottom: 1px solid hsl(240, 5%, 91%);
    }
    nav {
      display: flex;
      align-items: center!important;
      border-bottom: 1px solid hsl(240, 5%, 91%);
      width: 99%!important;
     
    }
    label {
      display: flex;
      flex-direction: column;
    }

    span {
       width: 16em!important;
      display: flex;
      align-items: center;
      margin-right: 0px!important;
    }
   
  }


  /*  desktop */
  h1 {
    font-weight: 700;
  }
  div {
    height: 60px;
    width: 18.5em;
    align-items: center;
    display: flex;
  }
  p {
    margin-right: 50px;

    border-bottom: 1px solid hsl(240, 5%, 91%);
  }
  nav {
    display: flex;
    align-items: center;
    border-bottom: 1px solid hsl(240, 5%, 91%);

    width: 22.6em;
  }
  label {
    display: flex;
    flex-direction: column;
  }

  span {
    margin-right: 50px;
    font-weight: 700;
    width: 19em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 500px;
  width: 500px;
  border-radius: 10px;
`;

export default QueriesStyle;
