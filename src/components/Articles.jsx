export default function Articles(props) {
  return (
    <section>
      <div className="article-left-section">
        <img className="articles-images" src={props.item.img} />
        <p>
          <span>{props.item.date}</span>
          <span>|</span>
          <span>{props.item.commentsCount} comments</span>
        </p>
      </div>
      <div className="article-right-section">
        <h2 className="article-title">{props.item.title}</h2>
        <p className="description">{props.item.description}</p>
        <a className="article-link">continue reading</a>
      </div>
    </section>
  )
}