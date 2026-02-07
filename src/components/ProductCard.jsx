import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ name, price, image }) {
  const message = `Hi Musk Mint! I’d like to order: ${name} (${price})`;

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-medium text-gray-900 mb-2">{name}</h3>

        {/* PRICE + CTA ROW */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-primary font-semibold text-sm">{price}</span>

          <WhatsAppButton message={message} size="small" />
        </div>
      </div>
    </div>
  );
}
