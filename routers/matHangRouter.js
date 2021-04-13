import express from "express";
import {
  themMatHang,
  xoaMatHang,
  chinhSuaMatHang,
  danhSachMatHang,
  matHangChiTiet,
  timKiemHangMuc,
  danhSachToiBan,
  timKiemTieuDe,
  timKiem,
  BaoCaoMatHang,
} from '../controllers/matHangController.js';

const router = express.Router();

router.post('/dangMatHang/:id', themMatHang);
router.post('/xoa/:id', xoaMatHang);
router.post('/chinhSua/:id', chinhSuaMatHang);
router.get('/danhSach', danhSachMatHang);
router.post('/chiTiet/:id', matHangChiTiet);
router.post('/timKiemHangMuc/:tuKhoa', timKiemHangMuc);
router.post('/danhSachToiBan/:id', danhSachToiBan)
router.post('/timKiemTieuDe/:tieuDe', timKiemTieuDe);
router.post('/baoCaoMatHang/:id', BaoCaoMatHang);
router.post('/timKiem', timKiem);
export default router;
