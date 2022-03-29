import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Devices"
      bG="https://images.pexels.com/photos/4609259/pexels-photo-4609259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      color="white"
    >
      <Head></Head>
      <>
      <div className="devices">
        <section>
          <h2>
            Eyes On Sitetm devices can all join an EOS Field Network, and all
            devices are solar powered except for the EOS Powered Uplink
          </h2>
          <p>
            Device roles include camera, sensor, storage and uplink. Many Eyes
            On Sitetm devices support multiple roles.{" "}
          </p>
        </section>
        <section>
          <h3>Camera Devices</h3>
          <div>
            <img src="../src/img/website-images/products/EOS210.jpg" />
          </div>
          <p>
            Camera devices take pictures and video clips in response to a timer,
            nearby motion, user command, or a signal from a nearby EOS Field
            Device.{" "}
          </p>
        </section>
        <section>
          <h3>Sensor Devices</h3>
          <div>
            <img src="../src/img/website-images/products/EOS2P0.jpg" />
          </div>
          <p>
            Sensor devices recognize simple or complex sounds, vibration, motion
            or other inputs, and respond by signaling an event. The event can
            trigger a camera, send a message, increment a counter, or simply be
            recorded for later use.{" "}
          </p>
          <p>
            Specialty sensor devices our friend “Trevor”, who recognizes people
            or vehicles passing by on a road or trail.{" "}
          </p>
          <div>img of EOS2T0</div>
          <p>
            For special projects, Luau Data Corp has produced specialty sensors
            such as this wind and weather sensor, used in a NASA project to
            study air traffic control for urban delivery drones.{" "}
          </p>
          <div>weather puck</div>
        </section>
        <section>
          <h3>Specialty Sensors</h3>
          <p>
            Do you have a specialty sensor requirement? EOS devices can
            interface to a wide variety of external sensors and can synthesize
            custom events from internal and external sensors using Machine
            Learning. For example, an EOS Sensor can learn the normal vibration
            of a motor and raise an event if something changes, maybe due to a
            cracked bearing or loss of oil pressure.{" "}
          </p>
        </section>
        <section>
          <h3>Uplink Devices</h3>
          <p>
            Uplink devices connect an EOS Field Network to the cloud. For speed
            and redundancy, an EOS Field Network can have any number of Uplink
            Devices, or possibly none at all.{" "}
          </p>
          <p>
            Some Camera Devices include an Uplink feature, so the simplest EOS
            Field Network is a single camera. In that case, uplink is via the
            cell network.{" "}
          </p>
          <p>
            In a Field Network with no cameras, or only satellite cameras, a
            dedicated solar Uplink Device can provide cell network uplink with
            or without pictures.{" "}
          </p>
          <p>
            On an outdoor site with a powered building, such as a farmhouse or
            business office, a powered Uplink can provide a cloud uplink using
            wifi instead of the cell network, usually at a cost savings.{" "}
          </p>
          <p>
            A Field Network with no internet connection can still record
            pictures and data locally, and this data can be retrieved wirelessly
            from a cell phone or tablet using the Eyes On Sitetm app.
          </p>
        </section>
    </div>
      </>
    </AlternateLayout>
  );
}
