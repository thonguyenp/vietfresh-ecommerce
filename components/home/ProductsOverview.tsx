import { Container, Stack, Typography } from '@mui/material';
import { products } from '@/lib/mockData';
import ProductCard from '@/components/products/ProductCard';

export default function ProductsOverview() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={6}>
        <Typography variant="h2" textAlign="center">
          Sản phẩm nổi bật
        </Typography>
        <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
          {products.map((product) => (
            <Stack key={product.id} sx={{ width: 300 }}>
              <ProductCard product={product} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
