const Footer = () => (
  <div>
    <footer id="footer">
      <div className="container container-footer">
        <div className="row justify-content-around">
          <div className="col col-md-4">
            <p>Distribuido por:</p>
            <img
              src="../static/img/logo-lym.png"
              className="img-fluid"
              width="70"
            />
            <p>LyM de México S.A de C.V.</p>
          </div>
          <div className="col col-md-4">
            <p className="lead">Intercambiadores de Calor Personalizables</p>
            <hr />
            <p>
              Fabricando el intercambiador de calor exacto en base a tus
              especificaciónes para flujos más rápidos y procesos más
              sustentables.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
