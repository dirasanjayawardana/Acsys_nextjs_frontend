"use client";
import { dummyBodyTable, dummyHeaderTable } from "@/assets/dummyData";
import FormSearch from "@/components/FormSearch";
import NotFound from "@/components/NotFound";
import PleaseWait from "@/components/PleaseWait";
import Table from "@/components/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [searchInput, setSearchInput] = useState("");
    const [dataCabang, setDataCabang] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        getDataCabang();
    }, [startIndex]);

    const getDataCabang = async () => {
        setDataCabang(null);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/cabang?start=${startIndex}&size=${perPage}`
            );
            setDataCabang(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/cabang/getcabang?input=${searchInput}`
            );
            setSearchResult(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <FormSearch
                    placeholder="Cari Cabang"
                    setState={setSearchInput}
                    handleSubmit={handleSearch}
                />

                {dataCabang && !searchResult && (
                    <div className="w-full flex justify-end items-center gap-3">
                        <button
                            type="button"
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
                            type="button"
                            disabled={
                                startIndex + perPage >= dataCabang[0].maxSize
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

            {dataCabang && (!searchResult || searchInput == "") ? (
                <div className="mt-5">
                    <Table
                        headers={Object.keys(dataCabang[0]).slice(
                            0,
                            Object.keys(dataCabang[0]).length - 1
                        )}
                        data={dataCabang}
                        action={true}
                        link={"/main/parameters/cabang/"}
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
                        link={"/main/parameters/cabang/"}
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
