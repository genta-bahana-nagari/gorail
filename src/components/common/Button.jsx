const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
    danger:
      "bg-red-700 text-white hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-md font-serif font-medium transition-colors duration-200 ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
