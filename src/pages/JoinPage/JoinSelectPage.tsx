import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Kakaologin from "../../assets/kakao_login_large_wide.png";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dadada;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.h2`
  font-size: 24px;
  color: #333;
  padding-bottom: 20px;
`;

const Button = styled.button`
  font-size: 18.5px;
  font-weight: 500;
  line-height: 49px;
  width: 90%;
  height: 54px;
  margin: 1px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 7px;
  background-color: #03c75a;

  &:hover {
    filter: brightness(0.9);
  }
`;

const KakaoButton = styled.img`
  width: 90%;
  padding-bottom: 20px;

  &:hover {
    filter: brightness(0.9);
    border-radius: 7px;
    cursor: pointer;
  }
`;

const handleKakaoLogin = () => {
  const clientId = "92cd40e5a7fd5149599415959131515e"; // 카카오 디벨로퍼스에서 발급받은 REST API 키
  const redirectUri = "http://localhost:3000/oauth"; // 설정한 리디렉션 URI
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  window.location.href = kakaoAuthUrl;
};

const JoinSelectPage: React.FC = () => {
  return (
    <Container>
      <Message>
        안녕하세요!
        <br />
        회원가입 할 방법을 선택해주세요
      </Message>
      <Link to="/joinpage">
        <Button>회원가입</Button>
      </Link>

      <KakaoButton
        src={Kakaologin}
        alt="카카오 회원가입"
        onClick={handleKakaoLogin}
      />
    </Container>
  );
};

export default JoinSelectPage;
