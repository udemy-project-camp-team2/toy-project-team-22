import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { getCafeDetail } from "../libs/cafes-function";
import DetailHeader from "../components/ui/DetailHeader";
import SnsIcon from "../components/icons/SnsIcon";
import CafeDetail from "../components/cafe/CafeDetail";
import HeartIcon from "../components/icons/HeartIcon";

const Cafe = () => {
  const { id } = useParams();
  const cafe = getCafeDetail(Number(id));

  return (
    <Fragment>
      <DetailHeader cafe={cafe}>
        <nav style={{ height: "100%", display: "flex" }}>
          <SnsIcon />
          <HeartIcon />
        </nav>
      </DetailHeader>
      <CafeDetail cafe={cafe} />
    </Fragment>
  );
};

export default Cafe;
