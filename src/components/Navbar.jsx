import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className="nav">
      <div className="logo">
        <img src="/images/logo.png" alt="PMnav" />
      </div>
      <div>
        <Link to="/">Trang Chủ</Link>
        <Link to="/products">Sản Phẩm</Link>
        <Link to="/software">Phần Mềm</Link>
        <Link to="/about">Giới Thiệu</Link>
      </div>
    </div>
  )
}
