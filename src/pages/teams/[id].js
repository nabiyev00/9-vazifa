import DashboardLayout from "@/components/layouts/DashboardLayouts";
import { TeamsData } from "@/constants/teams";
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
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Page() {
  const router = useRouter();
  let id = router.query.id;
  const team = TeamsData.teams.filter((item) => item.id == id)[0];

  return (
    <>
      <DashboardLayout>
        <Head>
          <title>{team && team.name} - Team</title>
        </Head>
        <Box>
          <Card variant="elevation">
            <CardHeader title={`${team && team.name} - Members`} />
            <CardContent>
              <Suspense fallback={<Typography>Loading...</Typography>}>
                <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                  <Table
                    sx={{
                      "&  *": { textAlign: "center" },
                    }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {team &&
                        team.members.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center">{++index}</TableCell>
                            <TableCell align="center">{row}</TableCell>
                            <TableCell align="center">
                              <IconButton color="default">
                                <EditIcon />
                              </IconButton>
                              <IconButton color="error">
                                <DeleteIcon />
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
      </DashboardLayout>
    </>
  );
}
