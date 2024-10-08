import AboutPage from "./About/page";
import ContactPage from "./Contact/page";
import HomePage from "./Home/page";
import ServicePage from "./Service/page";

import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <h1>Assignment#1 by Sir Hamza Alvi</h1>
      <ul>
        <li><Link href="/Home" style={{color:"red"}}>Home</Link></li>
        <li><Link href="/About" style={{color:"red"}}>About</Link></li>
        <li><Link href="/Contact" style={{color:"red"}}>Contact</Link></li>
        <li><Link href="/Service" style={{color:"red"}}>Service</Link></li>
      </ul>
    </div>
  );
}

export default MainPage;
