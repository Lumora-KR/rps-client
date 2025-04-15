// // pages/AddCarRental/AddCarRental.jsx
// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Paper,
//   Divider,
//   CircularProgress,
//   IconButton,
// } from "@mui/material";
// import {
//   CloudUpload as CloudUploadIcon,
//   Delete as DeleteIcon,
// } from "@mui/icons-material";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "./AddCarRental.css";

// const AddCarRental = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     carType: "",
//     price: "",
//     priceUnit: "per day",
//     seating: "",
//     ac: true,
//     transmission: "",
//     fuel: "",
//     description: "",
//     features: [],
//     specifications: {
//       engine: "",
//       mileage: "",
//       transmission: "",
//       fuelType: "",
//       seatingCapacity: "",
//       bootSpace: "",
//       length: "",
//       width: "",
//       height: "",
//     },
//     providerName: "",
//     providerEmail: "",
//     providerPhone: "",
//   });

//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   const carTypes = [
//     { value: "sedan", label: "Sedan" },
//     { value: "suv", label: "SUV" },
//     { value: "hatchback", label: "Hatchback" },
//     { value: "tempo", label: "Tempo Traveller" },
//     { value: "luxury", label: "Luxury Car" },
//   ];

//   const transmissionTypes = [
//     { value: "Manual", label: "Manual" },
//     { value: "Automatic", label: "Automatic" },
//     { value: "Semi-Automatic", label: "Semi-Automatic" },
//   ];

//   const fuelTypes = [
//     { value: "Petrol", label: "Petrol" },
//     { value: "Diesel", label: "Diesel" },
//     { value: "Electric", label: "Electric" },
//     { value: "Hybrid", label: "Hybrid" },
//     { value: "CNG", label: "CNG" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSpecificationChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       specifications: {
//         ...prevData.specifications,
//         [name]: value,
//       },
//     }));
//   };

//   const handleFeatureChange = (e) => {
//     const { value } = e.target;
//     const features = value
//       .split("\n")
//       .filter((feature) => feature.trim() !== "");
//     setFormData((prevData) => ({
//       ...prevData,
//       features,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);

//     // Validate file types
//     const validFiles = files.filter((file) => {
//       const fileType = file.type.split("/")[1].toLowerCase();
//       return ["jpeg", "jpg", "png", "gif"].includes(fileType);
//     });

//     if (validFiles.length !== files.length) {
//       toast.error("Only image files (JPEG, JPG, PNG, GIF) are allowed!", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     }

//     // Update selected files
//     setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);

//     // Create preview URLs
//     const newPreviewImages = validFiles.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));

//     setPreviewImages((prevPreviews) => [...prevPreviews, ...newPreviewImages]);
//   };

//   const removeFile = (index) => {
//     // Release object URL to prevent memory leaks
//     URL.revokeObjectURL(previewImages[index].preview);

//     // Remove file from arrays
//     setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//     setPreviewImages((prevPreviews) =>
//       prevPreviews.filter((_, i) => i !== index)
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (selectedFiles.length === 0) {
//       toast.error("Please upload at least one image of the car", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       // Create FormData object
//       const formDataToSend = new FormData();

//       // Add text fields
//       formDataToSend.append("title", formData.title);
//       formDataToSend.append("carType", formData.carType);
//       formDataToSend.append("price", formData.price);
//       formDataToSend.append("priceUnit", formData.priceUnit);
//       formDataToSend.append("seating", formData.seating);
//       formDataToSend.append("ac", formData.ac);
//       formDataToSend.append("transmission", formData.transmission);
//       formDataToSend.append("fuel", formData.fuel);
//       formDataToSend.append("description", formData.description);
//       formDataToSend.append("features", JSON.stringify(formData.features));
//       formDataToSend.append(
//         "specifications",
//         JSON.stringify(formData.specifications)
//       );
//       formDataToSend.append("providerName", formData.providerName);
//       formDataToSend.append("providerEmail", formData.providerEmail);
//       formDataToSend.append("providerPhone", formData.providerPhone);

//       // Add files
//       selectedFiles.forEach((file) => {
//         formDataToSend.append("images", file);
//       });

//       const response = await axios.post(
//         "http://localhost:5000/api/car-rentals",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Your car rental has been added successfully!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });

//         // Reset form data
//         setFormData({
//           title: "",
//           carType: "",
//           price: "",
//           priceUnit: "per day",
//           seating: "",
//           ac: true,
//           transmission: "",
//           fuel: "",
//           description: "",
//           features: [],
//           specifications: {
//             engine: "",
//             mileage: "",
//             transmission: "",
//             fuelType: "",
//             seatingCapacity: "",
//             bootSpace: "",
//             length: "",
//             width: "",
//             height: "",
//           },
//           providerName: "",
//           providerEmail: "",
//           providerPhone: "",
//         });

//         // Clear file selections
//         setSelectedFiles([]);

//         // Release object URLs to prevent memory leaks
//         previewImages.forEach((item) => URL.revokeObjectURL(item.preview));
//         setPreviewImages([]);
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           "Failed to add car rental. Please try again later.",
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         }
//       );

