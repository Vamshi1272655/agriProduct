import { useDataDetails } from "./react-queary";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { filter } from "lodash";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Dashboard = () => {
  const { data, isLoading } = useDataDetails();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [page, setPage] = useState(1);
  const handlePagination = (event, value) => {
    setPage(value);
  };
  const cropDetails = data
    ? filter(data, (d) =>
        d.cropName.toLowerCase().includes(searchData.toLowerCase())
      )
    : [];
  const startIndex = (page - 1) * 12;
  const endIndex = startIndex + 12;
  const paginatedData = data ? cropDetails.slice(startIndex, endIndex) : [];
  const PaginationCount = data ? Math.ceil(cropDetails.length / 10) - 1 : 1;

  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  const handlerSearch = (e) => {
    setSearchData(e);
    setPage(1);
  };
  return (
    <div>
      <TextField
        id="SearchItems"
        label="Search Items"
        variant="standard"
        sx={{ margin: "20px", width: "350px" }}
        onChange={(e) => handlerSearch(e.target.value)}
      />
      {isLoading ? (
        <p>Data Loading....</p>
      ) : (
        <Grid container spacing={2}>
          {paginatedData.map((d) => (
            <Grid key={d.Id} item xs={4}>
              <Card sx={{ margin: "20px" }} onClick={() => handleOpen(d.image)}>
                <CardMedia
                  sx={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    objectFit: "cover",
                    maxWidth: `${200}px`,
                    maxHeight: `${200}px`,
                    margin: "auto",
                    marginTop: "20px",
                  }}
                  image={d.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {d.cropName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            height: "100%",
            width: "100%",
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Large Version"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          )}
          <div>
            <Button
              variant="text"
              size="large"
              sx={{ marginLeft: "200px", marginTop: "20px" }}
              onClick={(e) => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </Card>
      </Modal>
      <Stack spacing={2} sx={{ display: "flex", alignItems: "center" }}>
        <Pagination
          count={PaginationCount}
          shape="rounded"
          page={page}
          onChange={handlePagination}
        />
      </Stack>
    </div>
  );
};
