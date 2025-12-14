"use client"

import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();

    const  isLogin = pathName === "/login";

    return (
        <>
        {!isLogin && (
            <div className="flex items-center justify-between h-10 w-full px-4">
            {/* Logo (Left) */}
            <div className="text-black font-bold text-xl">
                TodoList
            </div>

            {/* Menu (Right) */}
            
            <div className="text-black">
                RIGHT
            </div>
            
        </div>
        )}
        </>
    );
}

export default Navbar;