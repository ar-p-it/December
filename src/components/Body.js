import resList from "../utils/mockdata";
import Restaurantcards from "../Restaurantcard";
import { use, useEffect, useState } from "react";
import resList from "../utils/mockdata";
import Shimmer from "./shimmer";
const Body = () => {
  const [listofrestaurants, setlistofrestaurant] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [Searchtext, setsearchtext] = useState("");

  let listofrestaurantsjs = [
    // {
    //   type: "restaurant",
    //   data: {
    //     type: "F",
    //     id: "334475",
    //     name: "KFC",
    //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //     costForTwo: 40000,
    //     costForTwoString: "₹400 FOR TWO",
    //     deliveryTime: 35,
    //     avgRating: "4",
    //   },
    // },
    // {
    //   type: "restaurant",
    //   data: {
    //     type: "F",
    //     id: "334476",
    //     name: "DOMINOS",
    //     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //     costForTwo: 40000,
    //     costForTwoString: "₹400 FOR TWO",
    //     deliveryTime: 35,
    //     avgRating: "6",
    //   },
    // },
    // {
    //     type: "restaurant",
    //     data: {
    //       type: "F",
    //       id: "334477",
    //       name: "mcd",
    //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //       costForTwo: 40000,
    //       costForTwoString: "₹400 FOR TWO",
    //       deliveryTime: 35,
    //       avgRating: "6",
    //     },
    //   },
  ];

  useEffect(() => {
    // console.log("Call");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setlistofrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // filteredrestaurant(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return listofrestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={Searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(Searchtext);
              const filteredRestaurant = listofrestaurants.filter((resdata) =>
                resdata.data.name
                  .toLowerCase()
                  .includes(Searchtext.toLowerCase())
              );
              setlistofrestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn "
          onClick={() => {
            const filteredlist = listofrestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            //              console.log(listofrestaurants);
            setFilteredRestaurant(filteredlist);
          }}
        >
          TOP RATED
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Restaurantcards key={restaurant.info.id} resdata={restaurant} />
        ))}

        {/* <Restaurantcards resdata={resList[0]} />
          <Restaurantcards resdata={resList[1]} />
          <Restaurantcards resdata={resList[2]} />
          <Restaurantcards resdata={resList[3]} />
          <Restaurantcards resdata={resList[4]} />
          <Restaurantcards resdata={resList[5]} />
          <Restaurantcards resdata={resList[6]} />
          <Restaurantcards resdata={resList[7]} />
          <Restaurantcards resdata={resList[8]} />
          <Restaurantcards resdata={resList[9]} />
          <Restaurantcards resdata={resList[10]} />
          <Restaurantcards resdata={resList[11]} />
          <Restaurantcards resdata={resList[12]} />
          <Restaurantcards resdata={resList[13]} /> */}

        {/* <Restaurantcards
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnpsmaRQdOZmIsEmqQifHL_wOlrtu9ZlVFg&s"
            name="L Foods"
            cuisine="Indian Special"
            rating="☆☆☆☆4.5"
            timing="20 minutes"
          />
          <Restaurantcards
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwDg6pIGuZE5e34cos3NqGPMIfPFU8clSdg&s"
            name="Starbucks"
            cuisine="Coffee, Brunch"
            rating="☆☆☆☆4.6"
            timing="30 minutes"
          />
          <Restaurantcards
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnpsmaRQdOZmIsEmqQifHL_wOlrtu9ZlVFg&s"
            name="Mastoni"
            cuisine="Burger,Fast Foods"
            rating="☆☆☆☆☆4.7"
            timing="40 minutes"
          /> */}
      </div>
    </div>
  );
};
export default Body;
