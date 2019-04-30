const Slider = () => (
  <div>
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="../static/img/Accu-Therm-AT-40-Plate-Heat-Exchanger.png"
            className="d-block"
            alt="Accu Therm AT 40 Plate Heat Exchanger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../static/img/Accu-Therm-AT184-Plate-Heat-Exchanger.jpg"
            className="d-block"
            alt="Accu Therm AT184 Plate Heat Exchanger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../static/img/Accu-Therm-Plate-Heat-Exchanger-Plates-Closeup.jpg"
            className="d-block"
            alt="Accu Therm Plate Heat Exchanger Plates Closeup"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../static/img/Accu-Therm-Plate-Heat-Exchanger-Plates.jpg"
            className="d-block"
            alt="Accu Therm Plate Heat Exchanger Plates"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Slider;
