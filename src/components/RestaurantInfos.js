import "./css/RestaurantInfos.css";
const RestaurantInfos = ({ name, address, description, cover }) => {
  return (
    <div className="restaurantInfos">
      <div className="centerTop">
        <div className="text">
          <h1 className="nameRestaurant">{name}</h1>
          <h2 className="address">{address}</h2>
          <p className="description">{description}</p>
        </div>
        <img className="cover" src={cover} alt="restaurant cover" />
      </div>
    </div>
  );
};
export default RestaurantInfos;
