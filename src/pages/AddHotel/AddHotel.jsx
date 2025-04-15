// // pages/AddHotel/AddHotel.jsx
// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Paper,
//   Divider,
//   CircularProgress,
//   Rating,
//   IconButton,
// } from "@mui/material";
// import {
//   CloudUpload as CloudUploadIcon,
//   Delete as DeleteIcon,
// } from "@mui/icons-material";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "./AddHotel.css";

// const AddHotel = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     price: "",
//     rating: 0,
//     type: "",
//     description: "",
//     amenities: [],
//     providerName: "",
//     providerEmail: "",
//     providerPhone: "",
//   });

//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   const hotelTypes = [
//     { value: "luxury", label: "Luxury" },
//     { value: "business", label: "Business" },
//     { value: "budget", label: "Budget" },
//     { value: "resort", label: "Resort" },
//     { value: "boutique", label: "Boutique" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRatingChange = (event, newValue) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       rating: newValue,
//     }));
//   };

//   const handleAmenitiesChange = (e) => {
//     const { value } = e.target;
//     const amenities = value
//       .split("\n")
//       .filter((amenity) => amenity.trim() !== "");
//     setFormData((prevData) => ({
//       ...prevData,
//       amenities,
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
//       toast.error("Please upload at least one image of the hotel", {
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
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("location", formData.location);
//       formDataToSend.append("price", formData.price);
//       formDataToSend.append("rating", formData.rating);
//       formDataToSend.append("type", formData.type);
//       formDataToSend.append("description", formData.description);
//       formDataToSend.append("amenities", JSON.stringify(formData.amenities));
//       formDataToSend.append("providerName", formData.providerName);
//       formDataToSend.append("providerEmail", formData.providerEmail);
//       formDataToSend.append("providerPhone", formData.providerPhone);

//       // Add files
//       selectedFiles.forEach((file) => {
//         formDataToSend.append("images", file);
//       });

//       const response = await axios.post(
//         "http://localhost:5000/api/hotels-list",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Your hotel has been added successfully!", {
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
//           name: "",
//           location: "",
//           price: "",
//           rating: 0,
//           type: "",
//           description: "",
//           amenities: [],
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
//           "Failed to add hotel. Please try again later.",
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

//       console.error("Error adding hotel:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-hotel-page">
//       {/* Hero Banner */}
//       <div className="page-hero-banner">
//         <div className="page-hero-overlay"></div>
//         <Container>
//           <div className="page-hero-content">
//             <div className="breadcrumb">
//               <span>Home</span>
//               <span className="separator">/</span>
//               <span>Hotels</span>
//               <span className="separator">/</span>
//               <span className="active">Add Hotel</span>
//             </div>
//             <h1 className="page-hero-title">Add Your Hotel</h1>
//           </div>
//         </Container>
//       </div>

//       {/* Main Content */}
//       <Container className="add-hotel-container">
//         <Paper elevation={0} className="add-hotel-form-card">
//           <Typography variant="h5" className="form-title">
//             Hotel Details
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Please fill in the details below to add your hotel to our platform.
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
//                   label="Hotel Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   placeholder="e.g., Rameshwaram, Madurai, etc."
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Price per Night"
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
//                   label="Hotel Type"
//                   name="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                 >
//                   {hotelTypes.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="body2" gutterBottom>
//                   Hotel Rating
//                 </Typography>
//                 <Rating
//                   name="rating"
//                   value={formData.rating}
//                   onChange={handleRatingChange}
//                   precision={0.5}
//                   size="large"
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
//                   Hotel Amenities
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Enter each amenity on a new line
//                 </Typography>
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   label="Amenities"
//                   value={formData.amenities.join("\n")}
//                   onChange={handleAmenitiesChange}
//                   fullWidth
//                   multiline
//                   rows={5}
//                   placeholder="Free WiFi&#10;Swimming Pool&#10;Restaurant&#10;Air Conditioning&#10;Parking"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Divider />
//               </Grid>

