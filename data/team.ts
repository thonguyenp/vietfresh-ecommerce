// data/team.ts
export interface TeamMember {
  name: string;
  role: string;
  photo: string; // tự lấy từ unsplash
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Nguyễn Văn A',
    role: 'CEO & Founder',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a3',
    bio: 'Nguyễn Văn A sáng lập công ty VietFresh với sứ mệnh mang rau củ sạch đến mọi nhà.',
  },
  {
    name: 'Trần Thị B',
    role: 'Giám đốc điều hành',
    photo: 'https://images.unsplash.com/photo-1603415526960-f7e0328c8e3f',
    bio: 'Trần Thị B chịu trách nhiệm vận hành và quản lý các dự án rau củ sạch của công ty.',
  },
  {
    name: 'Lê Văn C',
    role: 'Trưởng phòng Marketing',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    bio: 'Lê Văn C xây dựng chiến lược marketing và quảng bá sản phẩm ra thị trường.',
  },
  {
    name: 'Phạm Thị D',
    role: 'Chuyên viên Dinh dưỡng',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    bio: 'Phạm Thị D tư vấn dinh dưỡng và đảm bảo sản phẩm phù hợp cho bữa ăn hàng ngày.',
  },
];
