import React from "react";

const FormEditTrib = () => {
  return (
    <div>
      <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
        <h1>TRIB Edit Parameter</h1>
      </div>

      <form className="mt-3 p-4 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <label className="min-w-28">Kode Produk</label>
          <input
            type="text"
            placeholder="Kode Produk"
            className="input input-sm input-bordered w-64"
          />
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex gap-3 items-center">
            <label className="min-w-28">Nama Produk</label>
            <input
              type="text"
              placeholder="Nama Produk"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[84px]">Jenis Akad</label>
            <select className="select select-sm select-bordered w-64">
              <option>Mudharabah</option>
              <option>Wadiah</option>
            </select>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <label className="min-w-52">Kode Valuta</label>
              <select className="select select-sm select-bordered w-64">
                <option>IDR (Rupiah)</option>
                <option>USD (Dollar)</option>
              </select>
            </div>

            <div className="flex gap-3 items-center">
              <label className="min-w-52">Setoran Awal Minimum</label>
              <input
                type="text"
                placeholder="Setoran Awal Minimum"
                className="input input-sm input-bordered w-64"
              />
            </div>

            <div className="flex gap-3 items-center">
              <label className="min-w-52">Saldo Minimum</label>
              <input
                type="text"
                placeholder="Saldo Minimum"
                className="input input-sm input-bordered w-64"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex gap-3 items-center">
                <label className="min-w-52">Biaya Penutupan Rekening</label>
                <input
                  type="text"
                  placeholder="Biaya Penutupan Rekening"
                  className="input input-sm input-bordered w-64"
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text">Override Biaya Penutupan</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <label className="min-w-52">Status</label>
              <select className="select select-sm select-bordered w-64">
                <option>Aktif</option>
                <option>Pasif</option>
              </select>
            </div>
          </div>
          <div className=""></div>
        </div>
      </form>
    </div>
  );
};

export default FormEditTrib;
