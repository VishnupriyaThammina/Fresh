import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SearchAppBar from "./SearchAppBar";

const Nav = () => {
  return (
    <>
      <Grid container display="flex" style={{  position: 'sticky',
    top: 0,
    zIndex: 1000, 
    backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', alignItems: "center", justifyContent: "center", padding: "2vh" }}>
        <Grid container item style={{ borderRadius: "15px", alignItems: "center", justifyContent: "center" }}>
          <Grid item style={{ padding: "2vh" }}><Typography variant="bold">Home</Typography></Grid>
          <Grid item style={{ padding: "2vh" }}><Typography variant="bold">Explore</Typography></Grid>
          <Grid container display="flex" style={{ justifyContent: "center", alignItems: "center", width: "60%", borderRadius: "50px" }}>
            {/* Replace the existing TextField with the SearchAppBar */}
            <SearchAppBar />
          </Grid>
          <Grid item style={{ padding: "2vh" }}><Typography variant="bold">Cart</Typography></Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Nav;
