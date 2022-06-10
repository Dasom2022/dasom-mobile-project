import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { naverToken, userInfoData } from "../atoms";

function NaverAuth() {
  const [userInfo, setUserInfo] = useRecoilState<any>(userInfoData);
  const [naverTokenData, setNaverTkenData] = useRecoilState<any>(naverToken);
  const location = useLocation();
  const navigate = useNavigate();
  const NaverLoginMatch = (value: any) => {
    if (value.status === 200) {
      console.log("로그인 성공!");
      setUserInfo(value.data);
      navigate("/main");
    } else {
      console.log("로그인 실패");
    }
  };
  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    setNaverTkenData(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .post(`/auth/naver?token=${token}`, config)
      .then((response) => {
        NaverLoginMatch(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNaverToken();
  }, []);
  return <div>Naver Loging...</div>;
}
export default NaverAuth;
