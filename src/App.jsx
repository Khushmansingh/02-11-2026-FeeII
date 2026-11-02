import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const data = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Phone", price: 25000, category: "Electronics" },
    { id: 3, name: "T-Shirt", price: 799, category: "Clothing" },
    { id: 4, name: "Shoes", price: 1999, category: "Footwear" },
    { id: 5, name: "Watch", price: 3499, category: "Accessories" },
    { id: 6, name: "Headphones", price: 1499, category: "Electronics" },
    { id: 7, name: "Jeans", price: 1299, category: "Clothing" },
    { id: 8, name: "Backpack", price: 999, category: "Accessories" },
    { id: 9, name: "Keyboard", price: 2499, category: "Electronics" },
    { id: 10, name: "Cap", price: 499, category: "Clothing" }
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      ))}
    </div>
  );
}


export default App
