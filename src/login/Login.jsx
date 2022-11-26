import React, { useEffect, useState } from "react";
import { doLogin } from "../common/api";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user_name") === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    sessionStorage.removeItem("user_name");
    // App 으로 이동(새로고침)
    document.location.href = "/";
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", id);
    console.log("PW : ", pw);
    doLogin(id, pw)
      .then((res) => {
        if (res != undefined) {
          console.log(res);
          sessionStorage.setItem("user_name", res.userName);
          document.location.href = "/";
        } else {
          alert("아이디 비밀번호를 확인하세요");
        }
      })

      .catch();
  };
  const handleInputId = (e) => {
    setId(e.target.value);
  };

  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <h3>{sessionStorage.getItem("user_name")}님 안녕하세요</h3>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="input_id">ID : </label>
            <input
              type="text"
              name="input_id"
              value={id}
              onChange={handleInputId}
            />
          </div>
          <div>
            <label htmlFor="input_pw">PW : </label>
            <input
              type="password"
              name="input_pw"
              value={pw}
              onChange={handleInputPw}
            />
          </div>
          <div>
            <button type="button" onClick={onClickLogin}>
              Login
            </button>
          </div>
          <h3>Test ID: owner16</h3>
          <h3>Test PW: lived35</h3>
        </div>
      )}
    </div>
  );
}

export default Login;
