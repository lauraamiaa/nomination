function InstagramComponent() {
  return (
    <div className="c-instagram__outer-wrapper">
      <div className="c-instagram__inner-wrapper">
        <div className="c-instagram__header">
          <h2>JOIN THE FAM @NOMINATIONITALY</h2>
        </div>
        <div className="c-instagram__grid-container">
          <div className="c-instagram__grid-column">
            <img
              src={`${process.env.PUBLIC_URL}/instagram-1.jpg`}
              alt=""
              className="c-instagram__instagram-1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/instagram-2.jpg`}
              alt=""
              className="c-instagram__instagram-2"
            />
          </div>
          <div className="c-instagram__grid-column">
            <img
              src={`${process.env.PUBLIC_URL}/instagram-3.jpg`}
              alt=""
              className="c-instagram__instagram-3"
            />
            <img
              src={`${process.env.PUBLIC_URL}/instagram-4.jpeg`}
              alt=""
              className="c-instagram__instagram-4"
            />
          </div>
          <div className="c-instagram__grid-column">
            <img
              src={`${process.env.PUBLIC_URL}/instagram-5.jpg`}
              alt=""
              className="c-instagram__instagram-5"
            />
            <img
              src={`${process.env.PUBLIC_URL}/instagram-6.jpg`}
              alt=""
              className="c-instagram__instagram-6"
            />
          </div>
          <div className="c-instagram__grid-column">
            <img
              src={`${process.env.PUBLIC_URL}/instagram-7.jpeg`}
              alt=""
              className="c-instagram__instagram-7"
            />
            <img
              src={`${process.env.PUBLIC_URL}/instagram-8.png`}
              alt=""
              className="c-instagram__instagram-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramComponent;
