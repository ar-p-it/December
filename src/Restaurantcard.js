import { CDN_URL } from "./utils/constant";
const stylecard = {
  backgroundColor: "yellow",
};

const Restaurantcards = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resdata?.info;
  return (
    <div
      className="restaurantcards"
      style={stylecard} /*or{{backgroundColor:"yellow"}} */
    >
      <img
        alt={CDN_URL}
        className="res-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <span>{costForTwo} for TWO</span>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default Restaurantcards;
