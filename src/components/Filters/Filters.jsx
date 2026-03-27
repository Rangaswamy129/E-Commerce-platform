import { Box, Typography, Chip, TextField } from "@mui/material";

const categories = [
  "Mobiles",
  "Laptops",
  "Headphones",
  "Smart Watches",
  "TVs",
  "Accessories",
];

export default function Filters({ products, setFiltered }) {
  return (
    <Box>
      <Typography fontWeight="bold" mb={1}>
        Search
      </Typography>

      <TextField
        size="small"
        placeholder="Search products..."
        fullWidth
        sx={{ mb: 2 }}
      />

      <Typography fontWeight="bold" mb={1}>
        Categories
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
           sx={{
    background: "white",
    borderRadius: 4,
    p: 2,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  }}
          />
        ))}
      </Box>

      <Typography fontWeight="bold" mb={1}>
        Brands
      </Typography>
      {/* keep your brand checkboxes here */}
    </Box>
  );
}
