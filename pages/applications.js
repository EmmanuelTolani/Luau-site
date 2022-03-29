import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Applications"
      bG="https://images.pexels.com/photos/4609259/pexels-photo-4609259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      color="white"
    >
      <Head></Head>
      <>
      <div className="application">
      <section>
          <h2>
            Eyes On Sitetm saves time, money and worry for applications
            including
          </h2>
          <p>
            Eyes On Sitetm saves time, money and worry for applications
            including: Construction Project Management Oilfield Operations Site
            Reclamation Environmental Monitoring Rural Properties Custom
            Projects{" "}
          </p>
        </section>
        <section>
          <h3>Camera Devices</h3>
        </section>
        <section>
          <h3>Application: Construction Project Management</h3>
          <div>
            <img src="../src/img/website-images/application/Construction.png" />
          </div>
          <div>
            <img src="../src/img/website-images/application/Construction1.png" />
          </div>
          <p>
            All of the pictures and video in this section were taken with Eyes
            On Sitetm equipment. The time-lapse videos are generated directly
            from the system using a built-in movie feature
          </p>
        </section>

        <section>
          <h3>Application: Oilfield Operations </h3>
          <div>
            <img src="../src/img/website-images/application/OilfieldOperations.jpg" />
          </div>
          <p>
            Nothing unusual is supposed to happen on most oilfield operating
            sites, and mostly nothing does, but leaks and failures happen
            occasionally and can have huge consequences. Here an operator checks
            on a pipeline riser. This site has a valve with remote control, and
            the state of the valve is visible in the picture (its open handle
            horizontal along the pipe), but the operator still visits
            occasionally to make sure nothing else is wrong.{" "}
          </p>
          <p>
            Other oilfield sites have problems with theft, vandalism, livestock,
            or operating parts that fail (such as pumpjack motors and pipeline
            compressors), so they need more visits for more time and money,
            mostly to discover that nothing has happened.{" "}
          </p>
        </section>
        <section>
          <h3>Application: Site Reclamation </h3>
          <div>
            <img src="../src/img/website-images/application/SiteReclamation.png" />
          </div>
          <p>
            Site reclamation is required on abandoned oilfield sites, but
            similar remediation is used for mines, old industrial sites, and
            “brownfield” construction sites. The process often takes years of
            waiting interspersed with frantic activity. In this video topsoil is
            being replaced on an oilfield site that has been excavated,
            remediated and recontoured. The final steps are topsoil and then
            re-seeding.
          </p>
          <p>
            This Eyes On Site camera was installed by the landowner. The images
            are hazy because the camera has been unattended for more than a year
            so the lens dusty from the earth moving. The field of view sways
            because the camera is mounted on a tree and the wind is blowing.
            There is no building or AC power within half a mile of this site.
          </p>
        </section>
        <section>
          <h3>Application: Environmental Monitoring</h3>
          <p>
            Many projects require an environmental baseline before work begins,
            and possibly additional monitoring during and after completion. Eyes
            On Sitetm is ideal for this application because these sites often
            have no services, and Eyes On Site doesn’t need any. A timelapse for
            any chosen time of day can be produced directly from the web
            interface.{" "}
          </p>
          <div>
            <img src="../src/img/website-images/application/EnvironmentalMonitoring.png" />
          </div>
        </section>
        <section>
          <p>
            In addition to pictures and video, Eyes On Site can report on
            sunlight, temperature, and other variables the project may require.
          </p>
          <div>
            <img src="../src/img/website-images/application/DeviceGraph.png" />
          </div>
        </section>
        <section>
          <h3>Application: Rural Properties</h3>
          <p>
            Rural properties, including farms and rural residential, have a
            constant problem with crime and intermittent policing. The problem
            is worse if the owners leave seasonally or on vacation.
          </p>
          <div>farm pics</div>
        </section>
        <section>
          <h3>Application: Special Projects</h3>
          <p>
            Eyes On Site can be customized for a huge variety of custom
            surveillance and monitoring projects
          </p>
        </section>
        <section>
          <h3>Camera Applications</h3>
          <p>
            The EOS210 camera body can be configured with 1 or 2, 8MP or 16MP
            swivel cameras, and the device includes a quad-core high-speed image
            processor that is capable of still image or video editing, as well
            as simple scene recognition.{" "}
          </p>
          <div>
            more here about custom sensors and ML more here about NASA project
            in Reno Reno pics
          </div>
        </section>
      </div>
      </>
    </AlternateLayout>
  );
}
