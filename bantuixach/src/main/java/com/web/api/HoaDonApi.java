package com.web.api;

import com.web.dto.InvoiceRequest;
import com.web.entity.GioHang;
import com.web.entity.HoaDon;
import com.web.entity.HoaDonChiTiet;
import com.web.entity.LoaiSanPham;
import com.web.service.GioHangService;
import com.web.service.HoaDonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hoadon")
public class HoaDonApi {

    @Autowired
    private HoaDonService hoaDonService;

    @PostMapping("/user/create")
    public ResponseEntity<?> add(@RequestBody InvoiceRequest invoiceRequest){
        HoaDon result = hoaDonService.create(invoiceRequest);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/user/my-hoadon")
    public ResponseEntity<?> myHd() {
        List<HoaDon> result = hoaDonService.findByUser();
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/user/find-by-id")
    public ResponseEntity<?> myHd(@RequestParam Long id) {
        HoaDon result = hoaDonService.findById(id);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/user/hdct-by-hoadon")
    public ResponseEntity<?> hoaDonChiTiet(@RequestParam Long id) {
        List<HoaDonChiTiet> result = hoaDonService.findByHoaDon(id);
        return new ResponseEntity(result, HttpStatus.OK);
    }

}
