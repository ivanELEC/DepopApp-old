import React, { useState, useEffect } from "react";
import { getProducts } from "./Utils/ProductAPI";
import { Product } from "./Interfaces/Product";
import {
  Grid,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import AppProvider from "./Context/AppContext";
import { Header } from "./Components/Header";
import { ImageCard } from "./Components/ImageCard";
import { GenericButton } from "./Components/GenericButton";
import { filterSoldProducts } from "./Utils/ProductProcess";

//styles
const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F2F6",
    color: "#1B1B1B",
  },
  listMenu: {
    padding: 10,
    whiteSpace: "nowrap",
  },
});

//theme to use throughout the app
const theme = createMuiTheme({
  typography: {
    fontFamily: "Segoe UI",
  },
});

export const App: React.FunctionComponent = () => {
  const classes = useStyles();
  //hooks//

  //hook to store product data
  const [productData, setProductData] = useState<Product[]>([
    {
      id: "",
      date: new Date(),
      name: "",
      img: "",
      sold: false,
      price: "",
      brand: "",
      description: "",
      seller: "",
      size: "",
    },
  ]);

  const [filteredProductData, setFilteredProductData] = useState<Product[]>([
    {
      id: "",
      date: new Date(),
      name: "",
      img: "",
      sold: false,
      price: "",
      brand: "",
      description: "",
      seller: "",
      size: "",
    },
  ]);

  //hook to store number of products
  const [productQty, setProductQty] = useState<number>(0);

  //hook to handle state of product filter (true - sold products filtered, false - no products filterd)
  const [productFilter, setProductFilter] = useState<boolean>(false);

  //hook to store loaded state of the page
  const [pageLoaded, setPageLoaded] = useState<Boolean>(false);

  //effects//

  //effect for loading product data from API
  useEffect(() => {
    getProducts().then((result: any) => {
      setProductData(result);
      setFilteredProductData(result);
      setPageLoaded(true);
    });
  }, []);

  //effect for loading quantity of products
  useEffect(() => {
    let result = filteredProductData.length;
    setProductQty(result);
  }, [filteredProductData]);

  //effect for handling filter and unfilter of records
  useEffect(() => {
    if (productFilter == true) {
      let result = filterSoldProducts(productData, false);
      setFilteredProductData(result);
    } else if (productFilter == false) {
      setFilteredProductData(productData);
    }
  }, [productFilter]);

  //effect for checking status of states -- for debug
  useEffect(() => {
    console.log(productData);
    console.log(pageLoaded);
  }, [productData, pageLoaded]);

  //element render
  return pageLoaded ? (
    <AppProvider>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Header/>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={2} />
            <Grid
              item
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              xs={8}
              className={classes.listMenu}
              spacing={0}
            >
              <Grid item xs={2}>
                {productQty} Results
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={2}>
                <div onClick={() => setProductFilter(!productFilter)}>
                  <GenericButton
                    defaultText="Hide Sold Items"
                    clickedText="Unhide Sold Items"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={1} />
            <Grid
              container
              item
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
              xs={10}
              md={8}
            >
              {filteredProductData.map((product) => (
                <React.Fragment>
                  <Grid key={product.id} item xs={12} sm={6} lg={3}>
                    <ImageCard
                      image={product.img}
                      like={false}
                      sold={product.sold}
                      title={product.name}
                      brand={product.brand}
                      size={product.size}
                      price={product.price}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </ThemeProvider>
      </div>
    </AppProvider>
  ) : (
    <div>Page Not Loaded</div>
  );
};

export default App;
