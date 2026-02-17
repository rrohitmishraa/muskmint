import { useCart } from "../pages/CartContext";

export default function ProductCard({ id, name, price, image }) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const itemInCart = cart.find((item) => item.id === id);

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col transition hover:shadow-md">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-primary font-semibold text-sm">₹{price}</span>

          {!itemInCart ? (
            <button
              onClick={() => addToCart({ id, name, price, image })}
              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs whitespace-nowrap active:scale-95 transition"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(id)}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm active:scale-95 transition"
              >
                –
              </button>

              <span className="text-sm font-medium">{itemInCart.quantity}</span>

              <button
                onClick={() => increaseQuantity(id)}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm active:scale-95 transition"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
