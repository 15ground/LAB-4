var keyLS = "dsGioHang";
function taoDoiTuongItems(idSanPham, soLuong) {
    var itemSP = new Object();
    itemSP.idSanPham = idSanPham;
    itemSP.soLuong = soLuong;
    return itemSP;
}
function layDanhSachGioHang() {
    var dsItems = new Array();
    var jsonItems = localStorage.getItem(keyLS);
    if (jsonItems != null) {
        dsItems = JSON.parse(jsonItems);
    }
    return dsItems;
}