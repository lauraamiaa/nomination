import React from "react";

function AnnouncementBar() {
  return (
    <div className="c-announcement-bar__outer-wrapper">
      <div className="c-announcement-bar__inner-wrapper">
        <div class="c-announcement-bar__left-content">
          <span>Store Locator</span>
        </div>
        <img
          class="c-announcement-bar__center-emoji"
          src={`${process.env.PUBLIC_URL}/ice-cream.png`}
          alt="ice cream"
        />
        <div class="c-announcement-bar__center-content">
          <span class="c-announcement-bar__center-text">
            Jewellery like ice cream, enjoyable for everyone
          </span>
        </div>
        <img
          class="c-announcement-bar__center-emoji"
          src={`${process.env.PUBLIC_URL}/ice-cream.png`}
          alt="ice cream"
        />
        <div class="c-announcement-bar__right-content">
          <div class="c-announcement-bar__shipping">
            <span>Ship to: US</span>
          </div>
          <div class="c-announcement-bar__language-switcher">
            <span>Eng</span>
          </div>
          <ul class="c-announcement-bar__header-links">
            <li class="c-announcement-bar__authorization-link">
              <span>Sign In /</span>
            </li>
            <li class="c-announcement-bar__account-creation">
              <span>Create an Account</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
