import Head from 'next/head'

import { Navigation } from '../components/navigation.component';
import Footer from '../components/footer.component'

import {
  Typography,
  Button,
  TextField,
  Hidden
} from '@material-ui/core'

import {
  ExpandMore,
  ChevronRight,
  LocationOn,
  Phone,
  Mail,
  Send
} from '@material-ui/icons'

import Jump from 'react-reveal/Jump'
import Slide from 'react-reveal/Slide'

import TechnicalSupportImg from '../styles/img/technical-support.jpg'
import CorrectiveTechnicalSupportImg from '../styles/img/corrective-technical-support.jpg'
import WebDesing from '../styles/img/web-desing.jpg'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Nopalito.io :: Inicio</title>
      </Head>
      <Navigation>
        <section id="banner">
          <div>
            <div className="col-12 h-80 row justify-content-center align-items-center">
              <div className="col-10 col-md-7  text-center">
                <Slide top>
                  <Typography variant="h2" className="text-body mb-md-05 mb-1 mt-3">
                    Vive la <spn className="text-line-secondary">experiencia</spn> de trabajar con Nopalito<span className="text-secondary text-700">.</span>io.
                    </Typography>
                </Slide>
                <Hidden xsDown>
                  <div className="banner-services text-center row justify-content-center mb-2">
                    <Slide big left delay={500}><div><span className="text-secondary">>></span> Mantenimiento preventivo</div></Slide>
                    <Slide big left delay={900}><div><span className="text-secondary">>></span> Mantenimiento correctivo</div></Slide>
                    <Slide big left delay={1300}><div><span className="text-secondary">>></span> Diseño de sitios web</div></Slide>
                    <Slide big left delay={1700}><div><span className="text-secondary">>></span> Desarrollo de aplicaciones web</div></Slide>
                    <Slide big left delay={2100}><div><span className="text-secondary">>></span> Desarrollo de aplicaciones moviles</div></Slide>
                  </div>
                </Hidden>
                <Slide left big delay={2400}>
                  <div>
                    <Button
                      variant="contained"
                      endIcon={<ChevronRight />}
                      className="btn-xl col-md-5 col-12"
                      color="primary"
                    >
                      Contactanos
                        </Button>
                  </div>
                </Slide>
              </div>
            </div>
            <div className="col-12 h-20 btn-go-down row justify-content-center align-items-center">
              <Jump delay={3100} forever duration={2000}>
                <div className="row justify-content-center align-items-center mb-5 mb-md-05"><ExpandMore /></div>
              </Jump >
            </div>
          </div>
        </section>
        <section id="general">
          <div className="container">
            <div className="col-12 text-center">
              <Slide left><Typography variant="h4" className="mb-05 m-md-0">Somos una empresa con la meta de crecer.</Typography></Slide>
              <Slide right><Typography variant="h4">Brindando la mejor atencion y calidad en nuestros servicios.</Typography></Slide>
            </div>
          </div>
        </section>
        <section id="services" className="py-3">
          <div className="container">
            <Slide left><Typography variant="h3" className="mb-1 text-line-secondary col-md-10 col-12">Algunos de nuestros servicios ...</Typography></Slide>
            <div className="row card-services card-services-left mb-2">
              <Slide left>
                <div className="card-services-img">
                  <img src={TechnicalSupportImg} alt="mantenimiento preventivo" />
                </div>
              </Slide>
              <Slide right>
                <div className="card-services-text row justify-content-center align-items-center">
                  <div className="col-12">
                    <Typography variant="h4" className="text-line-secondary mb-05">Mantenimiento preventivo</Typography>
                    <Typography variant="body1">
                      Este mantenimiento es util para pevenir que tu equipo sufra algun percance en un futuro.
                    </Typography>
                    <div className="row justify-content-center align-items-center">
                      <Button
                        color="primary"
                        variant="text"
                        endIcon={<ChevronRight />}
                      >
                        Leer mas
                        </Button>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="row card-services card-services-right mb-2">
              <Slide right>
                <div className="card-services-img">
                  <img src={CorrectiveTechnicalSupportImg} alt="mantenimiento preventivo" />
                </div>
              </Slide>
              <Slide left>
                <div className="card-services-text row justify-content-center align-items-center">
                  <div className="col-12">
                    <Typography variant="h4" className="text-line-secondary mb-05">Mantenimiento correctivo</Typography>
                    <Typography variant="body1">
                      Este mantenimiento es util cuando se requiere cambiar o reparar algun componente que afecte el funcionamiento de su equipo.
                    </Typography>
                    <div className="row justify-content-center align-items-center">
                      <Button
                        color="primary"
                        variant="text"
                        endIcon={<ChevronRight />}
                      >
                        Leer mas
                        </Button>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="row card-services card-services-left">
              <Slide left>
                <div className="card-services-img">
                  <img src={WebDesing} alt="mantenimiento preventivo" />
                </div>
              </Slide>
              <Slide right>
                <div className="card-services-text row justify-content-center align-items-center">
                  <div className="col-12">
                    <Typography variant="h4" className="text-line-secondary mb-05">Paginas web</Typography>
                    <Typography variant="body1">
                      Si tienes un negocio pero no tienes un pagina web, este es un buen momento para tener la tuya.
                      </Typography>
                    <div className="row justify-content-center align-items-center">
                      <Button
                        color="primary"
                        variant="text"
                        endIcon={<ChevronRight />}
                      >
                        Leer mas
                        </Button>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="row justify-content-center mt-3">
              <Slide bottom>
                <Button
                  color="primary"
                  variant="text"
                  endIcon={<ChevronRight />}
                >
                  Ver todos los servicios
                  </Button>
              </Slide>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="general-contact"></div>
          <div className="container">
            <div className="row index-contact">
              <div className="col-md-6 col-lg-8 row align-items-center mt-2">
                <Slide left duration={1000}><div className="col-md-12"><Typography variant="h4" className="text-center col-md-10 text-line-primary">Contacto</Typography></div></Slide>
                <Slide left cascade>
                  <ul className="col-md-10 text-center">
                    <li><Typography variant="h5"><LocationOn /> Av. Ancillas #557 Fraccionameinto Marimar, C.P. 28869, Manzanillo, Colima, Mexico</Typography></li>
                    <li><Typography variant="h5"><Phone /> 312-554-9255</Typography></li>
                    <li><Typography variant="h5"><Mail /> hello@nopalito.io</Typography></li>
                  </ul>
                </Slide>
              </div>
              <div className="col-md-6 col-lg-4 contact-form">
                <Slide bottom>
                  <form className="col-12">
                    <Typography variant="h5" className="mb-1 text-center">Mándanos un mensaje</Typography>
                    <div className="col-12 mb-1">
                      <TextField
                        fullWidth
                        className="input-contact"
                        id="tName"
                        label="¿Cuál es tu nombre?"
                        variant="outlined" />
                    </div>
                    <div className="col-12 mb-1">
                      <TextField
                        fullWidth
                        id="tEmail"
                        label="¿Cuál es tu correo electronico?"
                        variant="outlined" />
                    </div>
                    <div className="col-12 mb-1">
                      <TextField
                        fullWidth
                        id="tMessage"
                        label="¿En qué podemos ayudarte?"
                        variant="outlined" />
                    </div>
                    <div className="text-center">
                      <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<Send />}
                      >
                        Enviar
                      </Button>
                    </div>
                  </form>
                </Slide>
              </div>
            </div>
          </div>
          <Slide bottom>
            <div className="row map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.279816501001!2d-104.32348161798078!3d19.122058628969192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d65d5a4e48d7%3A0x9fb2ef6aa090c3e2!2sAncillas%20576%2C%20Marimar%2C%20Manzanillo%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1601947672908!5m2!1ses-419!2smx" style={{ border: 0 }} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </Slide>
        </section>
        <Footer />
      </Navigation>
    </React.Fragment>
  )
}
