const Configurations = () => (
  <div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="box-title">
            <h3>CONFIGURACIÓNES</h3>
          </div>
          <p>
            Mientras que los fluidos calientes y fríos fluyen en direcciones
            opuestas a través de una sola placa, el patrón de flujo Entre los
            platos puede variar. Los patrones de flujo del intercambiador de
            calor de placas pueden ser simples o de varias pasadas.
          </p>
        </div>

        <div className="col-md-10">
          <div className="card card-custom">
            <div className="row no-gutters">
              <div className="col-md-5 ">
                <div className="card-body">
                  <h5 className="card-title card-title-custom ">PASE ÚNICO</h5>
                  <p className="card-text">
                    Una disposición de una sola pasada significa que cada fluido
                    fluye en la misma dirección respectiva a través de todos los
                    Placas en la unidad. Las unidades de una sola pasada son
                    adecuadas para la mayoría de las aplicaciones
                  </p>
                </div>
              </div>
              <div className="col-md-6 offset-md-1">
                <img src="../static/img/unico-pase.png" className="card-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10">
          <div className="card card-custom">
            <div className="row no-gutters">
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title card-title-custom ">
                    PASE MÚLTIPLE
                  </h5>
                  <p className="card-text">
                    Una disposición de múltiples pasadas está diseñada para que
                    los fluidos puedan cambiar sus respectivas direcciones de
                    flujo. Las temperaturas extremadamente cercanas o las
                    grandes diferencias de temperatura pueden requerir un paso
                    múltiple configuración.
                  </p>
                </div>
              </div>
              <div className="col-md-6 offset-md-1">
                <img src="../static/img/multi-pase.png" className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Configurations;
