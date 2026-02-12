import { Link } from "react-router-dom";
import { useCart } from "../pages/CartContext";
import Seo from "../components/Seo";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCart();

  const totalAmount = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const message = `
Hi Musk Mint! I’d like to order:

${cart
  .map((item) => `${item.quantity}x ${item.name} – ${item.price}`)
  .join("\n")}

Total: ₹${totalAmount}
`;

  const encoded = encodeURIComponent(message.trim());
  const url = `https://wa.me/918809999997?text=${encoded}`;

  return (
    <>
      <Seo
        title="Cart – Musk Mint"
        description="Review and manage your selected items."
      />

      <main className="min-h-screen bg-[#F8FAF9] pt-28 pb-24 px-6">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-semibold mb-12">Your Cart</h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
              <p className="text-gray-600 text-lg mb-8">Your cart is empty.</p>

              <Link
                to="/menu"
                className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 active:scale-95 transition"
              >
                Explore Menu
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* LEFT — Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => {
                  const price = Number(item.price.replace(/[^\d]/g, ""));

                  return (
                    <div
                      key={item.name}
                      className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                    >
                      {/* Item Info */}
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-gray-500 text-sm">₹{price} each</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => decreaseQuantity(item.name)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                        >
                          –
                        </button>

                        <span className="font-medium">{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.name)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="flex items-center gap-6">
                        <p className="font-semibold text-primary">
                          ₹{price * item.quantity}
                        </p>

                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RIGHT — Summary (Sticky on Desktop) */}
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-32 space-y-6">
                  <h2 className="text-xl font-semibold">Order Summary</h2>

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>

                  <div className="flex justify-between font-semibold text-lg border-t pt-4">
                    <span>Total</span>
                    <span>₹{totalAmount}</span>
                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={clearCart}
                    className="block w-full bg-primary text-white py-4 rounded-xl text-center font-medium hover:opacity-90 active:scale-95 transition"
                  >
                    Place Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
