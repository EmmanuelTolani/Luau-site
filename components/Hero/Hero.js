export default function Hero(props) {
    console.log(props.color)
    console.log(props.title)
    return (
      <div className="hero" style={{
          backgroundImage: `url(${props.bG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center',
          color: `${props.color}`,
          height: '550px',
          width: "100vw"
      }
      }>
        <h1>{props.title}</h1>
      </div>
    );
  }
  