import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./Routes/Main";
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
const NoMobile = styled.div`
  @media screen and (max-width: 550px) {
    display: none;
  }
  position: absolute;
  z-index: 99;
  height: 100vh;
  width: 100vw;
  background-color: #d8d4ea;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
function App() {
  return (
    <>
      <Wrap>
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </Wrap>
      <NoMobile>NOMOBILE</NoMobile>
    </>
  );
}

export default App;
