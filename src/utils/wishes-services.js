import { useEffect, useState } from "react";

const api_uri = `https://rest-ery-sony.nixmedia.web.id`;

export const useWishes = () => {
  const [doaList, setDoaList] = useState([]);

  const getListDoa = async () => {
    let data = await fetch(`${api_uri}/api/doa-ucapan`).then((res) =>
      res.json()
    );
    setDoaList(data.result);
  };

  useEffect(() => {
    getListDoa();
  }, []);

  return { doaList, getListDoa };
};

export const useFormWishes = () => {
  const [dataForm, setDataForm] = useState({
    nama: "",
    content: "",
  });

  const setForm = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const saveForm = async () => {
    let saveData = await fetch(`${api_uri}/api/doa-ucapan`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    }).then((res) => res.json());

    if (saveData.result) {
      alert("Doa atau Ucapan berhasil di kirim!");
      window.location.reload();
    } else {
      alert("Gagal mengirimkan doa dan ucapan kamu");
    }
  };

  return { setForm, saveForm };
};
