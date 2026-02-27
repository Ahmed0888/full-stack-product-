// import { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Paper,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   CircularProgress,
//   Alert,
//   Chip,
//   Grid
// } from "@mui/material";
// import {
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Add as AddIcon,
//   Visibility as VisibilityIcon
// } from "@mui/icons-material";
// import { styled } from "@mui/system";

// // Same animated background
// const Background = styled(Box)({
//   minHeight: "100vh",
//   padding: "20px 0",
//   background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
//   backgroundSize: "400% 400%",
//   animation: "gradientMove 10s ease infinite",
//   "@keyframes gradientMove": {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" }
//   }
// });

// // Same glass card style
// const AnimatedCard = styled(Paper)(({ fullWidth }) => ({
//   padding: fullWidth ? "30px" : "40px",
//   width: "100%",
//   maxWidth: fullWidth ? "1400px" : "500px",
//   borderRadius: "20px",
//   backdropFilter: "blur(15px)",
//   background: "rgba(255,255,255,0.08)",
//   boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
//   animation: "fadeIn 0.8s ease",
//   "@keyframes fadeIn": {
//     from: { opacity: 0, transform: "translateY(30px)" },
//     to: { opacity: 1, transform: "translateY(0)" }
//   }
// }));

// const StyledButton = styled(Button)(({ variant }) => ({
//   borderRadius: "12px",
//   fontWeight: "bold",
//   letterSpacing: 1,
//   transition: "0.3s",
//   ...(variant === "primary" && {
//     background: "linear-gradient(90deg, #38bdf8, #6366f1)",
//     "&:hover": {
//       transform: "scale(1.05)",
//       boxShadow: "0 10px 30px rgba(56,189,248,0.5)"
//     }
//   }),
//   ...(variant === "danger" && {
//     background: "linear-gradient(90deg, #ef4444, #dc2626)",
//     "&:hover": {
//       transform: "scale(1.05)",
//       boxShadow: "0 10px 30px rgba(239,68,68,0.5)"
//     }
//   }),
//   ...(variant === "success" && {
//     background: "linear-gradient(90deg, #10b981, #059669)",
//     "&:hover": {
//       transform: "scale(1.05)",
//       boxShadow: "0 10px 30px rgba(16,185,129,0.5)"
//     }
//   })
// }));

// export default function ProductDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     category: "",
//     status: "active"
//   });
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   // Mock data - replace with your API calls
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       // Replace with your API call
//       const mockProducts = [
//         { id: 1, name: "Premium Laptop", price: 1299, stock: 15, category: "Electronics", status: "active" },
//         { id: 2, name: "Wireless Headphones", price: 199, stock: 42, category: "Electronics", status: "active" },
//         { id: 3, name: "Designer Watch", price: 299, stock: 8, category: "Fashion", status: "out-of-stock" },
//         { id: 4, name: "Coffee Maker", price: 89, stock: 23, category: "Home", status: "active" }
//       ];
//       setProducts(mockProducts);
//     } catch (err) {
//       setError("Failed to fetch products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (product) => {
//     setSelectedProduct(product);
//     setFormData({
//       name: product.name,
//       price: product.price,
//       stock: product.stock,
//       category: product.category,
//       status: product.status
//     });
//     setOpenEdit(true);
//   };

//   const handleDelete = (product) => {
//     setSelectedProduct(product);
//     setOpenDelete(true);
//   };

//   const handleSubmitEdit = async () => {
//     try {
//       // Replace with your API call
//       setProducts(products.map(p => 
//         p.id === selectedProduct.id 
//           ? { ...p, ...formData }
//           : p
//       ));
//       setOpenEdit(false);
//       setSuccess("Product updated successfully!");
//       setTimeout(() => setSuccess(false), 3000);
//     } catch (err) {
//       setError("Failed to update product");
//     }
//   };

//   const handleDeleteConfirm = async () => {
//     try {
//       // Replace with your API call
//       setProducts(products.filter(p => p.id !== selectedProduct.id));
//       setOpenDelete(false);
//       setSuccess("Product deleted successfully!");
//       setTimeout(() => setSuccess(false), 3000);
//     } catch (err) {
//       setError("Failed to delete product");
//     }
//   };

