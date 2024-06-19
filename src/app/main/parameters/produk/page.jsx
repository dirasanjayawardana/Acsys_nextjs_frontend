"use client";
import { dummyBodyTable, dummyHeaderTable } from "@/assets/dummyData";
import ButtonAddParameter from "@/components/ButtonAddParameter";
import FormSearch from "@/components/FormSearch";
import NotFound from "@/components/NotFound";
import PleaseWait from "@/components/PleaseWait";
import Table from "@/components/Table";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

const Page = () => {
    const [searchInput, setSearchInput] = useState("");
    const [dataProduk, setDataProduk] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        getDataProduk();
    }, [startIndex]);

    const getDataProduk = async () => {
        setDataProduk(null);
        setSearchResult(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk?start=${startIndex}&size=${perPage}`
            );
            setDataProduk(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/produk/getproduk?input=${searchInput}`
            );
            setSearchResult(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2">
                    <FormSearch
                        placeholder="Cari Produk"
                        setState={setSearchInput}
                        handleSubmit={handleSearch}
                    />

                    <ButtonAddParameter
                        link={"/main/parameters/produk/edit/create"}
                    />
                </div>

                {dataProduk && !searchResult && (
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
                            disabled={
                                startIndex + perPage >= dataProduk[0].maxSize
                            }
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

            {dataProduk && (!searchResult || searchInput == "") ? (
                <div className="mt-5">
                    <Table
                        headers={Object.keys(dataProduk[0]).slice(
                            0,
                            Object.keys(dataProduk[0]).length - 1
                        )}
                        data={dataProduk}
                        action={true}
                        link={"/main/parameters/produk/"}
                    />
                </div>
            ) : (
                !(searchResult && searchInput != "") && <PleaseWait />
            )}

            {searchResult && searchInput != "" && searchResult.length !== 0 && (
                <div className="mt-5">
                    <Table
                        headers={Object.keys(searchResult[0]).slice(
                            0,
                            Object.keys(searchResult[0]).length - 1
                        )}
                        data={searchResult}
                        action={true}
                        link={"/main/parameters/produk/"}
                    />
                </div>
            )}

            {searchResult && searchInput != "" && searchResult.length === 0 && (
                <NotFound />
            )}
        </div>
    );
};

export default Page;
