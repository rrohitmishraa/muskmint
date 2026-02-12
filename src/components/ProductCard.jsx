import { useCart } from "../pages/CartContext";

export default function ProductCard({ name, price, image }) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const itemInCart = cart.find((item) => item.name === name);

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col">
      {/* Image */}
      <div className="w-full aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-medium text-gray-900 mb-2">{name}</h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-primary font-semibold text-sm">{price}</span>

          {/* BUTTON AREA */}
          {!itemInCart ? (
            <button
              onClick={() => addToCart({ name, price })}
              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs whitespace-nowrap active:scale-95 transition"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(name)}
                className="w-7 h-7 rounded-full border flex items-center justify-center text-sm active:scale-95 transition"
              >
                –
              </button>

              <span className="text-sm font-medium">{itemInCart.quantity}</span>

              <button
                onClick={() => increaseQuantity(name)}
                className="w-7 h-7 rounded-full border flex items-center justify-center text-sm active:scale-95 transition"
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
