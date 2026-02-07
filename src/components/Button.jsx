export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-sm transition active:scale-95";

  const styles = {
    primary: "bg-primary text-white",
    secondary: "bg-primarySoft text-primary border border-primary/10",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
