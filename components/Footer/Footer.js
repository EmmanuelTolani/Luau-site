import Link from 'next/link'

export default function Footer() {
    return (
     <footer>
         <div className="footer-container">
         <div className="footer_links">
        <Link href="/" >
         <a >
             Terms Of Services
         </a>
         </Link>
         <Link href="/">
         <a >
             Privacy Policy
         </a>
         </Link>
         </div>
        <div className="footer-trademark">
        <h1>
             Luau Data Corporation 2021	&copy; 
         </h1>
        </div>
        </div>
     </footer>
    );
  }
  