//   const handleAddProduct = () => {
//     setFormData({ name: "", price: "", stock: "", category: "", status: "active" });
//     setSelectedProduct(null);
//     setOpenEdit(true);
//   };

//   if (loading) {
//     return (
//       <Background>
//         <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
//           <CircularProgress size={60} sx={{ color: "#38bdf8" }} />
//         </Container>
//       </Background>
//     );
//   }

//   return (
//     <Background>
//       <Container sx={{ py: 4 }}>
//         <AnimatedCard fullWidth>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 color: "#38bdf8",
//                 letterSpacing: 1
//               }}
//             >
//               Product Dashboard
//             </Typography>
//             <StyledButton 
//               variant="primary" 
//               startIcon={<AddIcon />}
//               onClick={handleAddProduct}
//             >
//               Add Product
//             </StyledButton>
//           </Box>

//           {success && (
//             <Alert severity="success" sx={{ mb: 3 }}>
//               {success}
//             </Alert>
//           )}
//           {error && (
//             <Alert severity="error" sx={{ mb: 3 }}>
//               {error}
//             </Alert>
//           )}

//           <TableContainer sx={{ borderRadius: "12px", overflow: "hidden" }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ background: "rgba(56, 189, 248, 0.2)" }}>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>Product</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>Stock</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
//                   <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {products.map((product) => (
//                   <TableRow key={product.id} hover sx={{ "&:hover": { background: "rgba(255,255,255,0.05)" } }}>
//                     <TableCell sx={{ color: "white" }}>{product.name}</TableCell>
//                     <TableCell sx={{ color: "#38bdf8", fontWeight: "bold" }}>${product.price}</TableCell>
//                     <TableCell sx={{ color: "white" }}>{product.stock}</TableCell>
//                     <TableCell sx={{ color: "white" }}>{product.category}</TableCell>
//                     <TableCell>
//                       <Chip
//                         label={product.status.replace('-', ' ').toUpperCase()}
//                         color={product.status === "active" ? "success" : "error"}
//                         sx={{ color: "white", fontWeight: "bold" }}
//                       />
//                     </TableCell>
//                     <TableCell align="right">
//                       <IconButton onClick={() => handleEdit(product)} sx={{ color: "#38bdf8" }}>
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton onClick={() => handleDelete(product)} sx={{ color: "#ef4444" }}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </AnimatedCard>

//         {/* Edit/Add Product Dialog */}
//         <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="sm" fullWidth>
//           <AnimatedCard sx={{ m: 2, mx: "auto" }}>
//             <DialogTitle sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
//               {selectedProduct ? "Edit Product" : "Add New Product"}
//             </DialogTitle>
//             <DialogContent>
//               <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//                 <TextField
//                   label="Product Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   fullWidth
//                   sx={{
//                     input: { color: "white" },
//                     label: { color: "#94a3b8" },
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#334155" },
//                       "&:hover fieldset": { borderColor: "#38bdf8" },
//                       "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
//                     }
//                   }}
//                 />
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <TextField
//                       label="Price"
//                       name="price"
//                       type="number"
//                       value={formData.price}
//                       onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//                       fullWidth
//                       sx={{
//                         input: { color: "white" },
//                         label: { color: "#94a3b8" },
//                         "& .MuiOutlinedInput-root": {
//                           "& fieldset": { borderColor: "#334155" },
//                           "&:hover fieldset": { borderColor: "#38bdf8" },
//                           "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
//                         }
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={6}>
//                     <TextField
//                       label="Stock"
//                       name="stock"
//                       type="number"
//                       value={formData.stock}
//                       onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
//                       fullWidth
//                       sx={{
//                         input: { color: "white" },
//                         label: { color: "#94a3b8" },
//                         "& .MuiOutlinedInput-root": {
//                           "& fieldset": { borderColor: "#334155" },
//                           "&:hover fieldset": { borderColor: "#38bdf8" },
//                           "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
//                         }
//                       }}
//                     />
//                   </Grid>
//                 </Grid>
//                 <TextField
//                   label="Category"
//                   name="category"
//                   value={formData.category}
//                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   fullWidth
//                   sx={{
//                     input: { color: "white" },
//                     label: { color: "#94a3b8" },
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#334155" },
//                       "&:hover fieldset": { borderColor: "#38bdf8" },
//                       "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
//                     }
//                   }}
//                 />
//               </Box>
//             </DialogContent>
//             <DialogActions sx={{ justifyContent: "center", gap: 2, p: 3 }}>
//               <StyledButton variant="success" onClick={handleSubmitEdit}>
//                 Save Changes
//               </StyledButton>
//               <StyledButton variant="danger" onClick={() => setOpenEdit(false)}>
//                 Cancel
//               </StyledButton>
//             </DialogActions>
//           </AnimatedCard>
//         </Dialog>

