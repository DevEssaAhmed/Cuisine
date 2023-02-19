import { shimmer_card_unit } from "../../data/constants";
import "./ShimmerUI.scss"

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className='shimmer-card'>
      <div className='shimmer-img stroke animate'></div>
      <div className='shimmer-title stroke animate'></div>
      <div className='shimmer-tags stroke animate '></div>
      <div className='shimmer-details stroke animate '></div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className='shimmer-container'>
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default ShimmerUI;
