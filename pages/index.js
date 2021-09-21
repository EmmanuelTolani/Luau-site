import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import AlternateLayout from '../components/layouts/AlternateLayout'
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <Head>

      </Head>
      <div>
      <section className="main-services">
         <h2 className="main-services__title"><em>EyesonSite&trade;</em> Anywhere the Sun Shines</h2>
        <div className="main-services__container">
          <div className="main-services__service">
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
          </div>
          <div className="main-services__service">
          <div className="main-services__img-container">
              <img src="https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <h2 className="main-services__service-header">Project Managment</h2>
            <p className="main-services__service-subtitle">
              Track remote environmental conditions - wildfires, floods, snowfalls, and more , without leaving your office.
            </p>
            <span>1. Reduce Windshield Time</span>
            <span>2. Track construction progress </span>
            <Link href="/">
            <a >Read More</a>
            </Link>
          </div>
          <div className="main-services__service">
          <div className="main-services__img-container">
              <img src="https://images.pexels.com/photos/3614167/pexels-photo-3614167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <h2 className="main-services__service-header">Environmental Remediation</h2>
            <p className="main-services__service-subtitle">
              Track remote environmental conditions - wildfires, floods, snowfalls, and more , without leaving your office.
            </p>
            <span>1. Reduce Windshield Time</span>
            <span>2. Track construction progress </span>
            
            <Link href="/">
            <a >Read More</a>
            </Link>
          </div>
          <div className="main-services__service">
            <div className="main-services__img-container">
              <img src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <h2 className="main-services__service-header">Special Cases</h2>
            <p className="main-services__service-subtitle">
             Track remote environmental conditions - wildfires, floods, snowfalls, and more , without leaving your office.
            </p>
            <span>1. Reduce Windshield Time</span>
            <span>2. Track construction progress </span>
            <Link href="/">
            <a >Read More</a>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </MainLayout>
  )
}
