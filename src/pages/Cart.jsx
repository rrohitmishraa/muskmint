import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../pages/CartContext";
import Seo from "../components/Seo";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCart();

  const MIN_ORDER = 299;

  const deliverableSectors = [
    "Sector 3",
    "Sector 4",
    "Sector 12",
    "Sector 13",
    "Sector 14",
    "Dwarka More",
  ];

  const [selectedSector, setSelectedSector] = useState("");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const remainingAmount = MIN_ORDER - totalAmount;
  const meetsMinimum = totalAmount >= MIN_ORDER;
  const isDeliverable = deliverableSectors.includes(selectedSector);
  const canPlaceOrder = cart.length > 0 && meetsMinimum && isDeliverable;

  const message = `
Hi Musk Mint! I’d like to order:

${cart
  .map((item) => `${item.quantity}x ${item.name} – ₹${item.price}`)
  .join("\n")}

Delivery Location: Dwarka ${selectedSector}

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

      <main className="min-h-screen bg-[#F4F8F6] pt-28 pb-24 px-6">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-12">
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-3xl p-14 shadow-md text-center space-y-8">
              <p className="text-gray-600 text-lg">Your cart is empty.</p>

              <Link
                to="/menu"
                className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Explore Menu
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[2.2fr_1fr] gap-16 items-start">
              {/* LEFT SIDE */}
              <div className="space-y-8">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="
      bg-white 
      p-8 
      rounded-3xl 
      shadow-md 
      grid 
      grid-cols-1 
      md:grid-cols-[1.5fr_auto_1fr] 
      items-center 
      gap-6 
      transition 
      hover:shadow-lg
    "
                  >
                    {/* LEFT: INFO */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} each
                      </p>
                    </div>

                    {/* CENTER: QUANTITY */}
                    <div className="flex justify-center">
                      <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm active:scale-95 transition"
                        >
                          –
                        </button>

                        <span className="font-medium w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm active:scale-95 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* RIGHT: PRICE */}
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-lg font-semibold text-primary">
                        ₹{item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE – SUMMARY */}
              <div className="bg-white rounded-3xl shadow-lg p-10 sticky top-32 space-y-6">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>

                <div className="border-t border-gray-100 pt-4 flex justify-between text-2xl font-semibold">
                  <span>Total</span>
                  <span className="text-primary">₹{totalAmount}</span>
                </div>

                {/* Delivery */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Delivery Sector (Dwarka)
                  </label>

                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select Sector</option>
                    {deliverableSectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Validation */}
                {!meetsMinimum && (
                  <div className="text-sm text-red-500">
                    Add ₹{remainingAmount} more to reach minimum ₹{MIN_ORDER}.
                  </div>
                )}

                {selectedSector && !isDeliverable && (
                  <div className="text-sm text-red-500">
                    We are coming soon to your area.
                  </div>
                )}

                {!selectedSector && (
                  <div className="text-sm text-gray-500">
                    Please select delivery sector.
                  </div>
                )}

                {/* Button */}
                <a
                  href={canPlaceOrder ? url : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={
                    canPlaceOrder ? clearCart : (e) => e.preventDefault()
                  }
                  className={`block w-full text-center py-4 rounded-xl font-medium transition
                    ${
                      canPlaceOrder
                        ? "bg-primary text-white hover:opacity-90 active:scale-95"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  {canPlaceOrder
                    ? "Place Order on WhatsApp"
                    : "Complete Requirements to Order"}
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
