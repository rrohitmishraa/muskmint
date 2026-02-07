import WhatsAppButton from "./WhatsAppButton";

export default function MenuItem({ name, description, price, image }) {
  const message = `Hi Musk Mint! I’d like to order:\n${name} (${price})`;

  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-gray-100">
      {/* Left: name + description */}
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-lg object-cover"
        loading="lazy"
      />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      {/* Right: price + button */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-sm font-medium text-primary">{price}</span>

        <WhatsAppButton message={message} size="small" />
      </div>
    </div>
  );
}
