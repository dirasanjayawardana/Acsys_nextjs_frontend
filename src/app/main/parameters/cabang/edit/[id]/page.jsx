"use client";
import PleaseWait from "@/components/PleaseWait";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const Page = () => {
    const params = useParams();
    const [dataCabang, setDataCabang] = useState({
        kodeCabang: "",
        namaCabang: "",
        tipeCabang: "",
        statusCabang: "",
        sandiBi: "",
        zonaWaktu: "",
        userInput: "",
        tanggalInput: "",
        terminalInput: "",
        userOtorisasi: "",
        tanggalOtorisasi: "",
        terminalOtorisasi: "",
        kodeCabangInduk: "",
        statusAktif: "",
        statusOtorisasi: "",
        kodeWilayah: "",
        kodeKantor: "",
        kodeLokasi: "",
        statusAkses: "",
        kodeWilayahKliring: "",
        levelCaban: "",
        levelCabang: "",
        idSandiLokasi: "",
        idSandiBi: "",
        kantorAlamat: "",
        kantorKodePos: "",
        kantorNama: "",
        kantorNpwp: "",
        kantorTelepon1: "",
        kantorTelepon2: "",
        kantorTelepon3: "",
        kantorTipe: "",
        isKordinatorKliring: "",
    });

    useEffect(() => {
        const getCurrentData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/cabang/getcabang?input=${params.id}`
                );
                setDataCabang(response.data.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getCurrentData();
    }, []);

    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Edit Parameter Cabang</h1>
            </div>
            {dataCabang ? (
                <form className="mt-3 p-4 grid xl:grid-cols-3 gap-3">
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Cabang</label>
                        <input
                            type="text"
                            placeholder="Kode Cabang"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataCabang.kodeCabang}
                            disabled
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Nama Cabang</label>
                        <input
                            type="text"
                            placeholder="Nama Cabang"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataCabang.namaCabang}
                            onChange={(e) =>
                                setDataCabang({
                                    ...dataCabang,
                                    namaCabang: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Tipe Cabang</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataCabang.tipeCabang}
                            onChange={(e) =>
                                setDataCabang({
                                    ...dataCabang,
                                    tipeCabang: e.target.value,
                                })
                            }
                        >
                            <option value="NO">NO</option>
                            <option value="CU">CU</option>
                            <option value="KF">KF</option>
                            <option value="CP">CP</option>
                            <option value="KS">KS</option>
                            <option value="GM">GM</option>
                            <option value="LS">LS</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Status Cabang</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>P</option>
                            <option>S</option>
                            <option>B</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Sandi BI</label>
                        <input
                            type="text"
                            placeholder="Sandi BI"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Zona Waktu</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>B</option>
                            <option>TA</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">User Input</label>
                        <input
                            type="text"
                            placeholder="User Input"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Tanggal Input</label>
                        <input
                            type="text"
                            placeholder="Tanggal Input"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Terminal Input</label>
                        <input
                            type="text"
                            placeholder="Terminal Input"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">User Otorisasi</label>
                        <input
                            type="text"
                            placeholder="User Otorisasi"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Tanggal Otorisasi</label>
                        <input
                            type="text"
                            placeholder="Tanggal Otorisasi"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Terminal Otorisasi</label>
                        <input
                            type="text"
                            placeholder="Terminal Otorisasi"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Cabang Induk</label>
                        <input
                            type="text"
                            placeholder="Kode Cabang Induk"
                            className="input input-sm input-bordered w-[220px]"
                            disabled
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Status Aktif</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>True</option>
                            <option>False</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Status Otorisasi</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>1</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Wilayah</label>
                        <input
                            type="text"
                            placeholder="Kode Wilayah"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Kantor</label>
                        <input
                            type="text"
                            placeholder="Kode Kantor"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Lokasi</label>
                        <input
                            type="text"
                            placeholder="Kode Lokasi"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Status Akses</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>O</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Kode Wilayah kliring
                        </label>
                        <input
                            type="text"
                            placeholder="Kode Wilayah kliring"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Level Caban</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>0</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Level Cabang</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>0</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">ID Sandi Lokasi</label>
                        <input
                            type="text"
                            placeholder="ID Sandi Lokasi"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">ID Sandi BI</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>0</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Alamat</label>
                        <input
                            type="text"
                            placeholder="Kantor Alamat"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>

                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Kode Pos</label>
                        <input
                            type="text"
                            placeholder="Kantor Kode Pos"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>

                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Nama</label>
                        <input
                            type="text"
                            placeholder="Kantor Nama"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor NPWP</label>
                        <input
                            type="text"
                            placeholder="Kantor NPWP"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Telepon 1</label>
                        <input
                            type="text"
                            placeholder="Kantor Telepon 1"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Telepon 2</label>
                        <input
                            type="text"
                            placeholder="Kantor Telepon 2"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Telepon 3</label>
                        <input
                            type="text"
                            placeholder="Kantor Telepon 3"
                            className="input input-sm input-bordered w-[220px]"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kantor Tipe</label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>CP</option>
                            <option>CU</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Koordinator Kliring
                        </label>
                        <select className="select select-sm select-bordered w-[220px]">
                            <option>True</option>
                            <option>False</option>
                        </select>
                    </div>

                    <div className="flex gap-2 items-center text-white ml-3 mt-3">
                        <Link href="/main/parameters/cabang">
                            <button className="py-2 px-4 rounded-xl bg-red-400 flex gap-1 items-center">
                                <MdOutlineCancel />
                                <span>Cancel</span>
                            </button>
                        </Link>
                        <button className="py-2 px-4 rounded-xl bg-blue-500 flex gap-1 items-center">
                            <FiSave />
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            ) : (
                <PleaseWait />
            )}
        </div>
    );
};

export default Page;
