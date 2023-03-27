import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { url } from "inspector";

export default function MediaCard() {
  // let response: never[] = [];
  // const renderList = (data: any) => {
  //   const results = data.map((data: { url: string | undefined }) => {
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardMedia sx={{ height: 140 }} image={data.url} title="green iguana" />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="div">
  //           Lizard
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           Lizards are a widespread group of squamate reptiles, with over 6,000
  //           species, ranging across all continents except Antarctica
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button size="small">Share</Button>
  //         <Button size="small">Learn More</Button>
  //       </CardActions>
  //     </Card>;
  //   });
  //   return results;
  // };


  const fetchit = async (query: string) => {
    if (true) {
      const _MY_KEY = "kTMbZAITpPus5hBdq9q9rx8jK1tghIob";
      const url = "https://api.giphy.com/v1/gifs/search";
      const response = await fetch(
        url +
          `?api_key=${_MY_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=e`
      );
      const data = await response.json();
      apiDataSet(data);
    }
  };

  const handleChange = (e: any) => {
    fetchit(e.target.value)
  }

  const [queryString, setQueryString] = useState(false);
  const [apiData, apiDataSet] = useState();
  useEffect(() => {
    const query = "dog"
    fetchit(query);  
  }, []);

  return ([



    <Grid container spacing={2}>,
 
    <input type="text" onChange={handleChange} value={queryString}/>, 
    apiData &&
    apiData?.data.map((item: { url: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
      <Grid xs={8}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={item.url} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
    )),
    </Grid>
  ]
  );

  // <Card sx={{ maxWidth: 345 }}>
  //     <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         Lizard
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //         species, ranging across all continents except Antarctica
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Share</Button>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </Card>
  // return(
  // {response && response.data.map.forEach((data: any) => {

  // }))
}
