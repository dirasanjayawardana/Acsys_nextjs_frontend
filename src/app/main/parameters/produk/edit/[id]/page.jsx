import React from "react";

const page = () => {
    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Edit Paramter Produk</h1>
            </div>
            <form className="mt-3 p-4 grid xl:grid-cols-3 gap-3">
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Kode Produk</label>
                    <input
                        type="text"
                        placeholder="Kode Produk"
                        className="input input-sm input-bordered w-[220px]"
                        disabled
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Nama Produk</label>
                    <input
                        type="text"
                        placeholder="Nama Produk"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is OnBalanceSheetMode</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">
                        Saldo Minimum Tidak Aktif
                    </label>
                    <input
                        type="text"
                        placeholder="Saldo Minimum Tidak Aktif"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Saldo Minimum</label>
                    <input
                        type="text"
                        placeholder="Saldo Minimum"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Saldo Maksimum</label>
                    <input
                        type="text"
                        placeholder="Saldo Maksimum"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is IsBackdated</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Jumlah Bulan Maks Backdated</label>
                    <input
                        type="text"
                        placeholder="Saldo Maksimum"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Kena Zakat Bagi Hasil</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Presentase Zakat Bagi Hasil</label>
                    <input
                        type="text"
                        placeholder="Presentase Zakat Bagi Hasil"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Kena Pajak</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Tarif Pajak</label>
                    <input
                        type="text"
                        placeholder="Tarif Pajak"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Disposisi Bagi Hasil</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>K</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Periode Bagi Hasil</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>B</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Jenis Produk</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>T</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Kode Valuta</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>IDR</option>
                        <option>USD</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Status</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>Active</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Produk Berasuransi</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Produk Partnership</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Bagi Hasil Khusus</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Tarif Pajak</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Zakat Bagi Hasil</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Disposisi BGH</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Disposisi BGH</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Jarak Periode Bagi Hasil</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Override Backdated</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Id Rencana Bagi Hasil Default</label>
                    <input
                        type="date"
                        placeholder="Id Rencana Bagi Hasil Default"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Kena Biaya Layanan Umum</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Id Biaya Layanan Umum</label>
                    <input
                        type="input"
                        placeholder="Id Biaya Layanan Umum"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">NamaValuta</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>RUPIAH</option>
                        <option>DOLAR</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Produk Kartu</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Nama Asuransi</label>
                    <input
                        type="text"
                        placeholder="Nama Asuransi"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Id Partner</label>
                    <input
                        type="text"
                        placeholder="Id Partner"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Nama Grup</label>
                    <input
                        type="text"
                        placeholder="Nama Grup"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Ins Plan Id</label>
                    <input
                        type="text"
                        placeholder="Ins Plan Id"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Ps Plan Id</label>
                    <input
                        type="text"
                        placeholder="Ps Plan Id"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Biaya Adm Bulanan</label>
                    <input
                        type="text"
                        placeholder="Biaya Adm Bulanan"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Id Tiering Biaya Adm</label>
                    <input
                        type="text"
                        placeholder="Id Tiering Biaya Adm"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Id Tiering Nisbah Bonus</label>
                    <input
                        type="text"
                        placeholder="Id Tiering Nisbah Bonus"
                        className="input input-sm input-bordered w-[220px]"
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="w-[220px]">Is Tiering Biaya Adm</label>
                    <select className="select select-sm select-bordered w-[220px]">
                        <option>True</option>
                        <option>False</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default page;
