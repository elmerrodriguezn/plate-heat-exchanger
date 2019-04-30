import Features from "../components/Features";
import Applications from "../components/Applications";
import How from "../components/How";
import Types from "../components/Types";
import Configurations from "./Configurations";

const Tabs = () => (
  <div>
    <ul
      className="nav nav-tabs nav-tabs-custom justify-content-center"
      id="myTab"
      role="tablist"
    >
      <li className="nav-item">
        <a
          className="nav-link active"
          id="how-tab"
          data-toggle="tab"
          href="#how"
          role="tab"
          aria-controls="how"
          aria-selected="true"
        >
          ¿Como funcionan?
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="features-tab"
          data-toggle="tab"
          href="#features"
          role="tab"
          aria-controls="features"
          aria-selected="false"
        >
          Características
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="types-tab"
          data-toggle="tab"
          href="#types"
          role="tab"
          aria-controls="types"
          aria-selected="false"
        >
          Tipos
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="configurations-tab"
          data-toggle="tab"
          href="#configurations"
          role="tab"
          aria-controls="configurations"
          aria-selected="false"
        >
          Configuraciónes
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="applications-tab"
          data-toggle="tab"
          href="#applications"
          role="tab"
          aria-controls="applications"
          aria-selected="false"
        >
          Aplicaciones
        </a>
      </li>
    </ul>
    <div className="tab-content mt-4" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="how"
        role="tabpanel"
        aria-labelledby="how-tab"
      >
        <How />
      </div>
      <div
        className="tab-pane fade"
        id="features"
        role="tabpanel"
        aria-labelledby="features-tab"
      >
        <Features />
      </div>
      <div
        className="tab-pane fade"
        id="types"
        role="tabpanel"
        aria-labelledby="types-tab"
      >
        <Types />
      </div>
      <div
        className="tab-pane fade"
        id="configurations"
        role="tabpanel"
        aria-labelledby="configurations-tab"
      >
        <Configurations />
      </div>
      <div
        className="tab-pane fade"
        id="applications"
        role="tabpanel"
        aria-labelledby="applications-tab"
      >
        <Applications />
      </div>
    </div>
  </div>
);

export default Tabs;
