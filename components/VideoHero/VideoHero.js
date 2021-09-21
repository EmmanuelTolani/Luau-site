export default function VideoHero(props) {
  console.log(props.color);
  console.log(props.title);
  return (
    <div className="videohero__background">
      <div className="videohero__foreground">
        <video loop="true" autoplay="autoplay" muted>
          <source src="../src/videos/new-timelapse.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
