import * as React from "react";

import Title from "../Components/Title";
import { Typography } from "@mui/material";

const dbo_user = JSON.parse(localStorage.getItem("dbo_user"));

export default function Welcome() {
  return (
    <React.Fragment>
      <Title>Selamat Datang Di Aplikasi Peminjaman Buku</Title>
      <Typography align="center" variant="">
        <h3>{dbo_user.username}</h3>
      </Typography>
    </React.Fragment>
  );
}