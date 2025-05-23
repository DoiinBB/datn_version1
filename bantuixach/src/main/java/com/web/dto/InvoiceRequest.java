package com.web.dto;

import com.web.enums.LoaiThanhToan;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvoiceRequest {

    private LoaiThanhToan payType;

    private String vnpOrderInfo;

    private String urlVnpay;

    private String diaChi;

    private String hoTen;

    private String soDienThoai;

    private String maVoucher;

    private Double shipCost;

    private String note;
}
