export default function Rover(){
  return (
    <div className="section">
      <h1>PMnav Rover</h1>
      <p>PMnav Rover – Định vị chính xác, sử dụng linh hoạt.</p>

      <img className="product-image" src="/images/rover-removebg-preview.png" alt="PMnav base" />

      <h2>Thông số kỹ thuật</h2>

      <table className="spec-table">
        <tbody>
          <tr><th colSpan="2">Đặc tính chip</th></tr>
          <tr><td>Chip</td><td>WT-62-RK module</td></tr>
          <tr><td>Tần số</td><td>
            BDS: B1I/B1C/B2a<br/>
            GPS/QZSS: L1C/A & L5<br/>
            GLONASS: L1<br/>
            Galileo: E1 & E5a
          </td></tr>
          <tr><td>Chế độ hoạt động</td><td>A-GNSS, RTK</td></tr>
          <tr><td>Số kênh</td><td>128 kênh tìm kiếm</td></tr>

          <tr><th colSpan="2">Độ nhạy</th></tr>
          <tr><td>Theo dõi (Tracking)</td><td>-163 dBm</td></tr>
          <tr><td>Thu lại tín hiệu</td><td>-148 dBm</td></tr>

          <tr><th colSpan="2">Độ chính xác</th></tr>
          <tr><td>RTK</td><td>1.0 cm + 1 ppm (ngang), 1.5 cm + 1 ppm (đứng)</td></tr>
          <tr><td>Độ chính xác tốc độ</td><td>0.05 m/s</td></tr>
          <tr><td>Độ chính xác PPS</td><td>20 ns</td></tr>

          <tr><th colSpan="2">Thời gian khởi động</th></tr>
          <tr><td>Khởi động nguội</td><td>28 giây</td></tr>
          <tr><td>Khởi động nóng</td><td>1 giây</td></tr>

          <tr><th colSpan="2">Dữ liệu đầu ra</th></tr>
          <tr><td>Tốc độ truyền</td><td>115200 bps (có thể cấu hình)</td></tr>
          <tr><td>Mức tín hiệu</td><td>TTL</td></tr>
          <tr><td>Giao thức</td><td>NMEA / UBX</td></tr>
          <tr><td>Câu lệnh NMEA</td><td>RMC, VTG, GGA, GSA, GSV, GLL</td></tr>
          <tr><td>Tần số cập nhật</td><td>1–20 Hz (mặc định 10 Hz)</td></tr>

          <tr><th colSpan="2">Giới hạn hoạt động</th></tr>
          <tr><td>Độ cao</td><td>50,000 m</td></tr>
          <tr><td>Tốc độ</td><td>515 m/s</td></tr>
          <tr><td>Gia tốc</td><td>&lt; 4g</td></tr>

          <tr><th colSpan="2">Nguồn điện</th></tr>
          <tr><td>Điện áp</td><td>DC 3.6V – 6.0V (điển hình 5.0V)</td></tr>
          <tr><td>Dòng tiêu thụ</td><td>80 mA @ 5V</td></tr>

          <tr><th colSpan="2">Thông số vật lý</th></tr>
          <tr><td>Kích thước</td><td>Φ47 × 35.9 mm</td></tr>
          <tr><td>Khối lượng</td><td>20 g</td></tr>
          <tr><td>Đầu nối</td><td>GH 1.25 (8 chân)</td></tr>

          <tr><th colSpan="2">Môi trường</th></tr>
          <tr><td>Nhiệt độ hoạt động</td><td>-40°C ~ +85°C</td></tr>
          <tr><td>Nhiệt độ lưu trữ</td><td>-40°C ~ +105°C</td></tr>

          <tr><th colSpan="2">La bàn</th></tr>
          <tr><td>Module</td><td>QMC5883P</td></tr>
        </tbody>
      </table>
    </div>
  )
}
