export default function MainArticle(props) {
  return (
    <div className="main-article">
      <img className="large-image" src={props.item.img} />
      <p className="data-comments">
        <span>{props.item.date}</span>
        <span>|</span>
        <span>{props.item.commentsCount} comments</span>
      </p>
      <h2>{props.item.title}</h2>
      <p className="description">{props.item.description}</p>
      <a className="article-link" href="#">Continue reading</a>
    </div>
  )
}
