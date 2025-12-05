// data/team.ts
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  social?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    position: 'CEO',
    imageUrl: 'https://source.unsplash.com/400x400/?man,face&sig=1',
    bio: 'Người sáng lập, điều hành công ty và chiến lược phát triển.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Trần Thị B',
    position: 'COO',
    imageUrl: 'https://source.unsplash.com/400x400/?woman,face&sig=2',
    bio: 'Quản lý vận hành, đảm bảo chất lượng dịch vụ và quy trình.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Lê Văn C',
    position: 'CTO',
    imageUrl: 'https://source.unsplash.com/400x400/?man,face&sig=3',
    bio: 'Chịu trách nhiệm về công nghệ, website và hệ thống.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Phạm Thị D',
    position: 'Marketing Manager',
    imageUrl: 'https://source.unsplash.com/400x400/?woman,face&sig=4',
    bio: 'Lập kế hoạch marketing, quảng bá sản phẩm và chăm sóc khách hàng.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
  {
    id: '5',
    name: 'Ngô Văn E',
    position: 'Sales Manager',
    imageUrl: 'https://source.unsplash.com/400x400/?man,face&sig=5',
    bio: 'Phát triển thị trường, chăm sóc đối tác và khách hàng.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
  {
    id: '6',
    name: 'Đặng Thị F',
    position: 'Designer',
    imageUrl: 'https://source.unsplash.com/400x400/?woman,face&sig=6',
    bio: 'Thiết kế hình ảnh, giao diện website và bộ nhận diện thương hiệu.',
    social: { linkedin: '#', facebook: '#', instagram: '#' },
  },
];
