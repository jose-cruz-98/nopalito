import Head from 'next/head'

import { Navigation } from '../components/navigation.component';

import {
  Typography,
  Button,
  TextField
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
              <div className="col-7 text-center">
                <Slide top>
                  <Typography variant="h2" className="text-body mb-05 mt-3">
                    Vive la <spn className="text-line-secondary">experiencia</spn> de trabajar con Nopalito<span className="text-secondary text-700">.</span>io.
                    </Typography>
                </Slide>
                <div className="banner-services text-center row justify-content-center mb-2">
                  <Slide big left delay={500}><div><span className="text-secondary">>></span> Mantenimiento preventivo</div></Slide>
                  <Slide big left delay={900}><div><span className="text-secondary">>></span> Mantenimiento correctivo</div></Slide>
                  <Slide big left delay={1300}><div><span className="text-secondary">>></span> Diseño de sitios web</div></Slide>
                  <Slide big left delay={1700}><div><span className="text-secondary">>></span> Desarrollo de aplicaciones web</div></Slide>
                  <Slide big left delay={2100}><div><span className="text-secondary">>></span> Desarrollo de aplicaciones moviles</div></Slide>
                </div>
                <Slide left big delay={2400}>
                  <div>
                    <Button
                      variant="contained"
                      endIcon={<ChevronRight />}
                      className="btn-xl col-5"
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
                <div className="row justify-content-center align-items-center"><ExpandMore /></div>
              </Jump >
            </div>
          </div>
        </section>
        <section id="general">
          <div className="container">
            <div className="col-12 text-center">
              <Slide left><Typography variant="h4">Somos una empresa con la meta de crecer.</Typography></Slide>
              <Slide right><Typography variant="h4">Brindando la mejor atencion y calidad en nuestros servicios.</Typography></Slide>
            </div>
          </div>
        </section>
        <section id="services" className="py-3">
          <div className="container">
            <Slide left><Typography variant="h3" className="mb-1 text-line-secondary col-md-9">Algunos de nuestros servicios</Typography></Slide>
            <div className="row target-services-left mb-2">
              <Slide left><div><img src={TechnicalSupportImg} alt="mantenimiento preventivo" /></div></Slide>
              <Slide right>
                <div>
                  <div className="col-12 row align-items-center">
                    <Typography variant="h4" className="text-line-secondary mb-05">Mantenimientos preventivo</Typography>
                    <Typography variant="body1">
                      Este mantenimiento es util para pevenir que tu equipo sufra algun percance en un futuro.
                      </Typography>
                    <Button
                      color="primary"
                      variant="text"
                      endIcon={<ChevronRight />}
                    >
                      Leer mas
                      </Button>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="row target-services-right mb-2">
              <Slide left>
                <div>
                  <div className="col-12 row align-items-center">
                    <Typography variant="h4" className="text-line-secondary mb-05">Mantenimientos correctivo</Typography>
                    <Typography variant="body1">
                      Este mantenimiento es util cuando se requiere cambiar o reparar algun componente que afecte el funcionamiento de su equipo.
                      </Typography>
                    <Button
                      color="primary"
                      variant="text"
                      endIcon={<ChevronRight />}
                    >
                      Leer mas
                      </Button>
                  </div>
                </div>
              </Slide>
              <Slide right><div><img src={CorrectiveTechnicalSupportImg} alt="mantenimiento preventivo" /></div></Slide>
            </div>
            <div className="row target-services-left">
              <Slide left><div><img src={WebDesing} alt="mantenimiento preventivo" /></div></Slide>
              <Slide right>
                <div>
                  <div className="col-12 row align-items-center">
                    <Typography variant="h4" className="text-line-secondary mb-05">Diseños web</Typography>
                    <Typography variant="body1">
                      Si tienes un negocio pero no tienes un paguina web, este es un buen momento para tener la tuya propia
                      </Typography>
                    <Button
                      color="primary"
                      variant="text"
                      endIcon={<ChevronRight />}
                    >
                      Leer mas
                      </Button>
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
          <div className="container">
            <div className="row">
              <div className="col-md-8 row align-items-center">
                <Slide left duration={1000}><div className="col-md-12"><Typography variant="h4" className="text-center col-md-10 mb-1 text-line-primary">Contacto</Typography></div></Slide>
                <Slide left cascade>
                  <ul className="col-md-10 text-center">
                    <li><Typography variant="h5"><LocationOn /> Av. Ancillas #557 Fraccionameinto Marimar, C.P. 28869, Manzanillo, Colima, Mexico</Typography></li>
                    <li><Typography variant="h5"><Phone /> 312-554-9255</Typography></li>
                    <li><Typography variant="h5"><Mail /> hello@nopalito.io</Typography></li>
                  </ul>
                </Slide>
              </div>
              <div className="col-md-4 contact-form">
                <Slide bottom>
                  <form className="col-12">
                    <Typography variant="h5" className="mb-1 text-center">Madanos un mensaje</Typography>
                    <div className="col-12 mb-1">
                      <TextField 
                        fullWidth
                        className="input-contact"
                        id="tName" 
                        label="¿Cual es tu nombre?" 
                        variant="outlined" />
                    </div>
                    <div className="col-12 mb-1">
                      <TextField 
                        fullWidth
                        id="tEmail" 
                        label="¿Cual es tu correo electronico?" 
                        variant="outlined" />
                    </div>
                    <div className="col-12 mb-1">
                      <TextField 
                        fullWidth
                        id="tMessage" 
                        label="¿En que podemos ayudarte?" 
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
        </section>
      </Navigation>
    </React.Fragment>
  )
}