//       console.error("Error adding car rental:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-car-rental-page">
//       {/* Hero Banner */}
//       <div className="page-hero-banner">
//         <div className="page-hero-overlay"></div>
//         <Container>
//           <div className="page-hero-content">
//             <div className="breadcrumb">
//               <span>Home</span>
//               <span className="separator">/</span>
//               <span>Car Rental</span>
//               <span className="separator">/</span>
//               <span className="active">Add Car Rental</span>
//             </div>
//             <h1 className="page-hero-title">Add Your Car Rental</h1>
//           </div>
//         </Container>
//       </div>

//       {/* Main Content */}
//       <Container className="add-car-rental-container">
//         <Paper elevation={0} className="add-car-rental-form-card">
//           <Typography variant="h5" className="form-title">
//             Car Rental Details
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Please fill in the details below to add your car rental to our
//             platform.
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Basic Information
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Car Model/Title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   select
//                   label="Car Type"
//                   name="carType"
//                   value={formData.carType}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 >
//                   {carTypes.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Price"
//                   name="price"
//                   type="number"
//                   value={formData.price}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   InputProps={{
//                     startAdornment: (
//                       <span style={{ marginRight: "8px" }}>₹</span>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   select
//                   label="Price Unit"
//                   name="priceUnit"
//                   value={formData.priceUnit}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 >
//                   <MenuItem value="per day">Per Day</MenuItem>
//                   <MenuItem value="per week">Per Week</MenuItem>
//                   <MenuItem value="per month">Per Month</MenuItem>
//                 </TextField>
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Seating Capacity"
//                   name="seating"
//                   value={formData.seating}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   placeholder="e.g., 4 Seater"
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   select
//                   label="Transmission"
//                   name="transmission"
//                   value={formData.transmission}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 >
//                   {transmissionTypes.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   select
//                   label="Fuel Type"
//                   name="fuel"
//                   value={formData.fuel}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 >
//                   {fuelTypes.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={formData.ac}
//                       onChange={(e) =>
//                         setFormData({ ...formData, ac: e.target.checked })
//                       }
//                       name="ac"
//                       color="primary"
//                     />
//                   }
//                   label="Air Conditioning"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   label="Description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   fullWidth
//                   multiline
//                   rows={4}
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Divider />
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Car Features
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Enter each feature on a new line
//                 </Typography>
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   label="Features"
//                   value={formData.features.join("\n")}
//                   onChange={handleFeatureChange}
//                   fullWidth
//                   multiline
//                   rows={5}
//                   placeholder="Power Steering&#10;Power Windows&#10;Air Conditioning&#10;Heater&#10;Stereo"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Divider />
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Car Specifications
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Engine"
//                   name="engine"
//                   value={formData.specifications.engine}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 1.5L Petrol"
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Mileage"
//                   name="mileage"
//                   value={formData.specifications.mileage}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 15-18 km/l"
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Seating Capacity"
//                   name="seatingCapacity"
//                   value={formData.specifications.seatingCapacity}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 5 Persons"
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Boot Space"
//                   name="bootSpace"
//                   value={formData.specifications.bootSpace}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 300 liters"
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Length"
//                   name="length"
//                   value={formData.specifications.length}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 4500 mm"
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Width"
//                   name="width"
//                   value={formData.specifications.width}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 1800 mm"
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Height"
//                   name="height"
//                   value={formData.specifications.height}
//                   onChange={handleSpecificationChange}
//                   fullWidth
//                   placeholder="e.g., 1500 mm"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Divider />
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Car Images
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Upload images of your car (at least one image is required)
//                 </Typography>
//               </Grid>

//               <Grid item xs={12}>
//                 <div className="file-upload-container">
//                   <input
//                     accept="image/*"
//                     className="file-input"
//                     id="car-images-upload"
//                     type="file"
//                     multiple
//                     onChange={handleFileChange}
//                   />
//                   <label htmlFor="car-images-upload">
//                     <Button
//                       variant="outlined"
//                       component="span"
//                       startIcon={<CloudUploadIcon />}
//                       className="upload-button"
//                     >
//                       Upload Images
//                     </Button>
//                   </label>
//                   <Typography
//                     variant="caption"
//                     display="block"
//                     className="upload-help-text"
//                   >
//                     Supported formats: JPG, JPEG, PNG, GIF (Max 5MB per file)
//                   </Typography>
//                 </div>
//               </Grid>

