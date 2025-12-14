interface ButtonProps {
    type?: "submit" | "reset" | "button",
    text: string,
    onClick?: () => void
}
const Button = ({type = "button", text, onClick}: ButtonProps) => {
    return(
        <button 
            type={type} 
            onClick={onClick}
            className="rounded-xl text-white font-semibold bg-blue-500 py-2 px-6 cursor-pointer hover:bg-blue-600"
        >
            {text}
        </button>
    );
}

export default Button;