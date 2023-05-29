import { Grid, Typography } from "@mui/material";
import useNews from "../hooks/useNews";
import { NewsItem } from "./NewsItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListNews = () => {
  const { news, page, totalNews, handleChangePage } = useNews();

  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant='h3'
        component={"h2"}
      >
        Latest News
      </Typography>
      <Grid container spacing={2}>
        {news.map((news) => (
          <NewsItem key={news.url} news={news} />
        ))}
      </Grid>
      <Stack
        sx={{
          marginTop: 5,
        }}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems='center'
      >
        <Pagination
          count={totalPages}
          color='primary'
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default ListNews;
