import Layout from "../components/Layout";
import Info from "../components/Info";
import Tabs from "../components/Tabs";

const Index = props => (
  <Layout>
    <div>
      <section className="how-does-work">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card card-custom">
                <div className="card-body">
                  <Info />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tabs />
    </div>
  </Layout>
);

export default Index;
