// data/testimonials.ts
export interface Testimonial {
  name: string;
  role: string;
  message: string;
  photo: string; // từ unsplash
}

export const testimonials: Testimonial[] = [
  {
    name: 'Nguyễn Minh T',
    role: 'Khách hàng',
    message: 'Rau củ ở VietFresh luôn tươi ngon và đảm bảo chất lượng. Tôi hoàn toàn yên tâm khi mua hàng.',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
  },
  {
    name: 'Trần Hồng L',
    role: 'Khách hàng',
    message: 'Dịch vụ giao hàng nhanh và tận tình. Rau củ luôn tươi, giữ nguyên hương vị tự nhiên.',
    photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c8e3f',
  },
  {
    name: 'Lê Thị P',
    role: 'Khách hàng',
    message: 'Tôi rất hài lòng về cách công ty tư vấn dinh dưỡng và lựa chọn sản phẩm phù hợp.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
];
