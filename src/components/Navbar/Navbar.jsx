import Logo from '/logo.png'
import '../Navbar/Navbar.css'

function Navbar(){

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="hushano cryptoket logo" />
      </div>

      
      <input type="search" placeholder=" Search item here" />
      <ul>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="">My Items</a>
        </li>
        <li>
          <a href="">Following</a>
        </li>
      </ul>
      <button className="create-btn">Create</button>
      <button className="connect-btn">Connect</button>
    </nav>
  );
}

export default Navbar