import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "states/api";

const Product = (props) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("props============>>>>>>>", props);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.background[700]}
          gutterBottom
        >
          {props?.data?.category}
        </Typography>
        <Typography variant="h5" component="div">
          {props?.data?.name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.background[700]}>
          ${Number(props?.data?.price).toFixed(2)}
        </Typography>
        <Rating name="read-only" value={props?.data?.rating} readOnly />
        <Typography variant="body2">{props?.data?.description}</Typography>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { data, isloading } = useGetProductsQuery();
  console.log("data=============", JSON.stringify(data));
  return (
    <Box m="1.5rem 2.5rem">
      <Header title={"Products"} subTitle={"See Your Product List"} />
      {data || !isloading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </Box>
      ) : (
        <>loadiing...</>
      )}
    </Box>
  );
};

export default Products;
