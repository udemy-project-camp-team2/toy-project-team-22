import { cafes } from "../../libs/cafes";
import CafeItem from "./CafeItem";

const CafeList = () => {
  return (
    <ul>
      {cafes.map((cafe) => (
        <CafeItem key={cafe.id} cafe={cafe} />
      ))}
    </ul>
  );
};

export default CafeList;
