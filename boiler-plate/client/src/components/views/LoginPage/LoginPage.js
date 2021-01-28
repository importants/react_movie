import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSummitHandler = (event) => {
    event.preventDefault(); // 이거 안하면 페이지 reflash 된다 다음 코드를 실행 못함

    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then(
      // 로그인 성공시 랜딩 페이지로 넘어가게 하기
      (response) => {
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("Error");
        }
      }
    ); // loginUser라는 액션에다가 집어넣기
  };

  return (
    <>
      <div
        style={{
          display: `flex`,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: `100vh`,
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSummitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default withRouter(LoginPage);
