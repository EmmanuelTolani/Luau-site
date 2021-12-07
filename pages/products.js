import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from '../components/layouts/AlternateLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <AlternateLayout title="Products" bG="../src/img/website-images/mcdougall.jpeg"  color="white" >
      <Head></Head>
      <>
        <section className="products">
          <div className="product-1">
            <div className="product-img">
              <img src="../src/img/website-images/DSCF1880.jpg"></img>
            </div>
            <div className="product-info">
              <h3>Solar Camera EOS210</h3>
              <p>
                A Camera unit with connection to the cell network. Available in two versions master and satelite. 
              </p>
              <div className="product-info__button-container">
              <button className="product-info__button">Learn More</button>
              <Link href="https://luau-data.myshopify.com/products/eos200-field-unit">
              <button className="product-info__button1">Buy Now</button>
              </Link>
              </div>
            </div>
          </div>
          <div className="product-2">
            <div className="product-info">
              <h3>Motion Sensor EOS2PO</h3>
              <p style={{
                textAlign: 'center'
              }}>
                This unit can recognize motion and other special cases.
              </p>
              <div className="product-info__button-container">
              <button className="product-info__button">Learn More</button>
              <Link href="https://luau-data.myshopify.com/products/eos200-field-unit">
              <button className="product-info__button1">Buy Now</button>
              </Link>
              </div>
            </div>
            <div className="product-img">
              <img src="../src/img/website-images/DSCF1916.jpg"></img>
            </div>
          </div>
          <div className="product-3">
            <div className="product-img">
              <img src="../src/img/website-images/DSCF1890.jpg"></img>
            </div>
            <div className="product-info">
              <h3>Proximity Sensor EOS2TO</h3>
              <p>
                This unit can recognize motion and can light a scene for night time pictures
              </p>
              <div className="product-info__button-container">
              <button className="product-info__button">Learn More</button>
              <Link href="https://luau-data.myshopify.com/products/eos200-field-unit">
              <button className="product-info__button1">Buy Now</button>
              </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
