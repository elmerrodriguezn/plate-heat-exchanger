const How = () => (
  <div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="box-title">
          <h4>¿COMO FUNCIONAN LOS ACCU-THERM® DE MULLER?</h4>
        </div>

        <div className="col-md-10">
          <div className="card card-custom">
            <div className="row no-gutters">
              <div className="col-md-3 ">
                <img
                  src="../static/img/flujo-accu-therm.png"
                  className="card-img"
                  alt="Flujo Accu Therm"
                />
              </div>
              <div className="col-md-6 offset-md-1">
                <div className="card-body">
                  <p className="card-text">
                    Un intercambiador de calor de placas Accu-Therm (PHE)
                    Consiste en una serie de transferencia de calor en relieve.
                    Placas con juntas alrededor del perímetro de cada placa para
                    contener la presión y controlar el flujo de cada medio
                    Pueden ser diseñados para múltiples Fluidos o requisitos
                    térmicos en un solo cuadro. Las placas con juntas se montan
                    en un paquete, se montan en los carriles de guía superior e
                    inferior, y comprimido Entre dos marcos finales con
                    tornillos de compresión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10">
          <div className="card card-custom">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <ol>
                    <li>
                      Los fluidos entran en el PHE a través del cuadro final.
                      conexiones y se distribuyen a la Placas a través de ojos
                      de buey en las placas.
                    </li>
                    <li>
                      Directed by the gaskets, the fluid to be heated or cooled
                      flows down one side of each plate, while the heating or
                      cooling medium flows in the opposite direction on the
                      other side of the plate.
                    </li>
                    <li>
                      La diferencia de temperatura creada. por estos flujos
                      opuestos resulta en la temperatura de aproximación más
                      cercana posible para la máxima eficiencia de transferencia
                      de calor
                    </li>
                    <li>
                      The heated or cooled fluid exits the PHE through end-frame
                      connections.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <img
                  src="../static/img/funcionamiento.png"
                  className="card-img"
                  alt="Funcionamiento"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default How;
