"use client";

const Button = ({
    label,
    onClick,
    variant = "primary",
    type = "button",
    className
}) => {
    const baseStyle =
        "px-4 py-2 rounded-md max-sm:text-sm font-medium focus:outline-none transition cursor-pointer";

    const variantStyles = {
        primary: "bg-secondary-red hover:bg-secondary-red/80 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        danger: "bg-red-500 hover:bg-red-600 text-white",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
        >
            {label}
        </button>
    );
}

export default Button;