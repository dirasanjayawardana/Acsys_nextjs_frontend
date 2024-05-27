import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
        <h1>Edit Parameter Produk</h1>
      </div>
      <form className="mt-3 p-4 grid grid-cols-4 gap-3">
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Is Tiering Nisbah Bonus</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Jenis Akad</label>
          <select className="select select-sm select-bordered w-64">
            <option>Mudharabah</option>
            <option>Wadiah</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Rencana Asuransi</label>
          <input
            type="text"
            placeholder="Kode Rencana Asuransi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Nisbah Bonus Dasar</label>
          <input
            type="text"
            placeholder="Nisbah Bonus Dasar"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Setoran Awal Minimum</label>
          <input
            type="text"
            placeholder="Setoran Awal Minimum"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">ID Asuransi</label>
          <input
            type="text"
            placeholder="ID Asuransi"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Param Saldo Tidak Aktif</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Override Biaya Penutupan</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Biaya Penutupan Rekening</label>
          <input
            type="text"
            placeholder="Biaya Penutupan Rekening"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Sumber Biaya Admin</label>
          <select className="select select-sm select-bordered w-64">
            <option>1</option>
            <option>0</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Jumlah Hari PerTahun</label>
          <input
            type="text"
            placeholder="Jumlah Hari PerTahun"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Digit</label>
          <input
            type="text"
            placeholder="Kode Digit"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Debet Internal</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Debet Eksternal</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Kredit Internal</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Kredit Eksternal</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Biaya Saldo Minimum</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Biaya Rekening Dormant</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Biaya ATM</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Cetak Nota</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Status Passbook</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kolektibilitas</label>
          <input
            type="text"
            placeholder="Kolektibilitas"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Dapat Bagi Hasil</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Tidak Dormant</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Tanggal Acuan Dormant</label>
          <input
            type="text"
            placeholder="Tanggal Acuan Dormant"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Biaya Rekening Dormant</label>
          <input
            type="text"
            placeholder="Biaya Rekening Dormant"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Biaya Saldo Minimum</label>
          <input
            type="text"
            placeholder="Biaya Saldo Minimum"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Jumlah Hari Tutup Otomatis</label>
          <input
            type="text"
            placeholder="Jumlah Hari Tutup Otomatis"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Debet</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Blokir Kredit</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Tutup Otomatis Dormant</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Biaya Admin ATM</label>
          <input
            type="text"
            placeholder="Biaya Admin ATM"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Biaya Kartu ATM</label>
          <input
            type="text"
            placeholder="Biaya Kartu ATM"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Biaya Materai</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Override Biaya ATM</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Order MB</label>
          <input
            type="text"
            placeholder="Order MB"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode POF Default</label>
          <input
            type="text"
            placeholder="Kode POF Default"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Persentase Cadangan</label>
          <input
            type="text"
            placeholder="Persentase Cadangan"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-[84px]">Is Proses Cadangan</label>
          <select className="select select-sm select-bordered w-64">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Ekuivalen Rate</label>
          <input
            type="text"
            placeholder="Ekuivalen Rate"
            className="input input-sm input-bordered w-64"
          />
        </div>
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Saldo Minimum Bagi Hasil</label>
          <input
            type="text"
            placeholder="Saldo Minimum Bagi Hasil"
            className="input input-sm input-bordered w-64"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
