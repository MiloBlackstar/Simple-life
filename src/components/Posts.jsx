export default function Posts(props) {
  return (
    <div className="white-border">
          <img className="right-section-images" src={props.item.img} />
          <p class="post-title">{props.item.title}</p>
    </div>
  )
}