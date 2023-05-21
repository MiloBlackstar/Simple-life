import MainArticle from './MainArticle.jsx'
import Articles from './Articles.jsx'
import AboutMeSmall from './AboutMeSmall.jsx'
import RecentPostsSmall from './RecentPostsSmall.jsx'

export default function Home() {
  return (
    <main>
      <div className='container home'>
        <div className="left-section">
          <MainArticle />
          <Articles />
          <Articles />
          <Articles />
        </div>
        <div className="right-section">
          <AboutMeSmall />
          <RecentPostsSmall />
        </div>
      </div>
    </main>
  )
}