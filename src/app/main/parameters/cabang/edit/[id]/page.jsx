import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
        <h1>Edit Parameter Cabang</h1>
      </div>

      <form className="mt-3 p-4 grid grid-cols-4 gap-3">
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Cabang</label>
          <input
            type="text"
            placeholder="Kode Cabang"
            className="input input-sm input-bordered w-64"
            disabled
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Nama Cabang</label>
          <input
            type="text"
            placeholder="Nama Cabang"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Tipe Cabang</label>
          <select className="select select-sm select-bordered w-64">
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
          <label className="min-w-[84px]">Status Cabang</label>
          <select className="select select-sm select-bordered w-64">
            <option>P</option>
            <option>S</option>
            <option>B</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Sandi BI</label>
          <input
            type="text"
            placeholder="Sandi BI"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Zona Waktu</label>
          <select className="select select-sm select-bordered w-64">
            <option>B</option>
            <option>TA</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">User Input</label>
          <input
            type="text"
            placeholder="User Input"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Tanggal Input</label>
          <input
            type="text"
            placeholder="Tanggal Input"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Terminal Input</label>
          <input
            type="text"
            placeholder="Terminal Input"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">User Otorisasi</label>
          <input
            type="text"
            placeholder="User Otorisasi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Tanggal Otorisasi</label>
          <input
            type="text"
            placeholder="Tanggal Otorisasi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Terminal Otorisasi</label>
          <input
            type="text"
            placeholder="Terminal Otorisasi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Cabang Induk</label>
          <input
            type="text"
            placeholder="Kode Cabang Induk"
            className="input input-sm input-bordered w-64"
            disabled
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Status Aktif</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Status Otorisasi</label>
          <select className="select select-sm select-bordered w-64">
            <option>1</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Wilayah</label>
          <input
            type="text"
            placeholder="Kode Wilayah"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Kantor</label>
          <input
            type="text"
            placeholder="Kode Kantor"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Lokasi</label>
          <input
            type="text"
            placeholder="Kode Lokasi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Status Akses</label>
          <select className="select select-sm select-bordered w-64">
            <option>O</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Wilayah kliring</label>
          <input
            type="text"
            placeholder="Kode Wilayah kliring"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Level Caban</label>
          <select className="select select-sm select-bordered w-64">
            <option>0</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Level Cabang</label>
          <select className="select select-sm select-bordered w-64">
            <option>0</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">ID Sandi Lokasi</label>
          <input
            type="text"
            placeholder="ID Sandi Lokasi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">ID Sandi BI</label>
          <select className="select select-sm select-bordered w-64">
            <option>0</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Alamat</label>
          <input
            type="text"
            placeholder="Kantor Alamat"
            className="input input-sm input-bordered w-64"
          />
        </div>

        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Nama</label>
          <input
            type="text"
            placeholder="Kantor Nama"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor NPWP</label>
          <input
            type="text"
            placeholder="Kantor NPWP"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Telepon 1</label>
          <input
            type="text"
            placeholder="Kantor Telepon 1"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Telepon 2</label>
          <input
            type="text"
            placeholder="Kantor Telepon 2"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Telepon 3</label>
          <input
            type="text"
            placeholder="Kantor Telepon 3"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kantor Tipe</label>
          <select className="select select-sm select-bordered w-64">
            <option>CP</option>
            <option>CU</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Is Koordinator Kliring</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>

      </form>
    </div>
  );
};

export default page;
