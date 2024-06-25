"use client"
import { useStateContext } from "@/contexts/ContexProvider";
import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

const Header = () => {
    const { header, user } = useStateContext();

    const date = new Date()
    const currentDate = date.getDate()
    const day = date.getDay()
    const month = date.getMonth()
    const hour12 = date.getHours()  % 12 || 12
    const hour = date.getHours()
    const minute = date.getMinutes()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className="flex justify-between py-8 px-14">
            <div className="text-xl">
                <h3 className="">Hello, <span className="font-bold capitalize">{user && user.username}</span></h3>
                <h3 className="mt-2">
                    Acsys <span className="font-bold">- {header}</span>
                </h3>
            </div>
            <div className="text-lg">
                <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span className="font-bold">{days[day]}</span> - {currentDate} {months[month]}
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <FiClock />
                    <span className="font-bold">{hour12}.{minute}</span> {hour>=12 ? "PM" : "AM"}
                </div>
            </div>
        </div>
    );
};

export default Header;