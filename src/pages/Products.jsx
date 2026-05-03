import ProductCard from '../components/ProductCard'

export default function Products(){
  return (
    <div className="section">
      <h1>All Products</h1>
      <div className="grid">
        <ProductCard title="Rover" desc="PMnav Rover – Định vị chính xác, sử dụng linh hoạt." link="/products/rover" image="/images/rover-removebg-preview.png" />
        <ProductCard title="Base" desc="PMnav Base – Nền tảng cho hệ thống định vị chính xác" link="/products/base" image="/images/base.png" />
      </div>
    </div>
  )
}
