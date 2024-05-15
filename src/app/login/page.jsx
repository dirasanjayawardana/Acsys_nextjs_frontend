"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FiLock, FiUser } from "react-icons/fi";
import axios from "axios";

const Page = () => {

  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/login", form);
      document.cookie = `token=; expires=; path=/`;
      router.push("/main")
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-gray-300 min-h-[100vh] flex justify-center text-white">
      <div className="w-[580px] h-[604px] flex flex-col items-center -mt-5">
        <div className="w-[300px]">
          <Image src={logo} alt="Acsys" />
        </div>
        <div className="w-[420px] h-[504px] bg-white rounded-2xl -mt-5 shadow-lg p-8">
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
                onChange={(e) => setForm({ ...form, username: e.target.value })}
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
                type="text"
                placeholder="Password"
                className="py-2 px-4 rounded-lg w-full text-black"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </form>
          </div>

          <div className="bg-gray-500 mt-5 rounded-xl p-8 flex items-center gap-3">
            <form>
              <input type="checkbox" className="w-5 h-5 rounded-xl" />
            </form>
            <p className="-mt-[6px]">
              I accept the terms in the user agreement
            </p>
          </div>
        </div>

        <button
          onClick={() => handleLogin()}
          className="bg-blue-600 mt-4 w-[380px] py-2 rounded-xl font-semibold"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Page;
