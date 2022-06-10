import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./Routes/Main";
import Login from "./Routes/Login";
import Join from "./Routes/Join";
import KaKaoLogout from "./Auth/KaKaoLogout";
import KaKaoAuth from "./Auth/KakaoAuth";
import NaverAuth from "./Auth/NaverAuth";
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
            <Route path="/" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/auth/kakao" element={<KaKaoAuth />}></Route>
            <Route path="/auth/kakao/logout" element={<KaKaoLogout />}></Route>
            <Route path="/auth/naver" element={<NaverAuth />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </Wrap>
      <NoMobile>NOMOBILE</NoMobile>
    </>
  );
}

export default App;
