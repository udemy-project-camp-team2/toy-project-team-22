import { Fragment } from "react";
import CafeList from "../components/main/CafeList";

const Main = () => {
  return (
    <Fragment>
      <nav style={{ paddingTop: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>구독 리스트</h1>
      </nav>
      <main>
        <CafeList />
      </main>
    </Fragment>
  );
};

export default Main;
