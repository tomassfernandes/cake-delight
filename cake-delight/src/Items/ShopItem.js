import { useState, useEffect } from "react";

import IngredientSelectionBox from "./IngredientSelectionBox";

export default function ShopItem({ displayAllCakes, cakeType }) {
  const plusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );

  const removeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );

  const data = [
    {
      id: 1,
      img: "/img/cake-1.webp",
      name: "Hazelnut",
      text: "Layers of moist hazelnut-infused cake, topped with finely chopped hazelnuts for an added crunch, this cake is a perfect choice for those who appreciate the warm, toasty notes of hazelnuts",
      icon: plusIcon,
      price: 19.99,
      onDisplay: true,
      vegetarian: true,
      ingredients: ["Chocolate", "Hazelnuts", "Choclate Chips"],
    },
    {
      id: 2,
      img: "/img/cake-2.webp",
      name: "Red Velvet",
      text: "Each layer is generously slathered with a smooth cream cheese frosting. The combination of flavors creates a harmonious balance between sweetness and tanginess. A timeless favorite for any occasion",
      icon: plusIcon,
      price: 29.99,
      onDisplay: true,
      ingredients: ["Vanilla", "Cream", "Fruits"],
    },
    {
      id: 3,
      img: "/img/cake-7.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu",
      icon: plusIcon,
      price: 24.95,
      onDisplay: true,
      ingredients: ["Chocolate", "Coffee", "Biscuits"],
    },
    {
      id: 4,
      img: "/img/cake-3.webp",
      name: "Chessecake",
      text: "Savor the creamy delight of our cheesecake, a perfect blend of velvety texture and rich indulgence",
      icon: plusIcon,
      price: 22.99,
      onDisplay: false,
      ingredients: ["Cream", "Biscuit", "Fruits"],
    },
    {
      id: 5,
      img: "/img/cake-4.webp",
      name: "Melted Chocolate",
      text: "Delight in our chocolate cake, a blissful fusion of moist layers and melted chocolate magic. Savor the richness in every bite, topped with a heavenly chocolate ganache for the ultimate sweet escape",
      icon: plusIcon,
      price: 15.99,
      onDisplay: false,
      vegetarian: true,
      vegan: true,
      ingredients: ["Chocolate", "Choclate Chips"],
    },
    {
      id: 6,
      img: "/img/cake-5.webp",
      name: "Triple Fudge",
      text: "Indulge in the ultimate chocolate experience with layers of fudgy chocolate cake and rich chocolate ganache. Each bite is a chocolate lover's dream come true",
      icon: plusIcon,
      price: 20.99,
      onDisplay: false,
      vegetarian: true,
      ingredients: ["Chocolate Fudge", "Choclate Chips"],
    },
    {
      id: 7,
      img: "/img/cake-6.webp",
      name: "Chocolate Caramel",
      text: "A caramel lover's dream, this chocolate cake is adorned with layers of caramel and toasted pecans. The combination of sweet and nutty flavors creates a delightful symphony",
      icon: plusIcon,
      price: 27.99,
      onDisplay: false,
      ingredients: ["Chocolate", "Caramel", "Twix"],
    },
    {
      id: 8,
      img: "/img/cake-8.webp",
      name: "Chocolate Brownie",
      text: "Indulge in our irresistible brownies, a perfect balance of dense, fudgy goodness and a satisfyingly rich chocolate flavor",
      icon: plusIcon,
      price: 9.99,
      onDisplay: false,
      vegetarian: true,
      vegan: true,
      ingredients: ["Chocolate", "Choclate Chips"],
    },
    {
      id: 9,
      img: "/img/cake-9.webp",
      name: "Pumpkin Spice",
      text: "Pumpkin spice cake is a moist and flavorful dessert infused with the warm and aromatic spices of fall. With a rich pumpkin base, this cake offers a perfect balance of sweetness and spice",
      icon: plusIcon,
      price: 16.99,
      onDisplay: false,
      vegetarian: true,
      vegan: true,
      ingredients: ["Chocolate", "Pumpkin Puree", "Cinnamon"],
    },
  ];

  const filteredCakes =
    cakeType.toLowerCase() === "all cakes"
      ? data
      : data.map((item) => ({
          ...item,
          onDisplay:
            (cakeType.toLowerCase() === "vegetarian" && item.vegetarian) ||
            (cakeType.toLowerCase() === "vegan" && item.vegan),
        }));

  const [selectedCakes, setSelectedCakes] = useState({});

  const handlePlusIconClick = (cakeId) => {
    setSelectedCakes((prevCakes) => ({
      ...Object.fromEntries(
        Object.entries(prevCakes).map(([key, value]) => [
          key,
          key === cakeId ? null : value,
        ])
      ),
      [cakeId]: prevCakes[cakeId]
        ? null
        : data.find((item) => item.id === cakeId),
    }));
  };

  const handleIngredientSelectionBoxClose = (cakeId) => {
    setSelectedCakes((prevCakes) => ({
      ...prevCakes,
      [cakeId]: null,
    }));
  };

  const handlePriceChange = (cakeId, priceChange) => {
    setSelectedCakes((prevCakes) => ({
      ...prevCakes,
      [cakeId]: {
        ...prevCakes[cakeId],
        price: +(prevCakes[cakeId].price + priceChange).toFixed(2), // Round to 2 decimal places
      },
    }));
  };

  useEffect(() => {
    // Log the selected cakes with their updated prices
    console.log("Selected Cakes:", selectedCakes);
  }, [selectedCakes]);

  return (
    <>
      {filteredCakes.map(
        (item) =>
          (displayAllCakes || item.onDisplay) && (
            <div className="shop-cake-div" key={item.id}>
              <img className="shop-cake-img" src={item.img} alt={item.name} />
              <div className="cake-text-div">
                <h3 className="shop-cake-name">
                  {item.name}
                  <span
                    className="cake-plus-icon"
                    onClick={() => handlePlusIconClick(item.id)}
                  >
                    {selectedCakes[item.id] ? removeIcon : plusIcon}
                  </span>
                </h3>
                <p className="shop-cake-text">{item.text}</p>
                {selectedCakes[item.id] && (
                  <IngredientSelectionBox
                    onClose={() => handleIngredientSelectionBoxClose(item.id)}
                    ingredients={item.ingredients}
                    onPriceChange={(change) =>
                      handlePriceChange(item.id, change)
                    }
                    isOpen={!!selectedCakes[item.id]}
                  />
                )}
                <p className="cake-price">{`${
                  selectedCakes[item.id]?.price ?? item.price
                }€`}</p>
                <button className="shop-cake-btn">Add to cart</button>
              </div>
            </div>
          )
      )}
    </>
  );
}
