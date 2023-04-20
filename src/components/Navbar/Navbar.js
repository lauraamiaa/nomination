const Navbar = () => {
  return (
    <div className="c-navbar__outer-wrapper">
      <div className="c-navbar__inner-wrapper">
        <div className="c-navbar__top">
          <div className="c-navbar__logo-container">
            <svg viewBox="0 0 550 200">
              <g>
                <polygon
                  class="st0"
                  points="199.6,150.2 202.5,150.2 202.5,119.7 199.6,119.7 199.6,150.2  "
                />
                <polygon
                  class="st0"
                  points="217.7,119.7 217.7,122.2 228.3,122.2 228.3,150.2 231.2,150.2 231.2,122.2 241.9,122.2 241.9,119.7    217.7,119.7  "
                />
                <path
                  class="st0"
                  d="M258.2,138.2l6.1-15.6l5.9,15.6H258.2L258.2,138.2z M262.8,119.7l-12.3,30.5h3.1l3.7-9.5h13.9l3.7,9.5h3.1   l-12-30.5H262.8L262.8,119.7z"
                />
                <polygon
                  class="st0"
                  points="292.9,119.7 292.9,150.2 312.9,150.2 312.9,147.7 295.8,147.7 295.8,119.7 292.9,119.7  "
                />
                <polygon
                  class="st0"
                  points="331.6,137.6 331.6,150.2 334.6,150.2 334.6,137.6 346.6,119.7 343.1,119.7 333.1,135.1 323.1,119.7    319.7,119.7 331.6,137.6  "
                />
                <path
                  class="st0"
                  d="M466.2,119.7V38.3h1.2l58.4,68.5V38.4h5.5v81.4h-1.2l-58.1-68v67.9H466.2L466.2,119.7z M118.5,42.3   c-4.1,0-8,1.1-11.6,3.2c-3.7,2.1-6.5,5-8.6,8.6c-2.1,3.6-3.1,7.6-3.1,12.1c0,6.6,2.3,12.1,6.8,16.7c4.6,4.5,10.1,6.8,16.5,6.8   c4.3,0,8.3-1,11.9-3.1c3.7-2.1,6.5-4.9,8.5-8.5c2.1-3.6,3.1-7.6,3.1-12c0-4.4-1-8.4-3.1-11.9c-2-3.6-4.9-6.4-8.6-8.5   C126.6,43.3,122.6,42.3,118.5,42.3L118.5,42.3z M14.9,93.6V12.2h1.2l58.4,68.5V12.3H80v81.4h-1.2l-58.1-68v67.9H14.9L14.9,93.6z    M427.5,36.9c8.4,0,15.4,2.8,21,8.4c5.6,5.6,8.5,12.5,8.5,20.7c0,8.1-2.8,15-8.5,20.6c-5.6,5.6-12.5,8.5-20.6,8.5   c-8.2,0-15.1-2.8-20.8-8.4c-5.7-5.6-8.5-12.4-8.5-20.4c0-5.3,1.3-10.2,3.8-14.8c2.6-4.5,6.1-8.1,10.5-10.7   C417.5,38.2,422.3,36.9,427.5,36.9L427.5,36.9z M427.8,42.3c-4.1,0-8,1.1-11.6,3.2c-3.7,2.1-6.5,5-8.6,8.6   c-2.1,3.6-3.1,7.6-3.1,12.1c0,6.6,2.3,12.1,6.8,16.7c4.6,4.5,10.1,6.8,16.5,6.8c4.3,0,8.3-1,11.9-3.1c3.7-2.1,6.5-4.9,8.5-8.5   c2.1-3.6,3.1-7.6,3.1-12c0-4.4-1-8.4-3.1-11.9c-2-3.6-4.9-6.4-8.6-8.5C435.9,43.3,431.9,42.3,427.8,42.3L427.8,42.3z M383.5,38.3   h5.5v55.4h-5.5V38.3L383.5,38.3z M346.5,43.6v-5.4h30.4v5.4h-12.3v50h-5.6v-50H346.5L346.5,43.6z M323.8,50l-9.5,20.1h18.9   L323.8,50L323.8,50z M245.4,93.6V38.3h1.2l36.8,42.4V38.3h5.5v55.4h-1.2l-36.5-41.9v41.9H245.4L245.4,93.6z M227.7,38.3h5.5v55.4   h-5.5V38.3L227.7,38.3z M155.7,93.6l7.9-55.4h0.9L187,83.7l22.3-45.4h0.9l7.9,55.4h-5.5L207.3,54l-19.6,39.6h-1.4l-19.8-39.9   l-5.4,39.9H155.7L155.7,93.6z M324.4,38.3l25.8,55.4h-5.9l-8.7-18.2h-23.9l-8.7,18.2h-6.2l26.2-55.4H324.4L324.4,38.3z M118.2,36.9   c8.4,0,15.4,2.8,21,8.4c5.6,5.6,8.5,12.5,8.5,20.7c0,8.1-2.8,15-8.5,20.6c-5.6,5.6-12.5,8.5-20.6,8.5c-8.2,0-15.1-2.8-20.8-8.4   c-5.6-5.6-8.5-12.4-8.5-20.4c0-5.3,1.3-10.2,3.8-14.8c2.6-4.5,6.1-8.1,10.5-10.7C108.2,38.2,113,36.9,118.2,36.9L118.2,36.9z"
                />
              </g>
            </svg>
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
                src={`${process.env.PUBLIC_URL}/heart.png`}
                alt="heart"
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
                <a href="#">composable</a>
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
                <a href="#">charms</a>
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
                <a href="#">collabs</a>
              </li>

              <li class="c-navbar__link">
                <a href="#">engraving</a>
              </li>

              <li class="c-navbar__link">
                <a href="#">jewelry</a>
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
                <a href="#">gift card</a>
              </li>

              <li class="c-navbar__link">
                <a href="#">about</a>
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
