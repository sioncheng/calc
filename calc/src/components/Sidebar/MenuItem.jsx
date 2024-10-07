import React from "react";
import { FaHome } from "react-icons/fa";

const MenuItem = ({icon:I, X, name, isOpen, isLogout}) => {
    return (
        <div className={`flex m-2 cursor-pointer items-center space-x-4 rounded-md px-4 py-3 text-gray-400 duration-500 hover:bg-teal-700 hover:text-white ${isLogout ? "mt-auto hidden":""}`}>
        <X className={`text-xl`}/>
        {/* <I className={`text-xl`}/> */}
        {isOpen && <span>{name}</span>}
        </div>
    );
};

export default MenuItem;