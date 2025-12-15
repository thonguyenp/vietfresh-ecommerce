import { Product, Service, Testimonial, TeamMember } from '@/types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Rau Cải Xanh Hữu Cơ',
    slug: 'rau-cai-xanh',
    price: 28000,
    unit: 'bó',
    image: 'https://images.unsplash.com/photo-1542444459-db63c7d7a08d',
    description: 'Rau cải xanh trồng theo tiêu chuẩn hữu cơ VietGAP, tươi non mỗi sáng.',
    badge: 'Organic 100%',
    category: 'Rau lá'
  },
  {
    id: 'p2',
    name: 'Cà Chua Bi Đà Lạt',
    slug: 'ca-chua-bi',
    price: 45000,
    unit: 'hộp',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    description: 'Cà chua bi đỏ mọng, vị ngọt tự nhiên, thu hoạch trong ngày.',
    badge: 'Tươi mới hôm nay',
    category: 'Củ quả'
  },
  {
    id: 'p3',
    name: 'Xà Lách Lolo Xanh',
    slug: 'xa-lach-lolo',
    price: 32000,
    unit: 'bó',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
    description: 'Xà lách giòn, vị thanh mát, phù hợp salad cao cấp.',
    category: 'Rau lá'
  },
  {
    id: 'p4',
    name: 'Cà Rốt Baby',
    slug: 'ca-rot-baby',
    price: 52000,
    unit: 'túi',
    image: 'https://images.unsplash.com/photo-1582515073490-39981397c445',
    description: 'Cà rốt baby ngọt dịu, giàu vitamin A.',
    category: 'Củ'
  },
  {
    id: 'p5',
    name: 'Bí Đỏ Nhật',
    slug: 'bi-do-nhat',
    price: 38000,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2',
    description: 'Bí đỏ Nhật bùi béo, thích hợp nấu súp và món chay.',
    category: 'Củ quả'
  }
];

export const services: Service[] = [
  {
    id: 's1',
    title: 'Cung Cấp Rau Sạch Hằng Ngày',
    slug: 'cung-cap-rau-hang-ngay',
    summary: 'Giải pháp rau củ tươi mỗi ngày cho gia đình và doanh nghiệp.',
    content: 'VietFresh cung cấp rau sạch mỗi ngày với quy trình kiểm soát nghiêm ngặt từ nông trại đến bàn ăn.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
  },
  {
    id: 's2',
    title: 'Combo Rau Tuần',
    slug: 'combo-rau-tuan',
    summary: 'Tiết kiệm chi phí với combo rau củ theo tuần.',
    content: 'Combo rau được thiết kế khoa học, đủ dinh dưỡng cho cả gia đình.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e'
  },
  {
    id: 's3',
    title: 'Rau Cho Nhà Hàng',
    slug: 'rau-cho-nha-hang',
    summary: 'Nguồn rau ổn định, chất lượng cao cho nhà hàng.',
    content: 'Đáp ứng tiêu chuẩn khắt khe về chất lượng và số lượng.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399'
  },
  {
    id: 's4',
    title: 'Truy Xuất Nguồn Gốc',
    slug: 'truy-xuat-nguon-goc',
    summary: 'Minh bạch nguồn gốc từng sản phẩm.',
    content: 'Khách hàng dễ dàng kiểm tra nguồn gốc và quy trình canh tác.',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e'
  },
  {
    id: 's5',
    title: 'Giao Hàng Nhanh TP.HCM',
    slug: 'giao-hang-nhanh',
    summary: 'Giao hàng trong ngày, đảm bảo độ tươi.',
    content: 'Đội ngũ giao hàng chuyên nghiệp, bảo quản lạnh đúng chuẩn.',
    image: 'https://images.unsplash.com/photo-1607082349566-1870c1d6b08b'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Nguyễn Thị Lan',
    role: 'Khách hàng thân thiết',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
    content: 'Rau rất tươi, giao hàng nhanh, gia đình tôi rất tin tưởng VietFresh.'
  },
  {
    id: 't2',
    name: 'Trần Minh Quân',
    role: 'Chủ nhà hàng chay',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    content: 'Nguồn rau ổn định, chất lượng cao, đối tác đáng tin cậy.'
  }
];

export const team: TeamMember[] = [
  {
    id: 'm1',
    name: 'Phạm Hoàng Anh',
    position: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    bio: 'Hơn 10 năm kinh nghiệm trong nông nghiệp sạch.'
  },
  {
    id: 'm2',
    name: 'Lê Thị Mai',
    position: 'Quản lý chất lượng',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    bio: 'Chuyên gia kiểm soát chất lượng nông sản.'
  }
];
