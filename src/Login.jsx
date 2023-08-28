import { Link } from "react-router-dom";
import Layout from "./components/Layout";

export default function Login() {
  return (
    <div>
      <Layout>
        <h1>로그인</h1>
        <Link to={"/find"}>
          <h1>비밀번호 찾기</h1>
        </Link>
      </Layout>
    </div>
  );
}
