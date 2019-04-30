import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Link from "next/link";

const Contact = () => (
  <Layout>
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="box-title">
              <h3>Contáctanos</h3>
            </div>
          </div>

          <div className="col-md-6">
            <p>
              Nuestro equipo de ingenieros se pondrá en contacto contigo para
              encontrar la mejor solucion en tranferencia de calor.
            </p>
            <form method="POST" action="send">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  className="form-control form-control-custom"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  className="form-control form-control-custom"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Teléfono</label>
                <input
                  className="form-control form-control-custom"
                  type="phone"
                  name="phone"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  className="form-control form-control-custom"
                  type="text"
                  name="message"
                  required
                />
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary-custom">
                  Enviar
                </button>
                <Link href="/">
                  <a className="btn btn-primary-custom ml-4">Regresar</a>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
