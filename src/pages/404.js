import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import page404 from "../../public/Images/404.jpg";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - Nout found </title>
      </Head>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button variant="contained" onClick={() => router.push("/")}>
                Back Home
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img src={page404.src} alt="" width={600} height={550} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
