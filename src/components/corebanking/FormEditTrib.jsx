import React from "react";

const FormEditTrib = () => {
  return (
    <div>
      <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
        <h1>TRIB Edit Paramater</h1>
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
              <option>Pasif</option>∏
            </select>
          </div>
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">On Balance Sheet Mode</span>
              </label>
            </div>
          </div>
          <div className="flex gap-24">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Blokir Debet</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Blokir Kredit</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Kena Biaya ATM</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px]">Minimal Setoran Rutin</label>
            <input
              type="text"
              placeholder="Minimal Setoran Rutin"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px]">Jangka Waktu (Bulan)</label>
            <input
              type="text"
              placeholder="Jangka Waktu (Bulan)"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-52">Grace Period Gagal Debet (Hari)</label>
            <input
              type="text"
              placeholder="Grace Period Gagal Debet (Hari)"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px]">Maksimal Gagal Debet</label>
            <input
              type="text"
              placeholder="Maksimal Gagal Debet"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px]">Biaya Gagal Debet</label>
            <input
              type="text"
              placeholder="Biaya Gagal Debet"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px]">Biaya Penutupan Gagal Debet</label>
            <input
              type="text"
              placeholder="Biaya Penutupan Gagal Debet"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-[243px] font-semibold">
              Proses Pendebetan Gagal Debet
            </label>
            <div className="flex gap-3">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text">
                    Proses Ulang Hanya Pada Tanggal Debet
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <label className="font-semibold">
            Parameter Rekening Tidak Aktif (Dormant)
          </label>
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Kena Biaya ATM</span>
              </label>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-52">Limit Hari Tidak Aktif</label>
            <input
              type="text"
              placeholder="Limit Hari Tidak Aktif"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="min-w-52">Tanggal Acuan Tidak Aktif</label>
            <input
              type="text"
              placeholder="Tanggal Acuan Tidak Aktif"
              className="input input-sm input-bordered w-64"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text min-w-[275px]">
                    Tutup Otomatis Saldo Nol
                  </span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-52">
                Limit Hari Tutup Otomatis Saldo Nol
              </label>
              <input
                type="text"
                placeholder="Limit Hari Tutup Otomatis Saldo Nol"
                className="input input-sm input-bordered w-64"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text">
                    Menggunakan Saldo Minimum Tidak AKtif
                  </span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-[270px]">Saldo Minimum Tidak Aktif</label>
              <input
                type="text"
                placeholder="Saldo Minimum Tidak Aktif"
                className="input input-sm input-bordered w-64"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text min-w-[275px]">
                    Kena Rekening Biaya Dormant
                  </span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-[270px]">Biaya Rekening Dormant</label>
              <input
                type="text"
                placeholder="Biaya Rekening Dormant"
                className="input input-sm input-bordered w-64"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEditTrib;
