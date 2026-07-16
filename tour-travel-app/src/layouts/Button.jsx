import React from "react";

export const Button = (props) => {
    return (
        <div>
            <button className={`${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#F9EC7D] transition-all`}>
                {props.title}
            </button>
        </div>
    )
}