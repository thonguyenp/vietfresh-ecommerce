import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function AddToCartButton() {
  return (
    <Button
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      sx={{
        bgcolor: '#4caf50',
        '&:hover': {
          bgcolor: '#43a047',
          transform: 'scale(1.05)'
        }
      }}
    >
      Thêm vào giỏ
    </Button>
  );
}
