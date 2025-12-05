"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GioiThieuPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* HERO */}
      <Box
        className="hero"
        sx={{
          backgroundImage:
            "url('https://via.placeholder.com/1600x600.png?text=Gioi+Thieu')",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Giới thiệu VietFresh
          </Typography>
          <Typography mt={2} maxWidth="700px">
            Doanh nghiệp tiên phong trong lĩnh vực cung cấp rau củ quả sạch,
            an toàn và đạt chuẩn VietGAP.
          </Typography>
        </Container>
      </Box>

      {/* INTRO SECTION */}
      <Container className="section">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Image
              src="https://via.placeholder.com/600x400.png?text=About+Us"
              alt="About VietFresh"
              width={600}
              height={400}
              style={{ width: "100%", borderRadius: 12 }}
            />
          </Grid>

          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography variant="h4" fontWeight="bold" color="var(--navy)" mb={3}>
              Chúng tôi là ai?
            </Typography>
            <Typography lineHeight={1.8}>
              VietFresh là doanh nghiệp hoạt động trong ngành nông sản sạch,
              chuyên cung cấp rau củ quả tươi được tuyển chọn từ các trang trại
              đạt chuẩn VietGAP. Chúng tôi cam kết mang đến nguồn thực phẩm an
              toàn, chất lượng và truy xuất được nguồn gốc.
            </Typography>
            <Typography mt={2} lineHeight={1.8}>
              Với tầm nhìn dài hạn, VietFresh không chỉ là nhà cung cấp, mà còn
              là đối tác đồng hành của các siêu thị, cửa hàng tiện lợi, bếp ăn
              công nghiệp và người tiêu dùng trên toàn quốc.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* VISION - MISSION - CORE VALUES */}
      <Container className="section">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="var(--navy)"
          mb={5}
        >
          Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
        </Typography>

        <Grid container spacing={4}>
          {/* VISION */}
          <Grid item xs={12} md={4} data-aos="fade-up">
            <Box
              sx={{
                padding: 4,
                borderRadius: 4,
                background: "var(--gray)",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="var(--navy)"
                mb={2}
              >
                Tầm nhìn
              </Typography>
              <Typography lineHeight={1.8}>
                Trở thành thương hiệu nông sản sạch hàng đầu Việt Nam, góp phần
                nâng cao chất lượng bữa ăn và sức khỏe cộng đồng.
              </Typography>
            </Box>
          </Grid>

          {/* MISSION */}
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="200">
            <Box
              sx={{
                padding: 4,
                borderRadius: 4,
                background: "var(--gray)",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="var(--navy)"
                mb={2}
              >
                Sứ mệnh
              </Typography>
              <Typography lineHeight={1.8}>
                Cung cấp sản phẩm nông sản sạch, an toàn, đảm bảo tiêu chuẩn vệ
                sinh và truy xuất nguồn gốc rõ ràng đến từng người dùng.
              </Typography>
            </Box>
          </Grid>

          {/* CORE VALUES */}
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="400">
            <Box
              sx={{
                padding: 4,
                borderRadius: 4,
                background: "var(--gray)",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="var(--navy)"
                mb={2}
              >
                Giá trị cốt lõi
              </Typography>
              <Typography lineHeight={1.8}>
                – Chất lượng  
                <br />– Minh bạch  
                <br />– Tận tâm  
                <br />– Phát triển bền vững  
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* WHY CHOOSE US */}
      <Container className="section">
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          fontWeight="bold"
          color="var(--navy)"
        >
          Vì sao chọn VietFresh?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} data-aos="zoom-in">
            <Box textAlign="center" p={3}>
              <Typography variant="h5" fontWeight="bold" color="var(--gold)">
                10+ năm kinh nghiệm
              </Typography>
              <Typography mt={1}>
                Chúng tôi hiểu rõ thị trường nông sản sạch và nhu cầu khách hàng.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} data-aos="zoom-in" data-aos-delay="200">
            <Box textAlign="center" p={3}>
              <Typography variant="h5" fontWeight="bold" color="var(--gold)">
                Chuỗi cung ứng tối ưu
              </Typography>
              <Typography mt={1}>
                Quy trình xử lý – bảo quản – vận chuyển đạt chuẩn quốc tế.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} data-aos="zoom-in" data-aos-delay="400">
            <Box textAlign="center" p={3}>
              <Typography variant="h5" fontWeight="bold" color="var(--gold)">
                Giá tốt – chất lượng cao
              </Typography>
              <Typography mt={1}>
                Cam kết sản phẩm tươi – sạch – chuẩn VietGAP với giá hợp lý nhất.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
