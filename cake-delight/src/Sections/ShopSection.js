// ShopSection.js
import ShopItem from "../Items/ShopItem";

const data = [
  {
    id: 1,
    img: "/img/cake-1.webp",
    name: "Hazelnut",
    text: "Layers of moist hazelnut-infused cake, topped with finely chopped hazelnuts for an added crunch, this cake is a perfect choice for those who appreciate the warm, toasty notes of hazelnuts",
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
    price: 29.99,
    onDisplay: true,
    ingredients: ["Vanilla", "Cream", "Fruits"],
  },
  {
    id: 3,
    img: "/img/cake-7.webp",
    name: "Tiramisu",
    text: "Layers of coffee-soaked sponge cake alternate with a sumptuous mascarpone cream, creating a symphony of flavors reminiscent of the classic Tiramisu",
    price: 24.95,
    onDisplay: true,
    ingredients: ["Chocolate", "Coffee", "Biscuits"],
  },
  {
    id: 4,
    img: "/img/cake-3.webp",
    name: "Chessecake",
    text: "Savor the creamy delight of our cheesecake, a perfect blend of velvety texture and rich indulgence",
    price: 22.99,
    ingredients: ["Cream", "Biscuit", "Fruits"],
  },
  {
    id: 5,
    img: "/img/cake-4.webp",
    name: "Melted Chocolate",
    text: "Delight in our chocolate cake, a blissful fusion of moist layers and melted chocolate magic. Savor the richness in every bite, topped with a heavenly chocolate ganache for the ultimate sweet escape",
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
    price: 27.99,
    onDisplay: false,
    ingredients: ["Chocolate", "Caramel", "Twix"],
  },
  {
    id: 8,
    img: "/img/cake-8.webp",
    name: "Chocolate Brownie",
    text: "Indulge in our irresistible brownies, a perfect balance of dense, fudgy goodness and a satisfyingly rich chocolate flavor",
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
    price: 16.99,
    onDisplay: false,
    vegetarian: true,
    vegan: true,
    ingredients: ["Chocolate", "Pumpkin Puree", "Cinnamon"],
  },
];

export default function ShopSection() {
  return (
    <section className="shop-section">
      <h2 className="heading-secondary">Shop</h2>
      <div className="type-cake-div">
        <p className="cake-type">All</p>
        <p className="cake-type">Vegetrian</p>
        <p className="cake-type">Vegan</p>
      </div>
      <div className="shop-grid">
        {data.map((cake) => (
          <ShopItem key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}
