import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export const NewsItem = ({ news }) => {
  const { urlToImage, url, title, description, source } = news;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component={"img"}
          alt={`img of the news ${title}`}
          image={urlToImage}
          height={"250"}
        />
        <CardContent>
          <Typography variant='body1' color='error'>
            {source.name}
          </Typography>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target='_blank'
            variant='button'
            width={"100%"}
            textAlign={"center"}
            sx={{
              textDecoration: "none",
            }}
          >
            Read more
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
