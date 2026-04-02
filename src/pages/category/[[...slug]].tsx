import { useRouter } from "next/router";
import React from "react";

const halamanKategori = () => {
  const { query } = useRouter();

  if (!query.slug) {
    return <div>Loading...</div>;
  }

  const slugParams = Array.isArray(query.slug) ? query.slug : [query.slug];

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>Parameter URL:</p>
      <ul>
        {slugParams.map((param, index) => (
          <li key={index}>{param}</li>
        ))}
      </ul>
    </div>
  );
};

export default halamanKategori;
