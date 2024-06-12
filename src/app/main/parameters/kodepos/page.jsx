"use client";
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
  const [serachInputCategory, setSearchInputCategory] = useState("kodepos");
  const [dataKodepos, setDataKodepos] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    getDataKodepos();
  }, [startIndex]);

  const getDataKodepos = async () => {
    setDataKodepos(null);
    setSearchResult(null);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/kodepos/getall?limit=${perPage}&offset=${startIndex}`
      );
      setDataKodepos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ACSYS_URL_SERVER}/kodepos/getby`,
        {
          kodePos: serachInputCategory === "kodepos" ? searchInput : "",
          desa: serachInputCategory === "desa" ? searchInput : "",
          kecamatan: serachInputCategory === "kecamatan" ? searchInput : "",
          kotaKabupaten:
            serachInputCategory === "kotaKabupaten" ? searchInput : "",
          provinsi: serachInputCategory === "provinsi" ? searchInput : "",
        }
      );
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center w-full gap-2">
          <select
            className="select select-sm select-bordered w-full max-w-44 h-10 rounded-xl"
            onChange={(e) => setSearchInputCategory(e.target.value)}
          >
            <option disabled>Cari Berdasarkan</option>
            <option value="kodepos">Kodepos</option>
            <option value="desa">Desa</option>
            <option value="kecamatan">Kecamatan</option>
            <option value="kotaKabupaten">Kota/Kabupaten</option>
            <option value="provinsi">Provinsi</option>
          </select>

          <FormSearch
            placeholder="Cari Kode Pos"
            setState={setSearchInput}
            handleSubmit={handleSearch}
          />

          <Link href={'/main/parameters/kodepos/edit/create'}>
            <button className="flex items-center gap-2 bg-blue-500 py-2 px-3 rounded-xl text-white">
              <FiPlus size={20} /> <p>Add</p>
            </button>
          </Link>
        </div>

        {dataKodepos && (
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

      {dataKodepos && (!searchResult || searchInput == "") ? (
        <div className="mt-5">
          <Table
            headers={Object.keys(dataKodepos[0]).slice(1)}
            data={dataKodepos}
            action={true}
            link={"/main/parameters/kodepos/"}
          />
        </div>
      ) : (
        !(searchResult && searchInput != "") && <PleaseWait />
      )}

      {searchResult && searchInput != "" && searchResult.length !== 0 && (
        <div className="mt-5">
          <Table
            headers={Object.keys(searchResult[0]).slice(1)}
            data={searchResult}
            action={true}
            link={"#"}
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
