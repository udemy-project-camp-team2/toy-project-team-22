import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { getCafeDetail } from "../libs/cafes-function";
import SeatHeader from "../components/ui/SeatHeader";
import SeatDetail from '../components/seat/SeatDetail';

const Seat = () => {
  const { id } = useParams();
  const cafe = getCafeDetail(Number(id));

  return (
    <Fragment>
      <SeatHeader cafe={cafe} />
      <SeatDetail />
    </Fragment>
  );
};

export default Seat;

