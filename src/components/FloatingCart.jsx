import { Link, useLocation } from "react-router-dom";
import { useCart } from "../pages/CartContext";

export default function FloatingCart() {
  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hide if no items OR already on cart page
  if (totalItems === 0 || location.pathname === "/cart") return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full flex justify-center">
      <Link
        to="/cart"
        className="
          bg-primary text-white 
          px-8 py-3 
          rounded-full 
          shadow-xl 
          flex items-center gap-3
          text-sm md:text-base font-medium
          active:scale-95
          hover:shadow-2xl
          transition-all duration-200
        "
      >
        🛒 {totalItems} item{totalItems > 1 && "s"} • View Cart
      </Link>
    </div>
  );
}
