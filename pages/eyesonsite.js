import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <AlternateLayout
      title="Eyes On Site&trade;"
      bG="https://images.pexels.com/photos/4609259/pexels-photo-4609259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      color="white"
    >
      <Head></Head>
      <>
        {/* <section className="field-tested">
          <h2>Field tested since 2016</h2>
          <div>left arrow</div>
          <div>
            <img></img>
            <p>
              <span>Trusted by: </span>Parks Canada Civil Infrastructure
            </p>
            <div>right arrow</div>
          </div>
        </section> */}
        <section className="products">
          <div className="product-1">
            <div className="product-img">
              <img src="../src/img/website-images/orange-derrek.jpg"></img>
            </div>
            <div className="product-info">
              <h2>
                Surveillance and Monitoring for outdoor sites with no electrical
                power.
              </h2>
              <p>
                solar cameras and sensors run day and night no external
                connections, mount on any post, rail or tree branch all weather,
                all seasons, works in rain, snow, hail or blistering heat
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="product-2">
            <div className="product-info">
              <h2>Solar-powered cameras and sensors connected to the cloud.</h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                See your outdoor site on any web browser or mobile device Get
                pictures and video clips triggered by time, nearby motion, or
                defined sensor events Record sensor data including motion,
                sunlight, temperature, and specialty sensors
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="product-img">
              <img src="../src/img/website-images/four-bridges.jpg"></img>
            </div>
          </div>
          <div className="product-2">
            <div className="product-img">
              <img src="../src/img/website-images/eyesonsite.png"></img>
            </div>
            <div className="product-info">
              <h2>A sensor network wherever you put it! </h2>
              <p>
                Cameras and sensors self-organize to move their data Choose
                zero, one or multiple cloud uplinks per site Uplink to the cloud
                via cell network, local wifi, or drive-by wireless to a mobile
                device
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="product-3">
            <div className="product-info">
              <h2>Scalable! Manage sites and regions geographically </h2>
              <p>
                Devices locate and map themselves by GPS Manage any number of
                devices by list or map Define your own geographical regions and
                sites
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="product-img">
              <img src="../src/img/website-images/map-eyes.png"></img>
            </div>
          </div>
          <div className="product-2">
            <div className="product-img">
              <img src="../src/img/website-images/turn-key-split.jpg"></img>
            </div>
            <div className="product-info">
              <h2>Safe, Secure and Reliable</h2>
              <p>
                Wireless data is DES encrypted Devices validate each other with
                PKI key pairs For hazardous sites, Safety Certified devices
                available for Zone 1 and Zone 2
              </p>
              <button className="product-info__button"><Link href="/system">
             <a>Learn More</a> 
              </Link></button>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
