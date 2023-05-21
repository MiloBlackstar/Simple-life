import Food from '../images/food.jpg'

export default function RecentPostsSmall() {
  return (
    <div className="small-container">
      <div className="white-border">
          <h3 className="article-title">RECENT POSTS</h3>
          <img className="right-section-images" src={Food} />
          <p class="post-title">Keeping cooking simple</p>
      </div>
    </div>
  )
}