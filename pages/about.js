import Head from "next/head";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="About"
      bG="../src/img/website-images/jack.jpg"
      color="white"
    >
      <Head></Head>
      <>
        {/* <section className="our-mission">
            <h2>Our mission</h2>
            <div className="our-mission__info">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            </div>
            <div className="our-mission__img">
              <img src="https://i1.wp.com/alkiansgroup.com/wp-content/uploads/2018/11/male-placeholder-image.jpg?fit=1000%2C1000&ssl=1"></img>
            </div>
          </section> */}
        <section className="about-founders">
          <div className="about-1">
            <div className="about-img">
              <h3>Stuart Lomas</h3>
              <img src="../src/img/headshots/stuart.jpg"></img>
            </div>
            <div className="about-info">
              <p>
                Stuart Lomas is CEO and co-founder of Luau Data Corporation,
                supplying Remote Awareness products for industry and publ ic
                works. Stuart has previous experience in technology products in
                Canada, the US and Europe including at General Electric, Hewlett
                Packard, and Matrikon, now owned by HoneyWell. Stuarts
                experience with distributed operations in the global energy led
                to the creation of Eyes On Site&trade;, a simple and affordable
                remote awareness product that exploits technology convergence in
                solar energy, wireless Internet of Things, Analytics and Big
                Data, and demand for improved productivity and security in
                remote and distributed operations ranging from oil wells to
                vehivle traffic. Stuart holds a B.Sc in Computing Science, an
                MBA, and coaches entrepreneurs at the University of Alberta's
                Venture Mentoring Service.
              </p>
            </div>
          </div>
          <div className="about-2">
            <div className="about-info">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="about-img">
              <h3>Bentley</h3>
              <img src="https://i1.wp.com/alkiansgroup.com/wp-content/uploads/2018/11/male-placeholder-image.jpg?fit=1000%2C1000&ssl=1"></img>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
