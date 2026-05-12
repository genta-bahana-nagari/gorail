const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md",

    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",

    outline:
      "border border-gray-300 bg-white text-gray-700 hover:border-red-600 hover:text-red-600",

    danger: "bg-red-600 text-white hover:bg-red-700",

    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
