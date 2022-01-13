import React from "react";

import { Chip, Typography } from "@mui/material";
import Menubar from "../../Menubar";
import Staticbar from './Staticbar'
import UserInfo from './UserInfo'
export default function UserDashboard() {
  return (
    <div>
      <Menubar />
      <main style={{padding:'0px',margin:'0px'}}>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "79.5vh",
            backgroundColor: "#f7f8fa",
          }}
        >
          <img
            src="https://hpscans.com/wp-content/uploads/2020/10/loading.gif"
            height="80"
            width="80"
          />
        </div> */}
        <Staticbar/>
        <UserInfo></UserInfo>
      </main>
    </div>
  );
}
