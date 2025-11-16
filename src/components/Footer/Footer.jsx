import './Footer.css'

function Footer(){

  return (
    <div className="footer">
      <div className="footer-links">
        <div>
          <h3>Cryptoket</h3>
          <p>Get the latest updates</p>
          <div className="input-wrapper">
            <input type="text" placeholder=" Your email" />
            <button>Email me!</button>
          </div>
        </div>

        <div className="links">
          <h3>Cryptoket</h3>
          <ul>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-socials">
        <p className="pp">Cryptoket Inc, All Rights Reserved</p>
        <div className="socials">
          <a href="">
            <img src="/instagram.png" alt="Instagram link" />
          </a>

          <a href="">
            <img src="/twitter.png" alt="Twitter link" />
          </a>

          <a href="">
            <img src="/telegram.png" alt="Telegram link" />
          </a>

          <a href="">
            <img src="/discord.png" alt="Discord link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer