function BannerComponent() {
  return (
    <div className="c-banner__outer-wrapper">
      <div className="c-banner__inner-wrapper">
        <video autoPlay loop muted className="c-banner_video">
          <source
            src={`${process.env.PUBLIC_URL}/banner-loop.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          class="c-banner__badge"
          src={`${process.env.PUBLIC_URL}/rating.png`}
          alt="rating badge"
        />
      </div>
    </div>
  );
}

export default BannerComponent;
