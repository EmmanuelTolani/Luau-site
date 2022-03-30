import Head from "next/head";
import SystemLayout from "../components/layouts/SystemLayout";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Head></Head>
      <div className="systemlanding">
        <div className="container">
          <div className="systemlanding-container">
            <div className="title-container">
              <h2>
                {" "}
                <span>Eyes On Site&trade;</span> System monitor anywhere at
                anytime!
              </h2>
            </div>
            <div className="img-container">
              <img src="../src/img/website-images/system-d.png" />
            </div>
          </div>
        </div>
      </div>
      <section className="system-overview">
        <div className="container">
          <div className="systemoverview-container">
            <div className="left-side">
              <div className="title-container">
              <h2>
                Overview of <span>Eyes On Site&trade;</span>
              </h2>
              <p>
                <span>Eyes On Site&trade;</span> is a system of outdoor cameras
                and sensors that you can deploy anywhere and view from anywhere.
              </p>
              </div>
              <div className="allspecs"> 
              <div class="specs-container">
                <div class="spec one" >
                <i class="fa-solid fa-sun"></i>
                  <div class="spec-text">
                    <h6>Solar Powered  cameras and sensors</h6>
                    <h5>0 wires </h5>
                    </div>
                    </div>
                    <div class="spec two" >
                    <i class="fa-solid fa-tower-broadcast"></i>
                      <div class="spec-text">
                        <h6>Communication Distance</h6>
                        <h5>100m line-of-sight</h5>
                      </div>
                        </div>
                </div>
                <div class="specs-container">
                  <div class="spec three">
                  <i class="fa-solid fa-lock"></i>
                    <div class="spec-text">
                      <h6>Secure and Encrypted</h6>
                      <h5>100% privacy</h5>
                      </div>
                      </div>
                      <div class="spec four">
                      <i class="fa-solid fa-cloud"></i>
                        <div class="spec-text">
                          <h6>Managed server and storage</h6>
                          <h5>24/7 access</h5>
                          </div>
                          </div>
                      </div>
              </div>
            </div>
            <div className="system-img">
              <img src="./src/img/website-images/eyesonsite.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="systemwhy">

      </section>
      <section className="systemdetails">
        <div className="container">
        <div className="systemdetails-title">
              <h2>A Deeper Look of <span>Eyes On Site&trade;</span> </h2>
              <p>EOS Field Devices: Intelligent Cameras and Sensors </p>
            </div>
            <div className="systemdetails-icons">
            <i class="fa-solid fa-tower-broadcast"></i>
            <i class="fa-solid fa-sun"></i>
            </div>
          <div className="systemdetails-container">
          <div>
                <img src="./src/img/website-images/products/EOS2P0.jpg"/>
              </div>
              <div className="systemdetails-info">
             <ol className="a">
               <li>
                  <p>EOS Field Devices are solar-powered cameras and sensors for your
                outdoor site. </p>
               </li>
               <li>
                 <p>
                    EOS Field Devices communicate over short distances (up
                to 100m line-of-sight), forming an EOS Field Network of cooperating
                devices.{" "}
                 </p>
               </li>
               <li>
                 <p>
                 The EOS Field Network is secure and encrypted. Devices join
                automatically if they have the same owner and designated group, and
                security credentials. Devices in a Field Network signal one another
                for cooperative tasks.
                 </p>
               </li>
               <li>
                 <p>
                 Cloud-connected devices can upload data from
                their peers.{" "}
                 </p>
               </li>
             </ol>
              </div>
              <div> <img src="./src/img/website-images/products/EOS210.jpg"/></div>
          </div>
        </div>
      </section>
      <section className="systemdetails1">
        <div className="container">
        <div className="systemdetails-title">
          <h2>Secure Cloud Storage</h2>
        </div>
        <div className="systemdetails-icons">
            <i class="fa-solid fa-cloud"></i>
            <i class="fa-solid fa-lock"></i>
            </div>
        <div className="systemdetails-container">
          <div className="systemdetail">
          <div className="system-img">public cloud picture</div>
          <p>
            EOS Field Devices can upload pictures and sensor data to the cloud
            using an EOS Cloud Link. The easiest cloud storage is the EOS Cloud
            Service, which is turn-key managed and secure server and storage
            password-protected and private to your company.{" "}
          </p>
          
          </div>
          <div className="systemdetail">
          <div className="system-img">private cloud picture</div>
          <p>
            Another option is EOS Private Cloud, which is a cloud server and
            storage per-configured by Luau Data Corp and then operated by your
            own IT staff. EOS Private Cloud offers all the features of the EOS
            Cloud Service within the confines of your own data center.{" "}
          </p>
          
          </div>
          <div className="systemdetail">
          <div className="system-img">ground cloud picture</div>
          <p>
            Finally, an EOS system can operate without a cloud link using EOS
            Ground Cloud. In this configuration all pictures and sensor data
            remain in the EOS Field Network until they are retrieved by a secure
            link to a mobile device. This option allows a Field Network with no
            permanent data uplink, and history is retrieved wirelessly by
            occasional “drive-by”.{" "}
          </p>
          </div>
          </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
