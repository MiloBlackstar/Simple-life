import Posts from './Posts.jsx'
import Data from '../data/articles.js'

export default function RecentPostsSmall() {

  const data = Data.map(item => {
    return <Posts id={item.id} item={item} />
  })
  return (
    <div className="small-container">
      <div className="white-border">
        <h3 className="article-title">RECENT POSTS</h3>
      </div>
      {data}
    </div>
  )
}