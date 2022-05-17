import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  button {
    border: none;
    cursor: pointer;
    color: aliceblue;
    border-radius: 10px;
  }
`;
const Titlewrap = styled.div``;

const Title = styled.h1`
  margin: 30px 0px;
`;
const Loginwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 220px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 60vw;
    height: 20px;
    padding: 15px 0px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 18px;
    margin-bottom: 10px;
    :nth-child(2) {
      margin-bottom: 20px;
    }
    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
    &:focus {
      outline: none;
      border-color: #388e3c;
    }
  }
`;
const Loginbtn = styled.button`
  width: 60vw;
  height: 45px;
  background-color: #388e3c;
`;
const Kakaobtn = styled.button`
  width: 60vw;
  height: 45px;
  color: #6b7280;
  background-color: #ffc107;
`;

const Naverbtn = styled.button`
  margin-top: 20px;
  width: 60vw;
  height: 45px;
  background-color: #4caf50;
`;

const Joinwrap = styled.div`
  margin: 10px 0px;
`;

const APIlogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 0px 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
`;
interface IForm {
  id: string;
  pw: string;
}
function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<IForm>();
  const onSubmit = ({ id, pw }: IForm) => {
    // navigate("/main");
    postUserData();
  };
  const baseURL = `http://52.55.54.57:3333/member/signin?username=${
    watch().id
  }&password=${watch().pw}`;
  function postUserData() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(baseURL, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Wrap>
      <Titlewrap>
        <Title>로그인</Title>
      </Titlewrap>
      <Loginwrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("id", {
              required: "아이디 입력은 필수입니다.",
            })}
            placeholder="아이디를 입력하세요"
            type="text"
          />
          <input
            {...register("pw", {
              required: "비밀번호 입력은 필수입니다..",
            })}
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
          <Loginbtn>로그인</Loginbtn>
        </Form>
      </Loginwrap>
      <Joinwrap>
        <Ul>
          <Li>비밀번호 찾기</Li> |<Li>아이디 찾기</Li> |
          <Link to="/join">
            <Li>회원가입</Li>
          </Link>
        </Ul>
      </Joinwrap>
      <APIlogin>
        <Kakaobtn>카카오 로그인</Kakaobtn>
        <Naverbtn>네이버 로그인</Naverbtn>
      </APIlogin>
    </Wrap>
  );
}
export default Login;
