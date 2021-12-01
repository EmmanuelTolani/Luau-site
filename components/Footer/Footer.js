import Link from 'next/link'

export default function Footer() {
    return (
     <footer>
         <div className="footer-container">
         <ul className="footer_links">
        <li>
        <Link href="/" >
         <a>
             <i class="fab fa-linkedin"></i>
         </a>
         </Link>
         </li>
         <li>
         <Link href="/">
         <a >
             <i class="fab fa-facebook-f"></i>
         </a>
         </Link>
         </li>
         <li>
         <Link href="/">
         <a >
            <i class="fab fa-instagram"></i>
         </a>
         </Link>
         </li>
         <li>
         <Link href="/">
         <a >
         <i class="fab fa-twitter"></i>
         </a>
         </Link>
         </li>
         </ul>
        <div className="footer-trademark">
        <h1>
             Luau Data Corporation 2021	&copy; 
         </h1>
        </div>
        </div>
     </footer>
    );
  }
  