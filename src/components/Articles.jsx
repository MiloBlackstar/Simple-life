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
        <h2 className="article-title">Keeping cooking simple</h2>
        <p className="description">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
        <a className="article-link">continue reading</a>
      </div>
    </section>
  )
}