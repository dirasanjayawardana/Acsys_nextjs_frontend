import Link from "next/link";
import React from "react";
import { FiLoader, FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const FormAddUser = () => {
    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Add User</h1>
            </div>
            <form className="mt-3 p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-sm input-bordered w-64"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Email</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-sm input-bordered w-64"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Role</label>
                        <select className="select select-sm select-bordered w-64">
                            <option>Role 1</option>
                            <option>Role 2</option>
                            <option>Role 3</option>
                            <option>Role 4</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Status</label>
                        <select className="select select-sm select-bordered w-64">
                            <option>Aktif</option>
                            <option>Non Aktif</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2 items-center text-white mt-3">
                    <Link href="/main/administrator/userlist">
                        <button className="py-2 px-4 rounded-xl bg-red-400 flex gap-1 items-center">
                            <MdOutlineCancel />
                            <span>Cancel</span>
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="py-2 px-4 rounded-xl bg-blue-500 flex gap-1 items-center"
                    >
                        <FiSave />
                        <span className="font-semibold">Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAddUser;
