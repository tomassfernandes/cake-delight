export default function ShopItem() {
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

  const data = [
    {
      id: 1,
      img: "/img/cake-1.webp",
      name: "Hazelnut",
      text: "Layers of moist hazelnut-infused cake, topped with finely chopped hazelnuts for an added crunch, this cake is a perfect choice for those who appreciate the warm, toasty notes of hazelnuts",
      icon: plusIcon,
      price: 19.99,
      onDisplay: true,
    },
    {
      id: 2,
      img: "/img/cake-2.webp",
      name: "Red Velvet",
      text: "Each layer is generously slathered with a smooth cream cheese frosting. The combination of flavors creates a harmonious balance between sweetness and tanginess. A timeless favorite for any occasion",
      icon: plusIcon,
      price: 29.99,
      onDisplay: true,
    },
    {
      id: 3,
      img: "/img/cake-7.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu",
      icon: plusIcon,
      price: 24.95,
      onDisplay: true,
    },
    {
      id: 4,
      img: "/img/cake-3.webp",
      name: "Chessecake",
      text: "Savor the creamy delight of our cheesecake, a perfect blend of velvety texture and rich indulgence",
      icon: plusIcon,
      price: 22.99,
      onDisplay: false,
    },
    {
      id: 5,
      img: "/img/cake-4.webp",
      name: "Melted Chocolate",
      text: "Delight in our chocolate cake, a blissful fusion of moist layers and melted chocolate magic. Savor the richness in every bite, topped with a heavenly chocolate ganache for the ultimate sweet escape",
      icon: plusIcon,
      price: 15.99,
      onDisplay: false,
    },
    {
      id: 6,
      img: "/img/cake-5.webp",
      name: "Triple Fudge",
      text: "Indulge in the ultimate chocolate experience with layers of fudgy chocolate cake and rich chocolate ganache. Each bite is a chocolate lover's dream come true",
      icon: plusIcon,
      price: 20.99,
      onDisplay: false,
    },
    {
      id: 7,
      img: "/img/cake-6.webp",
      name: "Chocolate Caramel",
      text: "A caramel lover's dream, this chocolate cake is adorned with layers of caramel and toasted pecans. The combination of sweet and nutty flavors creates a delightful symphony",
      icon: plusIcon,
      price: 27.99,
      onDisplay: false,
    },
    {
      id: 8,
      img: "/img/cake-8.webp",
      name: "Chocolate Brownie",
      text: "Indulge in our irresistible brownies, a perfect balance of dense, fudgy goodness and a satisfyingly rich chocolate flavor",
      icon: plusIcon,
      price: 9.99,
      onDisplay: false,
    },
    {
      id: 9,
      img: "/img/cake-9.webp",
      name: "Pumpkin Spice",
      text: "Pumpkin spice cake is a moist and flavorful dessert infused with the warm and aromatic spices of fall. With a rich pumpkin base, this cake offers a perfect balance of sweetness and spice",
      icon: plusIcon,
      price: 16.99,
      onDisplay: false,
    },
  ];

  return data.map(
    (item) =>
      item.onDisplay && (
        <div className="shop-cake-div" key={item.id}>
          <img className="shop-cake-img" src={item.img} alt={item.name} />
          <div className="cake-text-div">
            <h3 className="shop-cake-name">
              {item.name}
              <span className="cake-plus-icon">{item.icon}</span>
            </h3>
            <p className="shop-cake-text">{item.text}</p>
            <p className="cake-price">{`${item.price}€`}</p>
            <button className="shop-cake-btn">Add to cart</button>
          </div>
        </div>
      )
  );
}