//         {/* Delete Confirmation Dialog */}
//         <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
//           <AnimatedCard sx={{ p: 4, m: 2, mx: "auto", maxWidth: 400 }}>
//             <Typography sx={{ color: "white", textAlign: "center", mb: 3 }}>
//               Delete "{selectedProduct?.name}"?
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
//               <StyledButton variant="danger" onClick={handleDeleteConfirm}>
//                 Delete
//               </StyledButton>
//               <StyledButton variant="primary" onClick={() => setOpenDelete(false)}>
//                 Cancel
//               </StyledButton>
//             </Box>
//           </AnimatedCard>
//         </Dialog>
//       </Container>
//     </Background>
//   );
// }



import { useState, useEffect } from "react";
import { getProducts } from "../services/Product"; // Your service
import {
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
  Chip,
  Grid
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon
} from "@mui/icons-material";
import { styled } from "@mui/system";

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

const AnimatedCard = styled(Paper)(({ fullWidth }) => ({
  padding: fullWidth ? "30px" : "40px",
  width: "100%",
  maxWidth: fullWidth ? "1400px" : "500px",
  borderRadius: "20px",
  backdropFilter: "blur(15px)",
  background: "rgba(255,255,255,0.08)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  animation: "fadeIn 0.8s ease",
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  }
}));

