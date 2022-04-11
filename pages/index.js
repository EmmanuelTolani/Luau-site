import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import AlternateLayout from "../components/layouts/AlternateLayout";
import VideoHero from "../components/VideoHero/VideoHero";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Head></Head>
      <VideoHero />
      <div className="main">
        <section className="main-services">
          <div className="container">
          <h2 className="main-services__title">What we do</h2>
          <div className="main-services__container">
            {/* <div className="main-services__service">
            <div className="main-services__img-container">
              <img src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <h2 className="main-services__service-header">Oil field operations</h2>
            <p className="main-services__service-subtitle">
             Track remote environmental conditions - wildfires, floods, snowfalls, and more , without leaving your office.
            </p>
            <span>1. Reduce Windshield Time</span>
            <span>2. Track construction progress </span>
            <Link href="/">
            <a >Read More</a>
            </Link>
          </div> */}
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">
                Construction Managment
              </h2>
              <p className="main-services__service-subtitle">
                Track remote environmental conditions - wildfires, floods,
                snowfalls, and more , without leaving your office.
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Track construction progress </span>
              <Link href="/">
                <a>Read More</a>
              </Link>
            </div>
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/3614167/pexels-photo-3614167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">
                Environmental Remediation
              </h2>
              <p className="main-services__service-subtitle">
                Track the progress of your site for years remotely, prevent
                hazards .
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Quickly Respond to Hazards </span>

              <Link href="/">
                <a>Read More</a>
              </Link>
            </div>
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">Special Cases</h2>
              <p className="main-services__service-subtitle">
                Track remote environmental conditions - wildfires, floods,
                snowfalls, and more , without leaving your office.
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Track construction progress </span>
              <Link href="/">
                <a>Read More</a>
              </Link>
            </div>
          </div>
          </div>
          
        </section>
        <section className="main-benefits">
          <div className="container">
          <h2 className="main-benefits__title">Main Benefits</h2>
          <div className="main-benefits__container">
            <div className="main-benefits__benefit">
            <i class="fa-solid fa-sun"></i>
              <h3>Know what's going on Anywhere the Sun Shines</h3>
              <p>View pictures and data with no local power.
                Status and history on your phone… from anywhere the sun shines.{" "}
              </p>
            </div>
            <div className="main-benefits__benefit">
            <i class="fa-solid fa-plane-departure"></i>
              <h3>Travel Less and Respond Faster</h3>
              <p>Visit remote sites on your display, instead of traveling there.
              See problems immediately, not days later</p>
            </div>
            <div className="main-benefits__benefit">
            <i class="fa-solid fa-peace"></i>
              <h3>Peace of Mind </h3>
              <p>
                See your rural home or outdoor business from wherever you are.
                No on-site mysteries. Ongoing history explains what happened.
              </p>
            </div>
            <div className="main-benefits__benefit">
            <i class="fa-solid fa-piggy-bank"></i>
              <h3>Save Time, Save Money, Save Worry</h3>
              <p>Less Travel, Full History, and Faster Response.
             Save time and money, and always know whats been going on.
                Less Travel saves money. 
              </p>
            </div>
          </div>
          </div>
          
        </section>
        <section className="main-why">
        <div className="container">
        <div className="main-why__video">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEXg4OD////j4+Pd3d36+vri4uLw8PDs7Oz29vb09PTa2tr5+fnm5ubx8fF4aKZkAAABUUlEQVR4nO3Z246CMBRAUWjBgQ78/+8OeMVR4E0TzlovJpUY3DnBglUFAAAAAAAAAAAAAAAAAAAAAAAAAMAh5DZtq/K3T/HTclfv6YNFyf1ukro+ffssPyvX9bg9BtMg/cYalKnJz06TU93EazK/tENa+eJRm+Rxump0K0cEbXI6X0q7t189aJN8/X1p3x4Ru8nwWO7uQxO0Sbk2eax2j51a0CbVcNma3UejW2xfozbJqZley22tW+7pozapcinleUruUcI2Wa4sbgrnKLGbpPPC033yFCV0k2ben/x/dNDnwE1yM2/aXp+mlMBN5iR18/qAKW6T85S8FbfJapKwTdanJHCT9SSaaDLT5NWlSWrXpMh7tpW3g97v9CkN61LqwjUZN64lNzv/AB1O2f+/eCz7H3MspeRtJVwSAAAAAAAAAAAAAAAAAAAAAAAAAICj+gOmbQmv8zyqjAAAAABJRU5ErkJggg==" />
          </div>
          <div className="main-why__text">
            <h2>Why Luau Data</h2>
            <p>
              Luau data remote monitoring systems enable you to remotely
              monitor, access, your site from remote locations. Our system
              utilizes solar energy, cameras, and sensors 24/7 to deliver
              information about your site. It provides you with all the data
              needed to remotely manage your site without cords and extra
              equipment. Luau's reliable and cost-effecctive solutions are the
              best choice for climate change specialist, construction managment,
              governents, and environmental remediation specialist.
            </p>
          </div>
        </div>
        </section>
      </div>
    </MainLayout>
  );
}