//               {previewImages.length > 0 && (
//                 <Grid item xs={12}>
//                   <div className="image-preview-container">
//                     {previewImages.map((item, index) => (
//                       <div key={index} className="image-preview-item">
//                         <img
//                           src={item.preview || "/placeholder.svg"}
//                           alt={`Preview ${index}`}
//                           className="preview-image"
//                         />
//                         <IconButton
//                           className="remove-image-btn"
//                           onClick={() => removeFile(index)}
//                           size="small"
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                         <Typography variant="caption" className="image-name">
//                           {item.file.name}
//                         </Typography>
//                       </div>
//                     ))}
//                   </div>
//                 </Grid>
//               )}

//               <Grid item xs={12}>
//                 <Divider />
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Provider Information
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Provider Name"
//                   name="providerName"
//                   value={formData.providerName}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Provider Email"
//                   name="providerEmail"
//                   type="email"
//                   value={formData.providerEmail}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Provider Phone"
//                   name="providerPhone"
//                   value={formData.providerPhone}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   className="submit-button"
//                   disabled={loading}
//                   startIcon={
//                     loading && <CircularProgress size={20} color="inherit" />
//                   }
//                 >
//                   {loading ? "Submitting..." : "Add Car Rental"}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default AddCarRental;
// pages/AddCarRental/AddCarRental.jsx
//--------------------------------------

import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Divider,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
//import axios from "axios";
import api from "../../../services/api";
import "./AddCarRental.css";

