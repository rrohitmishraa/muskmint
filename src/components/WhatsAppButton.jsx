export default function WhatsAppButton({ message = "", size = "normal" }) {
  const phone = "919785957683";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  const base =
    "inline-flex items-center justify-center font-medium transition active:scale-95";

  const sizes = {
    normal: "w-full py-3 rounded-xl bg-primary text-white",
    small:
      "px-3 py-1.5 rounded-lg bg-primary text-white text-xs whitespace-nowrap",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]}`}
    >
      Order
    </a>
  );
}
