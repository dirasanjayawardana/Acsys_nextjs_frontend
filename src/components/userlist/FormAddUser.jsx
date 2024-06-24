"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiLoader, FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const FormAddUser = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        userid: "",
        username: "",
        level: 1,
        password: "",
        status: 0,
        isaktif: 1,
        karyawan: null,
        domain: 0,
        branch: "",
        userdomain: "",
        groupakses: "OPERATOR",
        locked: 0,
        session: null,
    });
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/register`,
                formData
            );
            setIsLoading(false);
            router.push("/main/administrator/userlist");
        } catch (error) {
            setErrors(error.response.data.errors);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Add User</h1>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="mt-3 p-4 flex flex-col gap-3"
            >
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">User-Id</label>
                        <input
                            type="text"
                            placeholder="User-Id"
                            className="input input-sm input-bordered w-64"
                            value={formData.userid}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    userid: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-sm input-bordered w-64"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Level</label>
                        <select
                            className="select select-sm select-bordered w-64"
                            value={formData.level}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    level: e.target.value,
                                })
                            }
                        >
                            <option value={1}>Level 1</option>
                            <option value={2}>Level 2</option>
                            <option value={9}>Level 9</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Password</label>
                        <input
                            type="text"
                            placeholder="Password"
                            className="input input-sm input-bordered w-64"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Status Aktif</label>
                        <select
                            className="select select-sm select-bordered w-64"
                            value={formData.isaktif}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    isaktif: e.target.value,
                                })
                            }
                        >
                            <option value={1}>Aktif</option>
                            <option value={0}>Tidak Aktif</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Cabang</label>
                        <input
                            type="text"
                            placeholder="Cabang"
                            className="input input-sm input-bordered w-64"
                            value={formData.branch}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    branch: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">User Domain</label>
                        <input
                            type="text"
                            placeholder="User Domain"
                            className="input input-sm input-bordered w-64"
                            value={formData.userdomain}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    userdomain: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="min-w-52">Group Akses</label>
                        <select
                            className="select select-sm select-bordered w-64"
                            value={formData.groupakses}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    groupakses: e.target.value,
                                })
                            }
                        >
                            <option value="SUPERVISOR">Supervisor</option>
                            <option value="OPERATOR">Operator</option>
                            <option value="SA_OPERATOR">SA Operator</option>
                        </select>
                    </div>
                    {errors && (
                        <div className="text-red-500 font-semibold text-sm ml-1 flex gap-3">
                            <div className="min-w-52"></div>
                            <p>* {errors}</p>
                        </div>
                    )}
                </div>
                <div className="flex gap-2 items-center text-white mt-3">
                    <Link href="/main/administrator/userlist">
                        <button
                            type="button"
                            className="py-2 px-4 rounded-xl bg-red-400 flex gap-1 items-center font-semibold"
                        >
                            <MdOutlineCancel />
                            <span>Cancel</span>
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="py-2 px-4 rounded-xl bg-blue-500 flex gap-1 items-center"
                    >
                        {isLoading ? (
                            <div className="flex justify-center gap-3">
                                <p>Please wait</p>
                                <span className="loading loading-spinner"></span>
                            </div>
                        ) : (
                            <div className="flex gap-1 items-center">
                                <FiSave />
                                <span className="font-semibold">Submit</span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAddUser;
