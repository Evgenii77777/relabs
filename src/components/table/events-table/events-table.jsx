import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const EventsTable = ({ messages }) => (
  <div>
    <h2>События</h2>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell align="right">Событие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages &&
            messages?.map((message, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  {new Date(message.ctime).toLocaleString().slice(0, -3)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {message.event}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);
