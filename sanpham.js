function taoRaDoiTuongSP(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    // B1: Gán thuộc tính cho đối tượng
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;
    // Tạo định danh cho đối tượng
    if (id == null) {
        sanPham.id = taoId();
    }
    else {
        sanPham.id = id;
    }
    // B2: Viết phương thức tính giá bán
    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;
    }
    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }
    sanPham.fromJson = function (json) {
        var doiTuongDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var doiTuongDayDu = taoRaDoiTuongSP(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc, doiTuong.id);
        return doiTuongDayDu;
    }
    sanPham.fromJsons = function (jsonSP) {
        var dsSanPhamDayDu = new Array();
        var dsSanPham = JSON.parse(jsonSP);
        for (var i = 0; i < dsSanPham.length; i++) {
            var sanPham = dsSanPham[i];
            var sanPhamDayDu = taoRaDoiTuongSP(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
            dsSanPhamDayDu[i] = sanPhamDayDu;
        }
        return dsSanPhamDayDu;
    }
    // TODO: Tạo ra Object sanPham
    return sanPham;
}
// Chuyển đối tượng thành 1 đoạn HTML
function chuyenDoiTuong(sanPham) {
    var swap = "";
    swap = swap + "<div class='san-pham'>";
    swap = swap + "<div class='hinh-anh'>";
    swap = swap + "<img src='" + sanPham.hinhAnh + "'>";
    swap = swap + "</div>";
    swap += "<h1 class='ten-san-pham'>" + sanPham.ten + "</h1>";
    swap += "<span class='gia-goc'>" + sanPham.giaGoc + "đ</span> ";
    // Dòng dưới do Local Storage không load đc các phương thức tính của đối tượng
    swap += "<span class='gia-ban'>" + sanPham.tinhGiaBan() + "đ</span>";
    swap += "<p class='khu-vuc'>" + sanPham.khuVuc + "</p>";
    swap += "<button onclick='onClickThemVaoGioHang(\"" + sanPham.id + "\")' class='btn-them'>Thêm vào giỏ hàng</button>";
    swap = swap + "</div>";
    return swap;
}
// Chuyển 1 danh sách đối tượng thành thẻ HTML
function chuyenDanhSach(danhSachSanPham) {
    var swapA = "";
    // B1: Duyệt từng phần tử trong mảng
    // B2: Chuyển đối tượng thành HTML
    // B3: Cộng HTML vào swapA
    for (var i = 0; i < danhSachSanPham.length; i++) {
        // var sanPham = danhSachSanPham[i]: Lấy từng phần tử tại vị trí thứ i
        var sanPham = danhSachSanPham[i];
        var swap = chuyenDoiTuong(sanPham);
        swapA += swap;
    }
    return swapA;
}
// Dựa vào ID của sản phẩm để lấy ra được thông tin của đối tượng

function getSanPhamTuID(id) {
    // B1. Lấy toàn bộ sản phẩm trong Local Storage ra
    //  var danhSachSanPhamJson = localStorage.getItem("danhSachSanPham");
    //  var danhSachSanPhamObject = taoRaDoiTuongSP().fromJsons(danhSachSanPhamJson);
    // B2. Duyệt danh sách sản phẩm để tìm ra sản phẩm nào có ID giống như ID của sản phẩm
    // Hàm find() như vòng lặp for(), "x => x.id == idSanPham": Đây là điều kiện của hàm
    return taoRaDoiTuongSP().fromJsons(localStorage.getItem("danhSachSanPham")).find(x => x.id == id);
}