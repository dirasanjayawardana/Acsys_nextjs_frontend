"use client";
import PleaseWait from "@/components/PleaseWait";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiLoader, FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const Page = () => {
    const params = useParams();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [dataProduk, setDataProduk] = useState({
        kodeProduk: "",
        namaProduk: "",
        isOnBalanceSheetMode: "",
        saldoMinimumTidakAktif: "",
        jumlahHariJadiTidakAktif: "",
        saldoMinimum: "",
        saldoMaksimum: "",
        isBackdated: "",
        jumlahBulanMaksBackdated: "",
        isKenaZakatBagiHasil: "",
        presentaseZakatBagiHasil: "",
        isKenaPajak: "",
        tarifPajak: "",
        disposisiBagiHasil: "",
        periodeBagiHasil: "",
        jenisProduk: "",
        kodeValuta: "",
        status: "",
        isProdukBerasuransi: "",
        isProdukPartnership: "",
        isOverrideBagiHasilKhusus: "",
        isOverrideTarifPajak: "",
        isOverrideZakatBagiHasil: "",
        isOverrideDisposisiBGH: "",
        jarakPeriodeBagiHasil: "",
        isOverrideBackdated: "",
        idRencanaBagiHasilDefault: "",
        isKenaBiayaLayananUmum: "",
        idBiayaLayananUmum: "",
        namaValuta: "",
        isProdukKartu: "",
        namaAsuransi: "",
        idPartner: "",
        namaGrup: "",
        insPlanId: "",
        psPlanId: "",
        biayaAdmBulanan: "",
        idTieringBiayaAdm: "",
        idTieringNisbahBonus: "",
        isTieringBiayaAdm: "",
        isTieringNisbahBonus: "",
        jenisAkad: "",
        kodeRencanaAsuransi: "",
        nisbahBonusDasar: "",
        setoranAwalMinimum: "",
        idAsuransi: "",
        isParamSaldoTidakAktif: "",
        isOverrideBiayaPenutupan: "",
        biayaPenutupanRekening: "",
        sumberBiayaAdm: "",
        jumlahHariPerTahun: "",
        kodeDigit: "",
        isBlokirDebetInternal: "",
        isBlokirDebetEksternal: "",
        isBlokirKreditInternal: "",
        isBlokirKreditEksternal: "",
        isBiayaSaldoMinimum: "",
        isBiayaRekeningDormant: "",
        isBiayaATM: "",
        isCetakNota: "",
        isStatusPassbook: "",
        kolektibilitas: "",
        isDapatBagiHasil: "",
        isTidakDormant: "",
        tanggalAcuanDormant: "",
        biayaRekeningDormant: "",
        biayaSaldoMinimum: "",
        jumlahHariTutupOtomatis: "",
        isBlokirDebet: "",
        isBlokirKredit: "",
        isTutupOtomatisDormant: "",
        biayaAdmATM: "",
        biayaKartuATM: "",
        isBiayaMaterai: "",
        isOverrideBiayaATM: "",
        orderMB: "",
        kodePOFDefault: "",
        persentaseCadangan: "",
        isProsesCadangan: "",
        ekuivalenRate: "",
        saldoMinimumBagiHasil: "",
        maxSize: "",
    });

    useEffect(() => {
        const getCurrentData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk/getproduk?input=${params.id}`
                );
                setDataProduk(response.data.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        getCurrentData();
    }, [params.id]);

    const updateProduk = async () => {
        setIsLoading(true);
        try {
            console.log("Sending data:", dataProduk);
            const userid = document.cookie
                .split("; ")
                .find((row) => row.startsWith("ACSYS-USERID="))
                ?.split("=")[1];
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk/updateproduk?code=${params.id}`,
                dataProduk,
                {
                    headers: {
                        "USER-ID": userid,
                    },
                }
            );
            router.push("/main/parameters/produk");
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to update produk:", error);
        }
    };

    return (
        <div>
            <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
                <h1>Edit Paramater Produk</h1>
            </div>
            <form className="">
                <div className="mt-3 p-4 grid xl:grid-cols-3 gap-3">
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Produk</label>
                        <input
                            type="text"
                            placeholder="Kode Produk"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.kodeProduk}
                            disabled
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Nama Produk</label>
                        <input
                            type="text"
                            placeholder="Nama Produk"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.namaProduk}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    namaProduk: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is OnBalanceSheetMode
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOnBalanceSheetMode}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOnBalanceSheetMode: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
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
                            value={dataProduk.saldoMinimumTidakAktif}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    saldoMinimumTidakAktif: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Jumlah Hari Jadi Tidak Aktif
                        </label>
                        <input
                            type="text"
                            placeholder="Saldo Minimum Tidak Aktif"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.jumlahHariJadiTidakAktif}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jumlahHariJadiTidakAktif: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Saldo Minimum</label>
                        <input
                            type="text"
                            placeholder="Saldo Minimum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.saldoMinimum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    saldoMinimum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Saldo Maksimum</label>
                        <input
                            type="text"
                            placeholder="Saldo Maksimum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.saldoMaksimum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    saldoMaksimum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Backdated</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBackdated}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBackdated: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Jumlah Bulan Maks Backdated
                        </label>
                        <input
                            type="text"
                            placeholder="Saldo Maksimum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.jumlahBulanMaksBackdated}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jumlahBulanMaksBackdated: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Kena Zakat Bagi Hasil
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isKenaZakatBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isKenaZakatBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Presentase Zakat Bagi Hasil
                        </label>
                        <input
                            type="text"
                            placeholder="Presentase Zakat Bagi Hasil"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.presentaseZakatBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    presentaseZakatBagiHasil: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Kena Pajak</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isKenaPajak}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isKenaPajak: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Tarif Pajak</label>
                        <input
                            type="text"
                            placeholder="Tarif Pajak"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.tarifPajak}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    tarifPajak: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Disposisi Bagi Hasil
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.disposisiBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    disposisiBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="H">Hibahkan</option>
                            <option value="K">Kapitalisir</option>
                            <option value="P">Pindah Buku</option>
                            <option value="T">Tunai</option>
                            <option value="R">Transfer</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Periode Bagi Hasil</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.periodeBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    periodeBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="B">B</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Jenis Produk</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.jenisProduk}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jenisProduk: e.target.value,
                                })
                            }
                        >
                            <option value="D">Produk Deposito</option>
                            <option value="T">Produk Tabungan</option>
                            <option value="G">Produk Giro</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Valuta</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.kodeValuta}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    kodeValuta: e.target.value,
                                })
                            }
                        >
                            <option value="IDR">IDR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Status</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.status}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    status: e.target.value,
                                })
                            }
                        >
                            <option value="A">Active</option>
                            <option value="I">Inactive</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Produk Berasuransi
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isProdukBerasuransi}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isProdukBerasuransi: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Produk Partnership
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isProdukPartnership}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isProdukPartnership: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Bagi Hasil Khusus
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideBagiHasilKhusus}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideBagiHasilKhusus: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Tarif Pajak
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideTarifPajak}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideTarifPajak: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Zakat Bagi Hasil
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideZakatBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideZakatBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Disposisi BGH
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideDisposisiBGH}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideDisposisiBGH: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Jarak Periode Bagi Hasil
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.jarakPeriodeBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jarakPeriodeBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Backdated
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideBackdated}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideBackdated: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Id Rencana Bagi Hasil Default
                        </label>
                        <input
                            type="text"
                            placeholder="Id Rencana Bagi Hasil Default"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idRencanaBagiHasilDefault}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idRencanaBagiHasilDefault: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Kena Biaya Layanan Umum
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isKenaBiayaLayananUmum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isKenaBiayaLayananUmum: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Id Biaya Layanan Umum
                        </label>
                        <input
                            type="input"
                            placeholder="Id Biaya Layanan Umum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idBiayaLayananUmum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idBiayaLayananUmum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">NamaValuta</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.namaValuta}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    namavlauta: e.target.value,
                                })
                            }
                        >
                            <option value="RUPIAH">RUPIAH</option>
                            <option value="DOLAR">DOLAR</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Produk Kartu</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isProdukKartu}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isProdukKartu: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Nama Asuransi</label>
                        <input
                            type="text"
                            placeholder="Nama Asuransi"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.namaAsuransi}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    namaAsuransi: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Id Partner</label>
                        <input
                            type="text"
                            placeholder="Id Partner"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idPartner}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idPartner: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Nama Grup</label>
                        <input
                            type="text"
                            placeholder="Nama Grup"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.namaGrup}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    namaGrup: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Ins Plan Id</label>
                        <input
                            type="text"
                            placeholder="Ins Plan Id"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.insPlanId}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    insPlanId: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Ps Plan Id</label>
                        <input
                            type="text"
                            placeholder="Ps Plan Id"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.psPlanId}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    psPlanId: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Biaya Adm Bulanan</label>
                        <input
                            type="text"
                            placeholder="Biaya Adm Bulanan"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaAdmBulanan}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaAdmBulanan: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Id Tiering Biaya Adm
                        </label>
                        <input
                            type="text"
                            placeholder="Id Tiering Biaya Adm"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idTieringBiayaAdm}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idTieringBiayaAdm: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Id Tiering Nisbah Bonus
                        </label>
                        <input
                            type="text"
                            placeholder="Id Tiering Nisbah Bonus"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idTieringNisbahBonus}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idTieringNisbahBonus: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Tiering Biaya Adm
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isTieringBiayaAdm}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isTieringBiayaAdm: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Tiering Nisbah Bonus
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isTieringNisbahBonus}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isTieringNisbahBonus: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Jenis Akad</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.jenisAkad}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jenisAkad: e.target.value,
                                })
                            }
                        >
                            <option value="M">Mudharabah</option>
                            <option value="W">Wadiah</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Kode Rencana Asuransi
                        </label>
                        <input
                            type="text"
                            placeholder="Kode Rencana Asuransi"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.kodeRencanaAsuransi}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    kodeRencanaAsuransi: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Nisbah Bonus Dasar</label>
                        <input
                            type="text"
                            placeholder="Nisbah Bonus Dasar"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.nisbahBonusDasar}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    nisbahBonusDasar: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Setoran Awal Minimum
                        </label>
                        <input
                            type="text"
                            placeholder="Setoran Awal Minimum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.setoranAwalMinimum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    setoranAwalMinimum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">ID Asuransi</label>
                        <input
                            type="text"
                            placeholder="ID Asuransi"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.idAsuransi}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    idAsuransi: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Param Saldo Tidak Aktif
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isParamSaldoTidakAktif}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isParamSaldoTidakAktif: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Biaya Penutupan
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideBiayaPenutupan}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideBiayaPenutupan: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Biaya Penutupan Rekening
                        </label>
                        <input
                            type="text"
                            placeholder="Biaya Penutupan Rekening"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaPenutupanRekening}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaPenutupanRekening: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Sumber Biaya Admin</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.sumberBiayaAdm}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    sumberBiayaAdm: e.target.value,
                                })
                            }
                        >
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Jumlah Hari PerTahun
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.sumberBiayaAdm}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jumlahHariPerTahun: e.target.value,
                                })
                            }
                        >
                            <option value="1">360</option>
                            <option value="2">364</option>
                            <option value="3">365</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode Digit</label>
                        <input
                            type="text"
                            placeholder="Kode Digit"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.kodeDigit}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    kodeDigit: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Blokir Debet Internal
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirDebetInternal}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirDebetInternal: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Blokir Debet Eksternal
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirDebetEksternal}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirDebetEksternal: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Blokir Kredit Internal
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirKreditInternal}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirKreditInternal: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Blokir Kredit Eksternal
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirKreditEksternal}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirKreditEksternal: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Biaya Saldo Minimum
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBiayaSaldoMinimum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBiayaSaldoMinimum: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Biaya Rekening Dormant
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBiayaRekeningDormant}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBiayaRekeningDormant: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Biaya ATM</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBiayaATM}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBiayaATM: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Cetak Nota</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isCetakNota}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isCetakNota: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Status Passbook</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isStatusPassbook}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isStatusPassbook: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kolektibilitas</label>
                        <input
                            type="text"
                            placeholder="Kolektibilitas"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.kolektibilitas}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    kolektibilitas: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Dapat Bagi Hasil</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isDapatBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isDapatBagiHasil: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Tidak Dormant</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isTidakDormant}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isTidakDormant: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Tanggal Acuan Dormant
                        </label>
                        <input
                            type="text"
                            placeholder="Tanggal Acuan Dormant"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.tanggalAcuanDormant}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    tanggalAcuanDormants: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Biaya Rekening Dormant
                        </label>
                        <input
                            type="text"
                            placeholder="Biaya Rekening Dormant"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaRekeningDormant}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaRekeningDormant: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Biaya Saldo Minimum</label>
                        <input
                            type="text"
                            placeholder="Biaya Saldo Minimum"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaSaldoMinimum}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaSaldoMinimum: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Jumlah Hari Tutup Otomatis
                        </label>
                        <input
                            type="text"
                            placeholder="Jumlah Hari Tutup Otomatis"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.jumlahHariTutupOtomatis}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    jumlahHariTutupOtomatis: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Blokir Debet</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirDebet}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirDebet: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Blokir Kredit</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBlokirKredit}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBlokirKredit: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Tutup Otomatis Dormant
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isTutupOtomatisDormant}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isTutupOtomatisDormant: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Biaya Admin ATM</label>
                        <input
                            type="text"
                            placeholder="Biaya Admin ATM"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaAdmATM}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaAdmATM: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Biaya Kartu ATM</label>
                        <input
                            type="text"
                            placeholder="Biaya Kartu ATM"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.biayaKartuATM}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    biayaKartuATM: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Biaya Materai</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isBiayaMaterai}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isBiayaMaterai: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Is Override Biaya ATM
                        </label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isOverrideBiayaATM}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isOverrideBiayaATM: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Order MB</label>
                        <input
                            type="text"
                            placeholder="Order MB"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.orderMB}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    orderMB: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Kode POF Default</label>
                        <input
                            type="text"
                            placeholder="Kode POF Default"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.kodePOFDefault}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    kodePOFDefault: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Persentase Cadangan</label>
                        <input
                            type="text"
                            placeholder="Persentase Cadangan"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.persentaseCadangan}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    persentaseCadangan: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Is Proses Cadangan</label>
                        <select
                            className="select select-sm select-bordered w-[220px]"
                            value={dataProduk.isProsesCadangan}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    isProsesCadangan: e.target.value,
                                })
                            }
                        >
                            <option value="T">Ya</option>
                            <option value="F">Tidak</option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">Ekuivalen Rate</label>
                        <input
                            type="text"
                            placeholder="Ekuivalen Rate"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.ekuivalenRate}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    ekuivalenRate: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="w-[220px]">
                            Saldo Minimum Bagi Hasil
                        </label>
                        <input
                            type="text"
                            placeholder="Saldo Minimum Bagi Hasil"
                            className="input input-sm input-bordered w-[220px]"
                            value={dataProduk.saldoMinimumBagiHasil}
                            onChange={(e) =>
                                setDataProduk({
                                    ...dataProduk,
                                    saldoMinimumBagiHasil: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className="flex gap-2 items-center text-white ml-3 mt-3">
                    <Link href="/main/parameters/produk">
                        <button className="py-2 px-4 rounded-xl bg-red-400 flex gap-1 items-center">
                            <MdOutlineCancel />
                            <span>Cancel</span>
                        </button>
                    </Link>
                    <button
                        type="button"
                        onClick={() => updateProduk()}
                        className="py-2 px-4 rounded-xl bg-blue-500 flex gap-1 items-center"
                    >
                        {isLoading ? (
                            <div className="flex justify-center gap-3">
                                <p>Please wait</p>
                                <FiLoader
                                    size={20}
                                    className="animate-spin-slow"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-1">
                                <FiSave />
                                <span>Submit</span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
