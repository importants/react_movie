// 처음 시작 페이지
import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get(`/api/hello`).then((res) => console.log(res)); // 서버 포트 5000번 클라이언트 3000번 => cors 정책때문에() Cross-Origin(클포트/ 서포트) Resource Sharing (CORS) -> proxy 사용
    // get/ 서버로 보낸다  then/ 받아온 데이터
  }, []);
  return (
    <>
      <div>LandingPage</div>
    </>
  );
}

export default LandingPage;
