import Posts from './Posts.jsx'

export default function RecentPostsSmall() {
  return (
    <div className="small-container">
      <div className="white-border">
        <h3 className="article-title">RECENT POSTS</h3>
      </div>
      <Posts />
      <Posts />
      <Posts />
    </div>
  )
}