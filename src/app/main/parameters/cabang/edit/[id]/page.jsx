import Link from "next/link";
import React from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const page = () => {
    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Edit Parameter Cabang</h1>
            </div>

            <form className="mt-3 p-4 grid xl:grid-cols-3 gap-3">
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Kode Cabang</label>
                    <input
                        type="text"
                        placeholder="Kode Cabang"
                        className="input input-sm input-bordered w-[220px]"
                        disabled
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Nama Cabang</label>
                    <input
                        type="text"
                        placeholder="Nama Cabang"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Tipe Cabang</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>NO</option>
                        <option>CU</option>
                        <option>KF</option>
                        <option>CP</option>
                        <option>KS</option>
                        <option>GM</option>
                        <option>LS</option>
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
                    <label className="w-[220px]">Kode Wilayah kliring</label>
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
                    <label className="w-[220px]">Is Koordinator Kliring</label>
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
        </div>
    );
};

export default page;
