function taoId() {
    // Lấy thời gian hiện tại theo milisecond: Hiện tại - 0:0:0 1/1/1970 chuyển thành milisecond
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + "_" + String(thoiGianHienTai);
    return id;
}

function luuVaoLocal(keylocal,data) {
    var jsondata = JSON.stringify(data);
    localStorage.setItem(keylocal, jsondata);
}

