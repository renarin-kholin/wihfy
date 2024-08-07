import React from "react";

export default function ListItem({children}: {children: React.ReactNode}) {
    return (
        <li className="flex flex-row gap-2 items-center">
            <div className=" h-4 w-4 bg-red-500"></div>
            <p className="text-base antialiased selection:bg-black font-semibold selection:[-webkit-tap-highlight-color:rgba(0,0,0,0)]">&#160;{children}&#160;</p>
        </li>
    )
}