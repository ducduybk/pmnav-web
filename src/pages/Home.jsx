import ProductCard from '../components/ProductCard'

export default function Home(){
  return (
    <div>
      <section className="hero">
      </section>

      <section className="section">
        <h2>Sản Phẩm</h2>
        <div className="grid">
          <ProductCard title="Rover" desc="PMnav Rover – Định vị chính xác, sử dụng linh hoạt." link="/products/rover"  image="/images/rover-removebg-preview.png" />
          <ProductCard title="Base" desc="PMnav Base – Nền tảng cho hệ thống định vị chính xác." link="/products/base"  image="/images/base.png"/>
        </div>
      </section>
    </div>
  )
}