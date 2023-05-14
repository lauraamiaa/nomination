function BannerComponent() {
  return (
    <div className="c-banner__outer-wrapper">
      <div className="c-banner__inner-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/robloxbanner-desktop.jpg`}
          alt=""
          className="c-banner_image"
        />
      </div>
    </div>
  );
}

export default BannerComponent;
