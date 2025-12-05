// data/projects.ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string; // sẽ tự động lấy từ unsplash
}

export const projects: Project[] = [
  {
    title: 'Trang trại rau hữu cơ Tây Bắc',
    slug: 'trang-trai-rau-huu-co-tay-bac',
    description: 'Hệ thống trang trại trồng rau hữu cơ, áp dụng công nghệ tiên tiến, đảm bảo tươi sạch và an toàn.',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
  },
  {
    title: 'Vườn rau sạch Đà Lạt',
    slug: 'vuon-rau-sach-da-lat',
    description: 'Vườn rau được chăm sóc theo tiêu chuẩn sạch, giúp rau giữ được hương vị tự nhiên và giá trị dinh dưỡng cao.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
  },
  {
    title: 'Chợ rau xanh Thành phố',
    slug: 'cho-rau-xanh-thanh-pho',
    description: 'Dự án cung cấp rau củ sạch trực tiếp đến các chợ, đảm bảo nguồn cung ổn định và tươi ngon.',
    image: 'https://images.unsplash.com/photo-1617196037775-9f5e0b2edb7d',
  },
];