//               <Grid item xs={12}>
//                 <Typography variant="h6" className="section-title">
//                   Hotel Images
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Upload images of your hotel (at least one image is required)
//                 </Typography>
//               </Grid>

//               <Grid item xs={12}>
//                 <div className="file-upload-container">
//                   <input
//                     accept="image/*"
//                     className="file-input"
//                     id="hotel-images-upload"
//                     type="file"
//                     multiple
//                     onChange={handleFileChange}
//                   />
//                   <label htmlFor="hotel-images-upload">
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
//                   {loading ? "Submitting..." : "Add Hotel"}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default AddHotel;
// pages/AddHotel/AddHotel.jsx
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Divider,
  CircularProgress,
  Rating,
  IconButton,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
//import axios from "axios";
import api from "../../services/api";
import "./AddHotel.css";

const AddHotel = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: 0,
    type: "",
    description: "",
    amenities: [],
    providerName: "",
    providerEmail: "",
    providerPhone: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const hotelTypes = [
    { value: "luxury", label: "Luxury" },
    { value: "business", label: "Business" },
    { value: "budget", label: "Budget" },
    { value: "resort", label: "Resort" },
    { value: "boutique", label: "Boutique" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: newValue,
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    const amenities = value
      .split("\n")
      .filter((amenity) => amenity.trim() !== "");
    setFormData((prevData) => ({
      ...prevData,
      amenities,
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
      toast.error("Please upload at least one image of the hotel");
      return;
    }

    setLoading(true);

    try {
      // Create form data for multipart/form-data submission
      const formDataToSend = new FormData();

      // Append text fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("amenities", JSON.stringify(formData.amenities));
      formDataToSend.append("providerName", formData.providerName);
      formDataToSend.append("providerEmail", formData.providerEmail);
      formDataToSend.append("providerPhone", formData.providerPhone);

      // Append image files
      selectedImages.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await api.post(

        "/api/hotels-list",

        "http://localhost:5001/api/hotels-list",

        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Your hotel has been added successfully!", {
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
          name: "",
          location: "",
          price: "",
          rating: 0,
          type: "",
          description: "",
          amenities: [],
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
          "Failed to add hotel. Please try again later.",
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

      console.error("Error adding hotel:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-hotel-page">
      {/* Hero Banner */}
      <div className="page-hero-banner">
        <div className="page-hero-overlay"></div>
        <Container>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span>Hotels</span>
              <span className="separator">/</span>
              <span className="active">Add Hotel</span>
            </div>
            <h1 className="page-hero-title">Add Your Hotel</h1>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="add-hotel-container">
        <Paper elevation={0} className="add-hotel-form-card">
          <Typography variant="h5" className="form-title">
            Hotel Details
          </Typography>
          <Typography variant="body1" paragraph>
            Please fill in the details below to add your hotel to our platform.
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
                  label="Hotel Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  fullWidth
                  required
                  placeholder="e.g., Rameshwaram, Madurai, etc."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Price per Night"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <span style={{ marginRight: "8px" }}>₹</span>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Hotel Type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {hotelTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Hotel Rating
                </Typography>
                <Rating
                  name="rating"
                  value={formData.rating}
                  onChange={handleRatingChange}
                  precision={0.5}
                  size="large"
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
                  Hotel Images
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Upload images of your hotel (PNG, JPG, JPEG only, max 5MB
                  each)
                </Typography>

                <input
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: "none" }}
                  id="hotel-images-upload"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                />
                <label htmlFor="hotel-images-upload">
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
                  Hotel Amenities
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Enter each amenity on a new line
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Amenities"
                  value={formData.amenities.join("\n")}
                  onChange={handleAmenitiesChange}
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Free WiFi&#10;Swimming Pool&#10;Restaurant&#10;Air Conditioning&#10;Parking"
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
                  {loading ? "Submitting..." : "Add Hotel"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AddHotel;
