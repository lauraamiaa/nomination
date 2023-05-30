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
                <h3 href="#">composable</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <a href="#">Build your own</a>
                  </li>
                  <li>
                    <a href="#">Inspo</a>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">charms</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <a href="#">New in</a>
                  </li>
                  <li>
                    <a href="#">Love</a>
                  </li>
                  <li>
                    <a href="#">Zodiac signs</a>
                  </li>
                  <li>
                    <a href="#">Letters</a>
                  </li>
                  <li>
                    <a href="#">Engraving</a>
                  </li>
                  <li>
                    <a href="#">Angel</a>
                  </li>
                  <li>
                    <a href="#">Devil</a>
                  </li>
                  <li>
                    <a href="#">Symbols</a>
                  </li>
                  <li>
                    <a href="#">Holidayz</a>
                  </li>
                  <li>
                    <a href="#">Collabs</a>
                  </li>
                  <li>
                    <a href="#">Spiritual</a>
                  </li>
                  <li>
                    <a href="#">Stones</a>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">collabz</h3>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">engraving</h3>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">jewellery</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <a href="#">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#">Necklaces</a>
                  </li>
                  <li>
                    <a href="#">Rings</a>
                  </li>
                  <li>
                    <a href="#">Watches</a>
                  </li>
                  <li>
                    <a href="#">Accessoires</a>
                  </li>
                </ul>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">giftcard</h3>
              </li>

              <li class="c-navbar__link">
                <h3 href="#">about</h3>
                <ul class="c-navbar__dropdown-menu">
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Craftsmanship</a>
                  </li>
                  <li>
                    <a href="#">Store Locator</a>
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