const AddCarRental = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    carType: "",
    price: "",
    priceUnit: "per day",
    seating: "",
    ac: true,
    transmission: "",
    fuel: "",
    description: "",
    features: [],
    specifications: {
      engine: "",
      mileage: "",
      transmission: "",
      fuelType: "",
      seatingCapacity: "",
      bootSpace: "",
      length: "",
      width: "",
      height: "",
    },
    providerName: "",
    providerEmail: "",
    providerPhone: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const carTypes = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "hatchback", label: "Hatchback" },
    { value: "tempo", label: "Tempo Traveller" },
    { value: "luxury", label: "Luxury Car" },
  ];

  const transmissionTypes = [
    { value: "Manual", label: "Manual" },
    { value: "Automatic", label: "Automatic" },
    { value: "Semi-Automatic", label: "Semi-Automatic" },
  ];

  const fuelTypes = [
    { value: "Petrol", label: "Petrol" },
    { value: "Diesel", label: "Diesel" },
    { value: "Electric", label: "Electric" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "CNG", label: "CNG" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      specifications: {
        ...prevData.specifications,
        [name]: value,
      },
    }));
  };

  const handleFeatureChange = (e) => {
    const { value } = e.target;
    const features = value
      .split("\n")
      .filter((feature) => feature.trim() !== "");
    setFormData((prevData) => ({
      ...prevData,
      features,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate file types
    const validFiles = files.filter(
      (file) =>
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg"
    );

    if (validFiles.length !== files.length) {
      toast.error("Only JPEG, JPG, and PNG images are allowed");
      return;
    }

    // Validate file sizes (max 5MB each)
    const validSizeFiles = validFiles.filter(
      (file) => file.size <= 5 * 1024 * 1024
    );

    if (validSizeFiles.length !== validFiles.length) {
      toast.error("Images must be less than 5MB each");
      return;
    }

    setSelectedImages([...selectedImages, ...validSizeFiles]);

    // Create preview URLs
    const newPreviewImages = validSizeFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages([...previewImages, ...newPreviewImages]);
  };

  const removeImage = (index) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(previewImages[index]);

    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);

    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedImages.length === 0) {
      toast.error("Please upload at least one image of the car");
      return;
    }

    setLoading(true);

    try {
      // Create form data for multipart/form-data submission
      const formDataToSend = new FormData();

      // Append text fields
      formDataToSend.append("title", formData.title);
      formDataToSend.append("carType", formData.carType);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("priceUnit", formData.priceUnit);
      formDataToSend.append("seating", formData.seating);
      formDataToSend.append("ac", formData.ac);
      formDataToSend.append("transmission", formData.transmission);
      formDataToSend.append("fuel", formData.fuel);
      formDataToSend.append("description", formData.description);
      // formDataToSend.append('features', JSON  formData.description);
      formDataToSend.append("features", JSON.stringify(formData.features));
      formDataToSend.append(
        "specifications",
        JSON.stringify(formData.specifications)
      );
      formDataToSend.append("providerName", formData.providerName);
      formDataToSend.append("providerEmail", formData.providerEmail);
      formDataToSend.append("providerPhone", formData.providerPhone);

      // Append image files
      selectedImages.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await api.post(
        "/api/car-rentals",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Your car rental has been added successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });

        // Reset form data
        setFormData({
          title: "",
          carType: "",
          price: "",
          priceUnit: "per day",
          seating: "",
          ac: true,
          transmission: "",
          fuel: "",
          description: "",
          features: [],
          specifications: {
            engine: "",
            mileage: "",
            transmission: "",
            fuelType: "",
            seatingCapacity: "",
            bootSpace: "",
            length: "",
            width: "",
            height: "",
          },
          providerName: "",
          providerEmail: "",
          providerPhone: "",
        });

        // Clear images
        setSelectedImages([]);
        previewImages.forEach((url) => URL.revokeObjectURL(url));
        setPreviewImages([]);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to add car rental. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        }
      );

      console.error("Error adding car rental:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-car-rental-page">
      {/* Hero Banner */}
      <div className="page-hero-banner">
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span>Car Rental</span>
              <span className="separator">/</span>
              <span className="active">Add Car Rental</span>
            </div>
            <h1 className="page-hero-title">Add Your Car Rental</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="add-car-rental-container">
        <Paper elevation={0} className="add-car-rental-form-card">
          <Typography variant="h5" className="form-title">
            Car Rental Details
          </Typography>
          <Typography variant="body1" paragraph>
            Please fill in the details below to add your car rental to our
            platform.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" className="section-title">
                  Basic Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Car Model/Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Car Type"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {carTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <span style={{ marginRight: "8px" }}>Emptyaddcard</span>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Price Unit"
                  name="priceUnit"
                  value={formData.priceUnit}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="per day">Per Day</MenuItem>
                  <MenuItem value="per week">Per Week</MenuItem>
                  <MenuItem value="per month">Per Month</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Seating Capacity"
                  name="seating"
                  value={formData.seating}
                  onChange={handleChange}
                  fullWidth
                  required
                  placeholder="e.g., 4 Seater"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Transmission"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {transmissionTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Fuel Type"
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {fuelTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.ac}
                      onChange={(e) =>
                        setFormData({ ...formData, ac: e.target.checked })
                      }
                      name="ac"
                      color="primary"
                    />
                  }
                  label="Air Conditioning"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="section-title">
                  Car Images
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Upload images of your car (PNG, JPG, JPEG only, max 5MB each)
                </Typography>

                <input
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: "none" }}
                  id="car-images-upload"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                />
                <label htmlFor="car-images-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    className="upload-button"
                  >
                    Upload Images
                  </Button>
                </label>

                {previewImages.length > 0 && (
                  <div className="image-preview-container">
                    {previewImages.map((url, index) => (
                      <div key={index} className="image-preview-item">
                        <img
                          src={url || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                        />
                        <IconButton
                          className="remove-image-btn"
                          onClick={() => removeImage(index)}
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="section-title">
                  Car Features
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Enter each feature on a new line
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Features"
                  value={formData.features.join("\n")}
                  onChange={handleFeatureChange}
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Power Steering&#10;Power Windows&#10;Air Conditioning&#10;Heater&#10;Stereo"
                />
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="section-title">
                  Car Specifications
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Engine"
                  name="engine"
                  value={formData.specifications.engine}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 1.5L Petrol"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Mileage"
                  name="mileage"
                  value={formData.specifications.mileage}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 15-18 km/l"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Seating Capacity"
                  name="seatingCapacity"
                  value={formData.specifications.seatingCapacity}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 5 Persons"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Boot Space"
                  name="bootSpace"
                  value={formData.specifications.bootSpace}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 300 liters"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Length"
                  name="length"
                  value={formData.specifications.length}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 4500 mm"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Width"
                  name="width"
                  value={formData.specifications.width}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 1800 mm"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Height"
                  name="height"
                  value={formData.specifications.height}
                  onChange={handleSpecificationChange}
                  fullWidth
                  placeholder="e.g., 1500 mm"
                />
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="section-title">
                  Provider Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Provider Name"
                  name="providerName"
                  value={formData.providerName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Provider Email"
                  name="providerEmail"
                  type="email"
                  value={formData.providerEmail}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Provider Phone"
                  name="providerPhone"
                  value={formData.providerPhone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="submit-button"
                  disabled={loading}
                  startIcon={
                    loading && <CircularProgress size={20} color="inherit" />
                  }
                >
                  {loading ? "Submitting..." : "Add Car Rental"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AddCarRental;
