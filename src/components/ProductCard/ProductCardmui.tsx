import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import imgPuddin from "../../assets/images/puddin.jpg";

const ProductCardmui = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "2px 0",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        width: "100%",
        height: 120,
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        image={imgPuddin}
        alt="Puddin"
        sx={{
          width: 100,
          height: 100,
          borderRadius: "16px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* Contenido central */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 2,
          "&:last-child": { pb: 1 },
          height: "100%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.2,
              mb: 0.5,
            }}
          >
            Whole Wheat Loaf
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              lineHeight: 1.3,
              maxWidth: 200,
              mb: 0.75,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Nutritious, fiber-rich, and wholesome loaves.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#2f5bea",
              fontWeight: 600,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              lineHeight: 1,
            }}
          >
            $4.50
          </Typography>
        </Box>

        {/* Lado derecho */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "100%",
            minWidth: 90,
          }}
        >
          <Chip
            label="In Stock: 40"
            size="small"
            sx={{
              backgroundColor: "#e6f7ec",
              color: "#1f8a4c",
              fontSize: { xs: "0.65rem", sm: "0.7rem" },
              height: 22,
              borderRadius: "20px",
              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />

          <IconButton
            size="small"
            sx={{
              backgroundColor: "#2f5bea",
              color: "white",
              width: 34,
              height: 34,
              "&:hover": {
                backgroundColor: "#1d45c7",
              },
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCardmui;
