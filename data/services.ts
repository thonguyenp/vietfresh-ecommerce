// data/services.ts
export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string; // có thể là tên icon hoặc đường dẫn
}

export const services: Service[] = [
  {
    title: 'Cung cấp rau củ sạch',
    slug: 'rau-cu-sach',
    description: 'Chúng tôi cung cấp rau củ tươi sạch, đảm bảo an toàn vệ sinh thực phẩm, được trồng hữu cơ tại các trang trại uy tín.',
    icon: 'Eco',
  },
  {
    title: 'Giao hàng tận nơi',
    slug: 'giao-hang-tan-noi',
    description: 'Dịch vụ giao hàng nhanh chóng, đúng hẹn, đảm bảo rau củ giữ được độ tươi ngon đến tay khách hàng.',
    icon: 'LocalShipping',
  },
  {
    title: 'Tư vấn dinh dưỡng',
    slug: 'tu-van-dinh-duong',
    description: 'Cung cấp các kiến thức và tư vấn về dinh dưỡng, giúp khách hàng lựa chọn thực phẩm phù hợp cho bữa ăn hằng ngày.',
    icon: 'HealthAndSafety',
  },
  {
    title: 'Đặt hàng theo mùa',
    slug: 'dat-hang-theo-mua',
    description: 'Khách hàng có thể đặt trước các loại rau củ theo mùa, đảm bảo luôn có sản phẩm tươi ngon theo thời điểm.',
    icon: 'CalendarToday',
  },
];
