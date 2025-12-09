export default function Login() {
    return (
        <div className="justify-items-center h-screen w-screen">
            <div className="h-30 w-full p-7 content-center">
                <p className="text-2xl font-bold text-black">
                    todoList
                </p>
            </div>
            <div className="w-100 justify-stretch text-black">
                <p className="text-2xl font-bold text-center">
                    todoList 
                </p>
                <p className="text-center text-m">
                    A board to help your daily needs
                </p>
                <div className="py-4">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" placeholder="Enter your username" />
                </div>
            </div>
        </div>
    );
}