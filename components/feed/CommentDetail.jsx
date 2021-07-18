import React from "react";
import Avatar from "../common/Avatar";
import { Divider, Grid } from "@material-ui/core";

const CommentDetail = ({ data }) => {
  const { username, comment } = data;
  return (
    <>
      <Grid container wrap="nowrap" spacing={2} justify="flex-start">
        <Grid item>
          <Avatar size={1} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{username}</h4>
          <p style={{ textAlign: "left" }}>{comment}</p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </>
  );
};

export default CommentDetail;
