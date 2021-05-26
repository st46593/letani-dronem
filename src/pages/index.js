import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ModalVideo from "react-modal-video"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(e) {
    e.preventDefault()
    this.setModal(true)
  }

  setModal(isShown) {
    this.setState({
      modalShow: isShown
    })
  }

  render() {
    return (
      <>
      <Layout>
      <SEO title="Home" />
        <section className="page-section bg-secondary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  Natočíme pro Vás video dle Vašich představ!
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Vyberte si z našich služeb a my pro Vás zajistíme ten nejlepší
                  výsledek!
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Nabízíme!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Nabízíme</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-city text-secondary mb-4"></i>
                  <h3 className="h4 mb-2">Prezentační videa</h3>
                  <p className="text-muted mb-0">
                    Videa měst, obcí, nebo turistických pamětihodností!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-home text-secondary mb-4"></i>
                  <h3 className="h4 mb-2">Monitoring objektů</h3>
                  <p className="text-muted mb-0">
                    Monitoring a kontrola objektů, nemovitostí a těžko
                    dostupných míst.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-users text-secondary mb-4"></i>
                  <h3 className="h4 mb-2">Společenské akce</h3>
                  <p className="text-muted mb-0">
                    Obecní slavnosti, slavnostní průvody, ale také svatby a
                    narozeninové oslavy!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-video text-secondary mb-4"></i>
                  <h3 className="h4 mb-2">Promo videa</h3>
                  <p className="text-muted mb-0">
                    Propagační videa společností, firem a podniků.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6.jpg"
                  onClick={this.handlePortfolioClick.bind(this)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ModalVideo channel='youtube' autoplay isOpen={this.state.modalShow} videoId="UxPkK8gW0hs" onClose={() => this.setModal(false)} />
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Kontaktujte nás!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Zaujala Vás naše nabídka? Neváhajte a zanechte nám zprávu,
                  nebo nám zavolejte!
                </p>
              </div>
            </div>
            <div className="row">
              <form className="col-lg-12">
                <div className="form-group row justify-content-center">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Emailová adresa"
                  />
                </div>
                <div class="form-group row justify-content-center">
                  <label for="exampleInputPassword1">Vaše zpráva</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Vaše zpráva"
                  />
                </div>
                <div class="row justify-content-center">
                  <button type="submit" class="btn btn-secondary mb-5">
                    Odeslat
                  </button>
                </div>
              </form>
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+420 722 016 026</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:info@nadhlavou.cz">
                  info@nadhlavou.cz
                </a>
              </div>
            </div>
          </div>
        </section>      
      </Layout>
      </>
    ) 
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
