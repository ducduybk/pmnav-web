import { Link } from 'react-router-dom'

export default function ProductCard({title, desc, link, image, alt}){
  return (
    <div className="card">
      {image && <img className="card-image" src={image} alt={alt || title} />}
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={link}>Chi tiết →</Link>
    </div>
  )
}
