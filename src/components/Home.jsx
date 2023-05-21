import MainArticle from './MainArticle.jsx'
import Articles from './Articles.jsx'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <div className="left-section">
          <MainArticle />
          <Articles />
        </div>
        <div className="right-section">

        </div>
      </div>
    </main>
  )
}