import Input from "../component/shared/input/Input";
import Button from "../component/shared/button/Button"

export default function Login() {
    return (
        <div className="justify-items-center h-screen w-screen">
            <div className="h-30 w-full p-7 content-center">
                <p className="text-2xl font-bold text-black">
                    todoList
                </p>
            </div>
            <div className="w-100 justify-stretch text-black space-y-3">
                <p className="text-2xl font-bold text-center">
                    todoList 
                </p>
                <p className="text-center text-m">
                    A board to help your daily needs
                </p>
                <form id="loginForm" className="flex flex-col space-y-4 py-4" action="" method="post">
                    <Input type="email" name="emailAddress" placeholder="Email address"/>
                    <Input type="password" name="password" placeholder="Password"/>

                    <Button type="submit" text="Log in"/>
                </form>
            </div>
        </div>
    );
}