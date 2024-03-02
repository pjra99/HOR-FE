import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold text-red-300">High On Ranking</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead !text-red-700 ">Hey! Thanks for visiting highonranking.com</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    DigitallyInclined
                  </h2>
                </div>
                <div className="back text-center">
                  <Link legacyBehavior href="/categories/digitallyinclined">
                    <a>
                      <h3 className="h1">SEO platform - DigitallyInclined</h3>
                    </a>
                  </Link>
                  <p className="lead">let's rank with DigitallyInclined</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://i.pinimg.com/736x/c2/3f/c2/c23fc224d2e2e32fcbb80945c54e31e2.jpg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    Creating Trails
                  </h2>
                </div>
                <div className="back text-center">
                  <Link legacyBehavior href="/categories/creatingtrails">
                    <a>
                      <h3 className="h1">Create trails with CreatingTrails</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Life experiences, daily hustles and lot more....
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://t4.ftcdn.net/jpg/00/91/33/99/360_F_91339951_ZzTOrqRp3rBl0mcPIjbc8fX7UDXv1sHR.jpg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">AbhinavReads</h2>
                </div>
                <div className="back text-center">
                  <Link legacyBehavior href="/categories/abhinavreads">
                    <a>
                      <h3 className="h1">Read with AbhinavReads</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Let's develop reading habit together...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
