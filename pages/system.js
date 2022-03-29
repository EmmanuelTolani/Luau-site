import Head from "next/head";
import SystemLayout from "../components/layouts/SystemLayout";

export default function Home() {
  return (
    <SystemLayout title="System" bG="" color="white">
      <Head></Head>
      <>
        <section className="system">
          <h2>
            Eyes On Sitetm is a system of outdoor cameras and sensors that you
            can deploy anywhere and view from anywhere.
          </h2>
        </section>
        <section>
          <h2>EOS Field Devices: Intelligent Cameras and Sensors </h2>
          <p>
            EOS Field Devices are solar-powered cameras and sensors for your
            outdoor site. EOS Field Devices communicate over short distances (up
            to 100m line-of-sight), forming an EOS Field Network of cooperating
            devices.{" "}
          </p>
          <div className="system-img">
            <img src="../src/img/website-images/system-d.png" />
          </div>
          <p>
            The EOS Field Network is secure and encrypted. Devices join
            automatically if they have the same owner and designated group, and
            security credentials. Devices in a Field Network signal one another
            for cooperative tasks. Cloud-connected devices can upload data from
            their peers.{" "}
          </p>
        </section>
        <section>
          <h2>Secure Cloud Storage</h2>
          <p>
            EOS Field Devices can upload pictures and sensor data to the cloud
            using an EOS Cloud Link. The easiest cloud storage is the EOS Cloud
            Service, which is turn-key managed and secure server and storage
            password-protected and private to your company.{" "}
          </p>
          <div className="system-img">public cloud picture</div>
          <p>
            Another option is EOS Private Cloud, which is a cloud server and
            storage per-configured by Luau Data Corp and then operated by your
            own IT staff. EOS Private Cloud offers all the features of the EOS
            Cloud Service within the confines of your own data center.{" "}
          </p>
          <div className="system-img">private cloud picture</div>
          <p>
            Finally, an EOS system can operate without a cloud link using EOS
            Ground Cloud. In this configuration all pictures and sensor data
            remain in the EOS Field Network until they are retrieved by a secure
            link to a mobile device. This option allows a Field Network with no
            permanent data uplink, and history is retrieved wirelessly by
            occasional “drive-by”.{" "}
          </p>
          <div className="system-img">ground cloud picture</div>
        </section>
        <section>
          <h2>Data Display: Your Mobile Screen</h2>
          <div className="system-img">desktop pictures</div>
        </section>
      </>
    </SystemLayout>
  );
}
