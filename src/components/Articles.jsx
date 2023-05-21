import Img from "../images/food.jpg"

export default function Articles() {
  return (
    <section>
      <div className="article-left-section">
        <img className="articles-images" src={Img} />
        <p>
          <span>July 19, 2019</span>
          <span>|</span>
          <span>3 comments</span>
        </p>
      </div>
      <div className="article-right-section">

      </div>
    </section>
  )
}