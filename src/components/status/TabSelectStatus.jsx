import React from "react";

const TabSelectStatus = ({selectedData, setSelectedData}) => {
    return (
        <div
            role="tablist"
            className="tabs tabs-lifted w-72 rounded-b-none font-semibold border-none"
        >
            <button
                role="tab"
                className={`tab ${
                    selectedData === "PENDING" && "bg-blue-500 text-white"
                }`}
                onClick={() => setSelectedData("PENDING")}
            >
                Pending
            </button>
            <button
                role="tab"
                className={`tab ${
                    selectedData === "APPROVED" && "bg-blue-500 text-white"
                }`}
                onClick={() => setSelectedData("APPROVED")}
            >
                Approved
            </button>
            <button
                role="tab"
                className={`tab ${
                    selectedData === "DECLINE" && "bg-blue-500 text-white"
                }`}
                onClick={() => setSelectedData("DECLINE")}
            >
                Decline
            </button>
        </div>
    );
};

export default TabSelectStatus;
