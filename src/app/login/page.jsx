"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FiLoader, FiLock, FiUser } from "react-icons/fi";
import axios from "axios";

const Page = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        userid: "",
        pass: "",
    });
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAgree, setIsAgree] = useState(true);

    const handleLogin = async () => {
        setIsLoading(true);
        setErrors(null);
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/login`,
                form
            );
            document.cookie = `ACSYS-USERID=${form.userid}; expires=; path=/`;
            router.push("/main");
            setIsLoading(false);
        } catch (error) {
            if (error.response?.data?.errors === "userid already in use!") {
                await axios.post(
                    `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/logout?userid=${form.userid}`
                );
                try {
                    await axios.post(
                        `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/secure/login`,
                        form
                    );
                    document.cookie = `ACSYS-USERID=${form.userid}; expires=; path=/`;
                    router.push("/main");
                    setIsLoading(false);
                } catch (error) {
                    setErrors(error.response.data.errors);
                    setIsLoading(false);
                }
            } else {
                setErrors(error.response?.data?.errors);
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="bg-gray-300 min-h-[100vh] flex justify-center text-white pt-28">
            <div className="w-[580px] h-[604px] flex flex-col items-center -mt-5">
                <div className="w-[300px]">
                    <Image src={logo} alt="Acsys" />
                </div>
                <div className="w-[420px] h-[340px] bg-white rounded-2xl -mt-5 shadow-lg p-8">
                    {errors && (
                        <div className="text-red-500 font-semibold text-sm ml-3 mb-1">
                            <p>* {errors}</p>
                        </div>
                    )}

                    <div className="bg-blue-600 p-6 rounded-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <FiUser size={20} />
                            <p className="font-semibold">Username or Email</p>
                        </div>
                        <form>
                            <input
                                type="text"
                                placeholder="Username"
                                className="py-2 px-4 rounded-lg w-full text-black"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        userid: e.target.value,
                                    })
                                }
                            />
                        </form>
                    </div>

                    <div className="bg-blue-600 p-6 rounded-xl mt-5">
                        <div className="flex items-center gap-2 mb-4">
                            <FiLock size={20} />
                            <p className="font-semibold">Password</p>
                        </div>
                        <form>
                            <input
                                type="password"
                                placeholder="Password"
                                className="py-2 px-4 rounded-lg w-full text-black"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        pass: e.target.value,
                                    })
                                }
                            />
                        </form>
                    </div>

                    {/* <div className="bg-gray-500 mt-5 rounded-xl p-8 py-6 flex items-center gap-5">
                        <form>
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-xl"
                                checked={isAgree}
                                onChange={() => setIsAgree(!isAgree)}
                            />
                        </form>
                        <p className="-mt-[6px]">
                            I accept the terms and user agreement
                        </p>
                    </div> */}
                </div>

                <button
                    onClick={() => handleLogin()}
                    className={`${
                        !isAgree ? "bg-gray-500" : "bg-blue-600"
                    } mt-4 w-[380px] py-2 rounded-xl`}
                    disabled={!isAgree}
                >
                    {isLoading ? (
                        <div className="flex justify-center gap-3">
                            <p>Please wait</p>
                            <span className="loading loading-spinner"></span>
                        </div>
                    ) : (
                        <span className="font-semibold">Sign in</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Page;
