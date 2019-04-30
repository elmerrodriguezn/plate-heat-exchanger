import Layout from "../components/Layout";
import Link from "next/link";
import Slider from "../components/Slider";

const Thank = () => (
  <div>
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <div className="card card-custom">
              <div className="card-body">
                <div className="box-title">
                  <h1>!Muchas Gracias por contáctarnos</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Slider />
              <Link href="/">
                <a className="btn btn-primary-custom">Página de inicio</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Thank;
