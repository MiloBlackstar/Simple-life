import Life from '../images/life.jpg'

export default function MainArticle() {
  return (
    <div className="main-article">
      <img className="large-image" src={Life} />
      <p className="data-comments">
        <span>July 23, 2019</span>
        <span>3 comments</span>
        <h2>Finding simplicity in life</h2>
        <p className="description">Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>
      </p>
      <a href="#">Continue reading</a>
    </div>
  )
}
