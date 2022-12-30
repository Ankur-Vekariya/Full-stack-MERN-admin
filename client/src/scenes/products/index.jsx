import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContents,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "states/api";

const Products = () => {
  const { data, isloading } = useGetProductsQuery();
  console.log("data=============", data);
  return (
    <Box>
      <Header title={"Products"} subTitle={"See Your Product List"} />
    </Box>
  );
};

export default Products;
