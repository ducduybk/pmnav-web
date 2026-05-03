export default function Base(){
  return (
    <div className="section">
      <h1>PMnav Base</h1>
      <p>PMnav Base – Nền tảng cho hệ thống định vị chính xác.</p>

      <img className="product-image" src="/images/base.png" alt="PMnav base" />

      <h2>Thông số kỹ thuật</h2>

      <table className="spec-table">
        <tbody>

          <tr><th colSpan="2">GNSS</th></tr>
          <tr><td>Số kênh</td><td>400 kênh theo dõi với engine tìm kiếm chuyên dụng</td></tr>
          <tr><td>Tần số L1</td><td>
            GPS L1, Beidou B1I/B1C, Galileo E1, QZSS L1, GLONASS G1
          </td></tr>
          <tr><td>Tần số L5</td><td>
            GPS L5, Beidou B2I/B2A/B2B, Galileo E5, QZSS L5, IRNSS L5
          </td></tr>
          <tr><td>Tần số L2</td><td>
            GPS L2C, Beidou B3I, GLONASS G2, Galileo E6, QZSS L6
          </td></tr>

          <tr><td>Độ nhạy khởi động nguội</td><td>-148 dBm</td></tr>
          <tr><td>Độ nhạy bắt lại</td><td>-159 dBm</td></tr>
          <tr><td>Độ nhạy theo dõi</td><td>-165 dBm</td></tr>

          <tr><td>Tần số cập nhật</td><td>1 – 20 Hz</td></tr>
          <tr><td>Độ chính xác vị trí ngang</td><td>1 m CEP</td></tr>
          <tr><td>Độ chính xác vận tốc</td><td>0.01 m/s CEP</td></tr>

          <tr><td>Thời gian khởi động nguội</td><td>26 s</td></tr>
          <tr><td>Thời gian định vị lần đầu (AGNS)</td><td>1.5 s</td></tr>
          <tr><td>Độ chính xác PPS</td><td>20 ns</td></tr>

          <tr><td>Hỗ trợ</td><td>
            SBAS, AGPS, RTCM3.x, NMEA 0183 v4.00 / 4.10
          </td></tr>

          <tr><th colSpan="2">Nguồn điện</th></tr>
          <tr><td>Điện áp</td><td>3.0 – 3.6V (VBAT)</td></tr>
          <tr><td>Công suất tiêu thụ</td><td>Tối đa 50 mA @ 3.3V (không tính anten)</td></tr>

          <tr><th colSpan="2">Giao tiếp</th></tr>
          <tr><td>UART</td><td>2 cổng UART (1 cổng hỗ trợ chức năng download)</td></tr>
          <tr><td>I2C</td><td>1 cổng I2C</td></tr>

          <tr><th colSpan="2">Kích thước & môi trường</th></tr>
          <tr><td>Kích thước</td><td>17 × 22 × 2.5 mm</td></tr>
          <tr><td>Nhiệt độ hoạt động</td><td>-40°C ~ +85°C</td></tr>

        </tbody>
      </table>
    </div>
  )
}
