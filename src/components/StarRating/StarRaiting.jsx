import StarList from 'components/StarList';
import './StarRaiting.css';
const StarRaiting = ({ starLimit = 5, rating = 0 }) => {
  function ratingWidth() {
    //   return (this.rating / this.starLimit) * 100 + "%";
    return (rating / starLimit) * 100;
  }

  function ratingWithStyle() {
    return { width: `${ratingWidth()}%` };
  }
  return (
    <div className="star-rating">
      <StarList starLimit={starLimit} filled={false} />
      <div className="colored" style={ratingWithStyle()}>
        <StarList starLimit={starLimit} filled={true} className="colored" />
      </div>
    </div>
  );
};
export default StarRaiting;
