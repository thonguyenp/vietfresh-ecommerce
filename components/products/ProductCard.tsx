import { Card, CardContent, CardMedia, Typography, Stack, Chip } from '@mui/material';
import AddToCartButton from '@/components/common/AddToCartButton';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        height: '100%',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8
        }
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Stack spacing={1}>
          {product.badge && (
            <Chip
              label={product.badge}
              color="secondary"
              size="small"
              sx={{ alignSelf: 'flex-start' }}
            />
          )}
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={600} color="primary">
              {product.price.toLocaleString()}đ / {product.unit}
            </Typography>
            <AddToCartButton />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
