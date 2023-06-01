const Navbar = () => {
  return (
    <div className="c-navbar__outer-wrapper">
      <div className="c-navbar__inner-wrapper">
        <div className="c-navbar__top">
          <div className="c-navbar__logo-container">
            <img
              class=""
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
            />
          </div>
          <div className="c-navbar__icons-container">
            <div className="c-navbar__icon search">
              <img
                class=""
                src={`${process.env.PUBLIC_URL}/search.png`}
                alt="search"
              />
            </div>
            <div className="c-navbar__icon contact">
              <img
                class=""
                src={`${process.env.PUBLIC_URL}/contact.png`}
                alt="contact"
              />
            </div>
            <div className="c-navbar__icon wishlist">
              <img
                class=""
                src={`${process.env.PUBLIC_URL}/wishlist.png`}
                alt="wishlist"
              />
            </div>
            <div className="c-navbar__icon cart">
              <img
                class=""
                src={`${process.env.PUBLIC_URL}/cart.png`}
                alt="cart"
              />
            </div>
          </div>
        </div>
        <div className="c-navbar__bottom">
          <navbar className="c-navbar__navigation">
            <ul className="c-navbar__link-container">
              <li class="c-navbar__link">
                <h3>composable</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <span>Build your own</span>
                  </li>
                  <li>
                    <span>Inspo</span>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3>charms</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <span>New in</span>
                  </li>
                  <li>
                    <span>Love</span>
                  </li>
                  <li>
                    <span>Zodiac signs</span>
                  </li>
                  <li>
                    <span>Letters</span>
                  </li>
                  <li>
                    <span>Engraving</span>
                  </li>
                  <li>
                    <span>Angel</span>
                  </li>
                  <li>
                    <span>Devil</span>
                  </li>
                  <li>
                    <span>Symbols</span>
                  </li>
                  <li>
                    <span>Holidayz</span>
                  </li>
                  <li>
                    <span>Collabs</span>
                  </li>
                  <li>
                    <span>Spiritual</span>
                  </li>
                  <li>
                    <span>Stones</span>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3>collabz</h3>
              </li>

              <li class="c-navbar__link">
                <h3>engraving</h3>
              </li>

              <li class="c-navbar__link">
                <h3>jewellery</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <span>Best Sellers</span>
                  </li>
                  <li>
                    <span>Necklaces</span>
                  </li>
                  <li>
                    <span>Rings</span>
                  </li>
                  <li>
                    <span>Watches</span>
                  </li>
                  <li>
                    <span>Accessoires</span>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3>giftcard</h3>
              </li>

              <li class="c-navbar__link">
                <h3>about</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <span>Our Story</span>
                  </li>
                  <li>
                    <span>Craftsmanship</span>
                  </li>
                  <li>
                    <span>Store Locator</span>
                  </li>
                </ul>
              </li>
            </ul>
          </navbar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
