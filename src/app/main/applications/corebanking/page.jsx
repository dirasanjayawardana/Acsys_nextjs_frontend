import Table from "@/components/Table";
import React from "react";

const page = () => {
  const headers = ["Kode Produk", "Nama Produk", "Status", "Tgl Diperbarui"];
  const data = [
    {
      "Kode Produk": "401",
      "Nama Produk": "Tahapan Rencana IB 1 Tahun",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
    {
      "Kode Produk": "402",
      "Nama Produk": "Tahapan Rencana IB 2 Tahun",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
    {
      "Kode Produk": "405",
      "Nama Produk": "Tahapan Rencana IB 5 Tahun",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
    {
      "Kode Produk": "410",
      "Nama Produk": "Tahapan Rencana IB 10 Tahun",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
    {
      "Kode Produk": "411",
      "Nama Produk": "TRIB Tanpa Asuransi 1 Th",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
    {
      "Kode Produk": "412",
      "Nama Produk": "TRIB Tanpa Asuransi 2 Th",
      Status: "Aktif",
      "Tgl Diperbarui": "14-03-2015 10:03:42",
      link: "/main/applications/corebanking/trib"
    },
  ];

  return (
    <div>
      <div className="w-full mt-5">
        <Table headers={headers} data={data} action={false} />
      </div>
    </div>
  );
};

export default page;
