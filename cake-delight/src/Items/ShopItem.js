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
      text: "Layers of moist hazelnut-infused cake are complemented by a luscious hazelnut buttercream, creating a symphony of textures and tastes. Topped with finely chopped hazelnuts for an added crunch, this cake is a perfect choice for those who appreciate the warm, toasty notes of hazelnuts.",
      icon: plusIcon,
      price: 30,
      onDisplay: true,
    },
    {
      id: 2,
      img: "/img/cake-2.webp",
      name: "Red velvet",
      text: "With its velvety texture and subtle chocolate undertones, each layer is generously slathered with a smooth cream cheese frosting. The cake's scarlet allure makes it a visual delight, while the combination of flavors creates a harmonious balance between sweetness and tanginess. A timeless favorite for any occasion.",
      icon: plusIcon,
      price: 30,
      onDisplay: true,
    },
    {
      id: 3,
      img: "/img/cake-7.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: true,
    },
    {
      id: 4,
      img: "/img/cake-3.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: false,
    },
    {
      id: 5,
      img: "/img/cake-4.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: false,
    },
    {
      id: 6,
      img: "/img/cake-5.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: false,
    },
    {
      id: 7,
      img: "/img/cake-6.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: false,
    },
    {
      id: 8,
      img: "/img/cake-8.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
      onDisplay: false,
    },
    {
      id: 9,
      img: "/img/cake-9.webp",
      name: "Tiramisu",
      text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu. Each bite offers a delicate balance of coffee-infused richness and the light, airy texture of the mascarpone.",
      icon: plusIcon,
      price: 30,
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
