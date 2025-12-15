import { Card, CardContent, Skeleton } from '@mui/material';

export default function SkeletonCard() {
  return (
    <Card>
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <CardContent>
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </CardContent>
    </Card>
  );
}
