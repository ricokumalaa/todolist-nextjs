import "../input/input.css"

interface InputProps {
    type: string,
    name: string
    placeholder?: string,
    value?: string
}

const Input = ({type, name, placeholder, value}: InputProps) => {
    return (
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            value={value}
            className="border outline-none rounded-xl border-gray-500 focus:border-blue-700 py-2 px-5"
        />
    );
}

export default Input;