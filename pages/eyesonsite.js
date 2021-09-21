import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from '../components/layouts/AlternateLayout'

export default function Home() {
  return (
    <AlternateLayout title="Eyes On Site&trade;" bG="https://images.pexels.com/photos/4609259/pexels-photo-4609259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  color="white" >
      <Head></Head>
      <>
      <section className="products">
      <div className="product-1">
            <div className="product-img">
              <img src="../src/img/website-images/map-eyes.png"></img>
            </div>
            <div className="product-info">
              <h3>Monitor and manage multiple sites remotely</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="product-info__button">Learn More</button>
            </div>
          </div>
          <div className="product-2">
            <div className="product-info">
              <h3>Wireless and Solar Powered Network of your site available on your device</h3>
              <p style={{
                textAlign: 'center'
              }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="product-info__button">Learn More</button>
            </div>
            <div className="product-img">
              <img src="https://i.stack.imgur.com/y9DpT.jpg"></img>
            </div>
          </div>
          <div className="product-3"> 
            <div className="product-img">
              <img src="../src/img/website-images/eyesonsite.png"></img>
            </div>
            <div className="product-info">
              <h3>A Complete Record of Your Site</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="product-info__button">Learn More</button>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
