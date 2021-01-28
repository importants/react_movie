// 처음 시작 페이지
import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom"; // push("/")같은 요소 쓰기 위해

function LandingPage(props) {
  useEffect(() => {
    axios.get(`/api/hello`).then((res) => console.log(res)); // 서버 포트 5000번 클라이언트 3000번 => cors 정책때문에() Cross-Origin(클포트/ 서포트) Resource Sharing (CORS) -> proxy 사용
    // get/ 서버로 보낸다  then/ 받아온 데이터
  }, []);

  const onClickHandler = () => {
    axios.get("api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else alert(`로그아웃 하는데 실패했습니다`);
    });
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
        <h2>시작페이지</h2>
        <button onClick={onClickHandler}>logout</button>
      </div>
    </>
  );
}

export default withRouter(LandingPage);
