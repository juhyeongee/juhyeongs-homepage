import type { NextPage } from "next";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <nav>
        <Link href="/career">
          <h1>커리어 화면으로</h1>
        </Link>
        <Link href="/myContents">
          <h1>나의 콘텐츠 화면으로</h1>
        </Link>
      </nav>

      <style jsx>
        {`
          .top {
            width: 50%;
          }
          nav {
            border: 1px solid red;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          h1 {
            color: blue;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
