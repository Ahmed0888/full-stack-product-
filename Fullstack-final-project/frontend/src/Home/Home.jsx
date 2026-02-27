// import { useState, useEffect } from "react"
// import { getProducts } from "../services/Product"
// import { data } from "react-router-dom"


// function Home() {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getProducts();

//         console.log(response)


//         setProducts((prevProducts) => [
//           ...prevProducts,
//           ...response
//         ])
//         console.log(products, "line20")
//       } catch (err) {
//         console.log(`Products not Found ${err.message}`)
//       }
//     }
//     fetchData()
//   }, [])
//   return (
//     <div>
//       {
//         products.map((data, key) => (
//           <div key={data._id}>
//             <ul>
//               <li>Name :{data.name}</li>
//               <li>Description :{data.description}</li>
//               <li>Brand :{data.brand}</li>
//               <li>Price :{data.price}</li>
//               <li>Discount Price :{data.discountPrice}</li>
//             </ul>
//           </div>
//         ))

//       }
//     </div>
//   )
// }

// export default Home


import { useState, useEffect } from "react";
import { getProducts } from "../services/Product";
import {
  Box,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid,
  styled
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Background = styled(Box)({
  minHeight: "100vh",
  padding: "20px 0",
  background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
  backgroundSize: "400% 400%",
  animation: "gradientMove 10s ease infinite",
  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" }
  }
});

const ProductCard = styled(Card)({
  backdropFilter: "blur(15px)",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(56,189,248,0.3)"
  }
});

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        console.log(response);
        setProducts(response);
      } catch (err) {
        console.log(`Products not Found ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Background>
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
          <div style={{ color: "#38bdf8", fontSize: "24px" }}>Loading Products...</div>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#38bdf8",
            letterSpacing: 1,
            mb: 6
          }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={data._id}>
              <ProductCard sx={{ height: "100%" }}>
                <CardContent sx={{ color: "white", p: 3 }}>
                  <Chip 
                    label={data.brand} 
                    sx={{ 
                      mb: 2, 
                      background: "linear-gradient(90deg, #38bdf8, #6366f1)",
                      color: "white",
                      fontWeight: "bold"
                    }} 
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {data.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8", mb: 2 }}>
                    {data.description}
                  </Typography>
                  
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Typography variant="h6" sx={{ color: "#ef4444", fontWeight: "bold", textDecoration: "line-through" }}>
                      ${data.price}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#10b981", fontWeight: "bold" }}>
                      ${data.discountPrice}
                    </Typography>
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "linear-gradient(90deg, #38bdf8, #6366f1)",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                    startIcon={<ShoppingCart />}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Background>
  );
}

export default Home;
