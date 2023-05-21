import Img from '../images/about-me.jpg'

export default function AbMeSmall() {
  return (
    <div className="small-container">
      <div className="white-border">
        <h3 className="article-title">ABOUT ME</h3>
        <img className="right-section-images" src={Img} />
        <p className="my-description">I find life better, and I'm happier, when things are nice and simple.</p>
      </div>
    </div>
  )
}