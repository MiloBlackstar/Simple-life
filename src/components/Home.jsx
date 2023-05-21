import MainArticle from './MainArticle.jsx'
import Articles from './Articles.jsx'
import AboutMeSmall from './AboutMeSmall.jsx'
import RecentPostsSmall from './RecentPostsSmall.jsx'
import ArticleData from "../data/articles.js"
import MainArticleData from "../data/main-article.js"

export default function Home() {

  const articles = ArticleData.map(item => {
    return <Articles id={item.id} item={item} />
  })

  const mainArticle = MainArticleData.map(item => {
    return <MainArticle id={item.id} item={item} />
  })

  return (
    <main>
      <div className='container home'>
        <div className="left-section">
          {mainArticle}
          {articles}
        </div>
        <div className="right-section">
          <AboutMeSmall />
          <RecentPostsSmall />
        </div>
      </div>
    </main>
  )
}