import React, { Suspense } from "react";
import DashboardLayouts from "@/components/layouts";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TeamsData } from "@/constants/teams";
import InfoIcon from "@mui/icons-material/Info";

const Teams = () => {
  const router = useRouter();
  return (
    <DashboardLayouts>
      <Head>
        <title>Teams</title>
      </Head>
      <Box>
        <Card variant="elevation">
          <CardHeader title="Teams" />
          <CardContent>
            <Suspense fallback={<Typography>Loading...</Typography>}>
              <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                <Table
                  sx={{ width: "100%", "&  *": { textAlign: "center" } }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Id</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Members</TableCell>
                      <TableCell align="center">Info</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {TeamsData.teams.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">
                          {row.members.length}
                        </TableCell>

                        <TableCell align="center">
                          <IconButton
                            color="info"
                            onClick={() => router.push(`/teams/` + row.id)}
                          >
                            <InfoIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Suspense>
          </CardContent>
        </Card>
      </Box>
    </DashboardLayouts>
  );
};

export default Teams;
