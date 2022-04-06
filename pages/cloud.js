import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Luau Cloud Server"
      bG="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      color="white"
    >
      <Head></Head>
      <>
      <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    </AlternateLayout>
  );
}
