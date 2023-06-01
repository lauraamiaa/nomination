function InstagramComponent() {
  return (
    <div className="c-instagram__outer-wrapper">
      <div className="c-instagram__inner-wrapper">
        <div className="c-instagram__header">
          <h2>JOIN THE FAM @NOMINATIONITALY</h2>
        </div>
        <div className="c-instagram__grid-container">
          <div className="c-instagram__first-row">
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-1.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-2.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-3.png`}
            />
          </div>
          <div className="c-instagram__second-row">
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/instagram-2.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/instagram-3.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/instagram-1.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-3.png`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-8.jpeg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/instagram-5.jpg`}
            />
            <img
              alt="instagram"
              src={`${process.env.PUBLIC_URL}/insta-10.jpeg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramComponent;
