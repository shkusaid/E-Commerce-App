import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState(() => {
    // Load initial cart from localStorage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addCart));
  }, [addCart]);

  const addToCart = (product) => {
    const itemInCart = addCart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updatedCart = addCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setAddCart(updatedCart);
      toast.success("Product Quantity Increased");
    } else {
      setAddCart([...addCart, { ...product, quantity: 1 }]);
      toast.success("Item Added to Cart");
    }
  };

  const updateQuantity = (cartArray, productId, action) => {
    const updatedCart = cartArray
      .map((item) => {
        if (item.id === productId) {
          let newQuantity = item.quantity;
          if (action === "increase") {
            newQuantity += 1;
            toast.success("Product Increased");
          } else if (action === "decrease") {
            newQuantity -= 1;
            toast.success("Product Decreased");
          }
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter((item) => item !== null);

    setAddCart(updatedCart);
  };

  const deleteItem = (productId) => {
    const updatedCart = addCart.filter((item) => item.id !== productId);
    setAddCart(updatedCart);
    toast.success("Product Deleted");
  };

  return (
    <CartContext.Provider
      value={{ addCart, setAddCart, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
