"use client";
import { dummyBodyTable, dummyHeaderTable } from "@/assets/dummyData";
import FormSearch from "@/components/FormSearch";
import PleaseWait from "@/components/PleaseWait";
import Table from "@/components/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [serachInput, setSearchInput] = useState("");
    const [dataProduk, setDataProduk] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        getDataProduk();
    }, [startIndex]);

    const getDataProduk = async () => {
        setDataProduk(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk?start=${startIndex}&size=${perPage}`
            );
            setDataProduk(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <FormSearch
                    placeholder="Cari Produk"
                    setState={setSearchInput}
                />

                {dataProduk && (
                    <div className="w-full flex justify-end items-center gap-3">
                        <button
                            disabled={currentPage === 1 || startIndex === 0}
                            onClick={() => {
                                setCurrentPage(currentPage - 1);
                                setStartIndex(startIndex - 10);
                            }}
                            className="py-2 px-4 rounded-xl bg-blue-500 text-white"
                        >
                            Prev
                        </button>
                        <h5 className="font-semibold">{currentPage}</h5>
                        <button
                            disabled={(startIndex + perPage) >= dataProduk[0].maxSize}
                            onClick={() => {
                                setCurrentPage(currentPage + 1);
                                setStartIndex(startIndex + 10);
                            }}
                            className="py-2 px-4 rounded-xl bg-blue-500 text-white"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {dataProduk ? (
                <div className="mt-5">
                    <Table
                        headers={Object.keys(dataProduk[0]).slice(0,Object.keys(dataProduk[0]).length - 1)}
                        data={dataProduk}
                        action={true}
                    />
                </div>
            ) : (
                <PleaseWait />
            )}
        </div>
    );
};

export default Page;
