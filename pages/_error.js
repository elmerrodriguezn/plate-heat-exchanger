import Layout from "../components/Layout";
import Link from "next/link";
import Slider from "../components/Slider";

import React from "react";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card card-custom">
                <div className="card-body">
                  <div className="box-title">
                    <h1>
                      {this.props.statusCode
                        ? `Lo sentimos un error ${
                            this.props.statusCode
                          } ha ocurrido`
                        : "Un error a ocurrido en el cliente"}
                    </h1>
                    <Link href="/">
                      <a className="btn btn-primary-custom mt-4">
                        Página de inicio
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 />
      </Layout>
    );
  }
}

export default Error;