const StyledButton = styled(Button)(({ variant }) => ({
  borderRadius: "12px",
  fontWeight: "bold",
  letterSpacing: 1,
  transition: "0.3s",
  ...(variant === "primary" && {
    background: "linear-gradient(90deg, #38bdf8, #6366f1)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 30px rgba(56,189,248,0.5)"
    }
  }),
  ...(variant === "danger" && {
    background: "linear-gradient(90deg, #ef4444, #dc2626)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 30px rgba(239,68,68,0.5)"
    }
  }),
  ...(variant === "success" && {
    background: "linear-gradient(90deg, #10b981, #059669)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 30px rgba(16,185,129,0.5)"
    }
  })
}));

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    discountPrice: "",
    description: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ INTEGRATED WITH YOUR getProducts SERVICE
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts(); // Your actual API service
      console.log("Dashboard Products:", response);
      setProducts(response);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name || "",
      brand: product.brand || "",
      price: product.price || "",
      discountPrice: product.discountPrice || "",
      description: product.description || ""
    });
    setOpenEdit(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setOpenDelete(true);
  };

  // ✅ UPDATE WITH YOUR API ENDPOINT
  const handleSubmitEdit = async () => {
    try {
      if (selectedProduct?._id) {
        // UPDATE existing product - replace with your update API
        // await updateProduct(selectedProduct._id, formData);
        console.log("Update product:", selectedProduct._id, formData);
        
        setProducts(products.map(p => 
          p._id === selectedProduct._id 
            ? { ...p, ...formData }
            : p
        ));
      } else {
        // ADD new product - replace with your create API
        // const newProduct = await createProduct(formData);
        // setProducts([...products, newProduct]);
        const newProduct = { _id: Date.now().toString(), ...formData };
        setProducts([...products, newProduct]);
      }
      
      setOpenEdit(false);
      setSuccess(selectedProduct ? "Product updated successfully!" : "Product added successfully!");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Failed to save product");
      console.error(err);
    }
  };

  // ✅ UPDATE WITH YOUR API ENDPOINT
  const handleDeleteConfirm = async () => {
    try {
      // await deleteProduct(selectedProduct._id);
      console.log("Delete product:", selectedProduct._id);
      setProducts(products.filter(p => p._id !== selectedProduct._id));
      setOpenDelete(false);
      setSuccess("Product deleted successfully!");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Failed to delete product");
      console.error(err);
    }
  };

  const handleAddProduct = () => {
    setFormData({ name: "", brand: "", price: "", discountPrice: "", description: "" });
    setSelectedProduct(null);
    setOpenEdit(true);
  };

  if (loading) {
    return (
      <Background>
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <CircularProgress size={60} sx={{ color: "#38bdf8" }} />
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Container sx={{ py: 4 }}>
        <AnimatedCard fullWidth>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#38bdf8",
                letterSpacing: 1
              }}
            >
              Product Dashboard
            </Typography>
            <StyledButton 
              variant="primary" 
              startIcon={<AddIcon />}
              onClick={handleAddProduct}
            >
              Add Product
            </StyledButton>
          </Box>

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <TableContainer sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "rgba(56, 189, 248, 0.2)" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Brand</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ color: "#38bdf8", fontWeight: "bold" }}>Discount Price</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id} hover sx={{ "&:hover": { background: "rgba(255,255,255,0.05)" } }}>
                    <TableCell sx={{ color: "white" }}>{product.name}</TableCell>
                    <TableCell sx={{ color: "#10b981", fontWeight: "bold" }}>{product.brand}</TableCell>
                    <TableCell sx={{ color: "#ef4444", fontWeight: "bold" }}>${product.price}</TableCell>
                    <TableCell sx={{ color: "#10b981", fontWeight: "bold" }}>${product.discountPrice}</TableCell>
                    <TableCell sx={{ color: "#94a3b8", maxWidth: 200 }}>
                      <Typography variant="body2" noWrap title={product.description}>
                        {product.description}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleEdit(product)} sx={{ color: "#38bdf8" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(product)} sx={{ color: "#ef4444" }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AnimatedCard>

        {/* ✅ UPDATED FORM FOR YOUR DATA STRUCTURE */}
        <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="md" fullWidth>
          <AnimatedCard sx={{ m: 2, mx: "auto" }}>
            <DialogTitle sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
              {selectedProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <TextField
                  label="Product Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  fullWidth
                  sx={{
                    input: { color: "white" },
                    label: { color: "#94a3b8" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#334155" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                    }
                  }}
                />
                
                <TextField
                  label="Brand"
                  name="brand"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  fullWidth
                  sx={{
                    input: { color: "white" },
                    label: { color: "#94a3b8" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#334155" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                    }
                  }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Price"
                      name="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      fullWidth
                      sx={{
                        input: { color: "white" },
                        label: { color: "#94a3b8" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#334155" },
                          "&:hover fieldset": { borderColor: "#38bdf8" },
                          "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Discount Price"
                      name="discountPrice"
                      type="number"
                      step="0.01"
                      value={formData.discountPrice}
                      onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                      fullWidth
                      sx={{
                        input: { color: "white" },
                        label: { color: "#94a3b8" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#334155" },
                          "&:hover fieldset": { borderColor: "#38bdf8" },
                          "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{
                    input: { color: "white" },
                    label: { color: "#94a3b8" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#334155" },
                      "&:hover fieldset": { borderColor: "#38bdf8" },
                      "&.Mui-focused fieldset": { borderColor: "#38bdf8" }
                    }
                  }}
                />
              </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", gap: 2, p: 3 }}>
              <StyledButton variant="success" onClick={handleSubmitEdit}>
                {selectedProduct ? "Update Product" : "Add Product"}
              </StyledButton>
              <StyledButton variant="danger" onClick={() => setOpenEdit(false)}>
                Cancel
              </StyledButton>
            </DialogActions>
          </AnimatedCard>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
          <AnimatedCard sx={{ p: 4, m: 2, mx: "auto", maxWidth: 400 }}>
            <Typography sx={{ color: "white", textAlign: "center", mb: 3 }}>
              Delete "{selectedProduct?.name}"?
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <StyledButton variant="danger" onClick={handleDeleteConfirm}>
                Delete
              </StyledButton>
              <StyledButton variant="primary" onClick={() => setOpenDelete(false)}>
                Cancel
              </StyledButton>
            </Box>
          </AnimatedCard>
        </Dialog>
      </Container>
    </Background>
  );
}
