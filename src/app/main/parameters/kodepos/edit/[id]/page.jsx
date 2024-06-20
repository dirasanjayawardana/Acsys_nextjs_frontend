"use client";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const Page = () => {
    const userid = document.cookie
        .split("; ")
        .find((row) => row.startsWith("ACSYS-USERID="))
        ?.split("=")[1];

    const params = useParams();
    const router = useRouter();
    const [scheduleInput, setScheduleInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [dataKodepos, setDataKodepos] = useState({
        kodePos: "",
        desa: "",
        kecamatan: "",
        kotaKabupaten: "",
        provinsi: "",
    });

    useEffect(() => {
        if (params.id !== "create") {
            const getCurrentData = async () => {
                try {
                    const response = await axios.get(
                        `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/kodepos/getbyid?id_kodepos=${params.id}`
                    );
                    setDataKodepos(response.data.data);
                } catch (error) {
                    console.log(error);
                }
            };

            getCurrentData();
        }
    }, [params.id]);

    const updateData = async () => {
        setIsLoading(true);
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/kodepos/log`,
                {
                    ...dataKodepos,
                    submitter: userid,
                    authorizer: "SUPERVISOR",
                    submitAt: new Date().toLocaleString(),
                    deadline: calculateDeadline(scheduleInput),
                    scheduleAt: convertDateToCron(scheduleInput),
                    statusApprovement: "PENDING",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "USER-ID": userid,
                    },
                }
            );
            router.push("/main/parameters/kodepos");
            setIsLoading(false);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const convertDateToCron = (date) => {
        const d = new Date(date);
        const seconds = "0";
        const minutes = d.getMinutes();
        const hours = d.getHours();
        const dayOfMonth = d.getDate();
        const month = d.getMonth() + 1;
        const dayOfWeek = "?";
        return `${seconds} ${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`;
    };

    const calculateDeadline = (date) => {
        const d = new Date(date);
        d.setDate(d.getDate() - 1);
        return d.toLocaleString();
    };

    const getMinDateTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        return now.toISOString().slice(0, 16);
    };

    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>
                    {params.id === "create" ? "Add" : "Edit"} Parameter Kode Pos
                </h1>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateData();
                }}
                className="mt-3 p-4 gap-3"
            >
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Pos</label>
                        <input
                            type="text"
                            placeholder="Kode Pos"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataKodepos.kodePos}
                            onChange={(e) =>
                                setDataKodepos({
                                    ...dataKodepos,
                                    kodePos: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Desa</label>
                        <input
                            type="text"
                            placeholder="Desa"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataKodepos.desa}
                            onChange={(e) =>
                                setDataKodepos({
                                    ...dataKodepos,
                                    desa: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kecamatan</label>
                        <input
                            type="text"
                            placeholder="Kecamatan"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataKodepos.kecamatan}
                            onChange={(e) =>
                                setDataKodepos({
                                    ...dataKodepos,
                                    kecamatan: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kota Kabupaten</label>
                        <input
                            type="text"
                            placeholder="Kota Kabupaten"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataKodepos.kotaKabupaten}
                            onChange={(e) =>
                                setDataKodepos({
                                    ...dataKodepos,
                                    kotaKabupaten: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Provinsi</label>
                        <input
                            type="text"
                            placeholder="Provinsi"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataKodepos.provinsi}
                            onChange={(e) =>
                                setDataKodepos({
                                    ...dataKodepos,
                                    provinsi: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className="mt-3">
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Schedule Date</label>
                        <input
                            type="datetime-local"
                            className="input input-sm input-bordered w-[220px]"
                            value={scheduleInput}
                            required
                            min={getMinDateTime()}
                            onChange={(e) => setScheduleInput(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 items-center text-white mt-7">
                        <Link href="/main/parameters/kodepos">
                            <button className="py-2 px-4 rounded-xl bg-red-400 flex gap-1 items-center">
                                <MdOutlineCancel />
                                <span>Cancel</span>
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="py-2 px-4 rounded-xl bg-blue-500 flex gap-1 items-center"
                        >
                            <FiSave />
                            {isLoading ? (
                                <div className="flex justify-center gap-3">
                                    <p>Please wait</p>
                                    <span className="loading loading-spinner"></span>
                                </div>
                            ) : (
                                <span className="font-semibold">Submit</span>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Page;
