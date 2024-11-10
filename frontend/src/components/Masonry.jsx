import * as React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Masonry } from "@mui/lab";
import { HomeData } from "./HomeContent";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export function ImageMasonry() {
  const data = HomeData();
  return (
    <Container maxWidth="m" style={{ marginTop: "5%" }}>
      <Box sx={{ p: 1, borderLeft: 4, borderColor: "#1c21d1" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }} marginLeft={4}>
          ¿Qué Hacemos?{" "}
        </Typography>
      </Box>
      <Grid
        sx={{ p: 3}}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <Box>
            <Masonry columns={3} spacing={2}>
              {data.map((datas) => (
                <div key={datas.id}>
                  <Label>{datas.description}</Label>
                  <img
                    src={datas.cloud_image_url}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </Masonry>
          </Box>
        </div>
      </Grid>
    </Container>
  );
}
