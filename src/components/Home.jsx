import MainArticle from './MainArticle.jsx'
import Articles from './Articles.jsx'
import AboutMeSmall from './AboutMeSmall.jsx'
import RecentPostsSmall from './RecentPostsSmall.jsx'
import Data from "../data/articles.js"

export default function Home() {

  const data = Data.map(item => {
    return <Articles id={item.id} item={item} />
  })

  return (
    <main>
      <div className='container home'>
        <div className="left-section">
          <MainArticle />
          {data}
        </div>
        <div className="right-section">
          <AboutMeSmall />
          <RecentPostsSmall />
        </div>
      </div>
    </main>
  )
}