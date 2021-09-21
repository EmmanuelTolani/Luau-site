import Head from 'next/head'
import SystemLayout from '../components/layouts/SystemLayout';

export default function Home() {
  return (
    <SystemLayout title="System"  bG=""  color="white" >
      <Head>

      </Head>
      <>
      <section className="system">
        <h2>
        The Eyes on Site&trade; System
        </h2>
        <div className="system-img">
          <img src="../src/img/website-images/system-diagram.png" />
        </div>
      </section>
      </>
    </SystemLayout>
  )
}
