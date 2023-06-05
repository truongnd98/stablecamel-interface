import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, SxProps, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useAnalyticState } from "../../../stores/analytic/hooks";
import { convertCurrencyUSD } from "../../../utils/convertCurrency";
import { DataDetail } from "../type";

const header: SxProps = {
  fontSize: 18,
  fontWeight: 600,
  height: 80,
  "@media (max-width: 1280px)": {
    fontSize: 16,
  },
};

const cell: SxProps = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "12px",
  gap: "8px",
  img: {
    width: 20,
    height: 20,
  },
};

const row: SxProps = {
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  width: "100%",
  height: 50,
  ":hover": {
    backgroundColor: "#1c273014 !important",
  },
};

const body: SxProps = {
  "&:last-child ": {
    height: 62,
    paddingBottom: "12px",
  },
};

const skeleton: SxProps = {
  width: "100%",
  height: 50,
};

const handleColor = (value: number) => {
  if (value > 0)
    return {
      main: "#2e8c57",
      background: "#dcfce7",
    };
  else if (value < 0) return { main: "#be3832", background: "#fde2e1" };
  else return { main: "#676b74", background: "#f3f4f6" };
};

const DataGrid = () => {
  const { dataDetail } = useAnalyticState();
  return (
    <TableContainer
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...header, paddingLeft: "32px" }}>
              Stablecoin
            </TableCell>
            <TableCell sx={header}>TVL</TableCell>
            <TableCell sx={header}>7D Change</TableCell>
            <TableCell sx={header}>30D Change</TableCell>
            <TableCell sx={header}>Supply</TableCell>
            <TableCell sx={header}>TVL/Supply</TableCell>
          </TableRow>
        </TableHead>

        {dataDetail.length > 0 ? (
          <TableBody sx={body}>
            {dataDetail.map((token: DataDetail) => (
              <TableRow key={token.name} sx={row} hover>
                <TableCell
                // component='th'
                // scope='row'
                >
                  <Box sx={cell}>
                    <img
                      src={token.icon}
                      alt={`Stable Camel - Stablecoin TVL ${token?.name} icon`}
                    />
                    {token.name} ({token.symbol})
                  </Box>
                </TableCell>
                <TableCell>{convertCurrencyUSD(token.tvl)}</TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    color={handleColor(token.change_7d).main}
                    sx={{
                      width: "fit-content",
                      padding: "0 8px",
                      backgroundColor: handleColor(token.change_7d).background,
                    }}
                  >
                    {token.change_7d > 0 ? "+" : ""}
                    {token.change_7d.toFixed(2)}%
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    color={handleColor(token.change_30d).main}
                    sx={{
                      width: "fit-content",
                      padding: "0 8px",
                      backgroundColor: handleColor(token.change_30d).background,
                    }}
                  >
                    {token.change_30d > 0 ? "+" : ""}
                    {token.change_30d.toFixed(2)}%
                  </Typography>
                </TableCell>
                <TableCell>{convertCurrencyUSD(token.supply)}</TableCell>
                <TableCell>{token.tvl_supply.toFixed(4)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <Box
            sx={{
              width: "100%",
              padding: "0 20px",
            }}
          >
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
          </Box>
        )}
        <Box sx={{ height: 12 }} />
      </Table>
    </TableContainer>
  );
};
export default DataGrid;
