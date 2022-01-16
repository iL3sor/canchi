function finding(namsinh, can="", chi=""){
    if (namsinh > 0) {
      switch (namsinh % 10) {
        case 0:
          can = "Canh";
          break;
        case 1:
          can = "Tân";
          break;
        case 2:
          can = "Nhâm";
          break;
        case 3:
          can = "Qúy";
          break;
        case 4:
          can = "Giáp";
          break;
        case 5:
          can = "Ất";
          break;
        case 6:
          can = "Bính";
          break;
        case 7:
          can = "Đinh";
          break;
        case 8:
          can = "Mậu";
          break;
        case 9:
          can = "Kỷ";
          break;
      }
      switch (namsinh % 12) {
        case 0:
          chi = "Thân";
          break;
        case 1:
          chi = "Dậu";
          break;
        case 2:
          chi = "Tuất";
          break;
        case 3:
          chi = "Hợi";
          break;
        case 4:
          chi = "Tý";
          break;
        case 5:
          chi = "Sửu";
          break;
        case 6:
          chi = "Dần";
          break;
        case 7:
          chi = "Mẹo";
          break;
        case 8:
          chi = "Thìn";
          break;
        case 9:
          chi = "Tỵ";
          break;
        case 10:
          chi = "Ngọ";
          break;
        case 11:
          chi = "Mùi";
          break;
      }
    } else if (namsinh < 0) {
      switch (abs(namsinh % 10)) {
        case 1:
          can = "Canh";
          break;
        case 0:
          can = "Tân";
          break;
        case 9:
          can = "Nhâm";
          break;
        case 8:
          can = "Qúy";
          break;
        case 7:
          can = "Giáp";
          break;
        case 6:
          can = "Ất";
          break;
        case 5:
          can = "Bính";
          break;
        case 4:
          can = "Đinh";
          break;
        case 3:
          can = "Mậu";
          break;
        case 2:
          can = "Kỷ";
          break;
      }
      switch (abs(namsinh % 12)) {
        case 9:
          chi = "Tý";
          break;
        case 8:
          chi = "Sửu";
          break;
        case 7:
          chi = "Dần";
          break;
        case 6:
          chi = "Mẹo";
          break;
        case 5:
          chi = "Thìn";
          break;
        case 4:
          chi = "Tỵ";
          break;
        case 3:
          chi = "Ngọ";
          break;
        case 2:
          chi = "Mùi";
          break;
        case 1:
          chi = "Thân";
          break;
        case 0:
          chi = "Dậu";
          break;
        case 11:
          chi = "Tuất";
          break;
        case 10:
          chi = "Hợi";
          break;
      }
    }
    return can + " " + chi;
}
class result {
  main(req, res) {
    var namsinh = req.query.year;
    var kq = finding(namsinh);
    res.render('index2', {year:namsinh,canchi: kq})
  }
}
module.exports = new result();
