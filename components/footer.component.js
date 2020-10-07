import Slide from 'react-reveal/Slide'
import Link from 'next/link'

import {
    Typography
  } from '@material-ui/core'
  
  import {
    Facebook,
    LocationOn,
    WhatsApp,
    Mail,
    Link as LinkIcon
  } from '@material-ui/icons'

export default function Footer(){
    // FUNCTIONS

    // RENDER
    return(
        <footer>
            <Slide bottom>
                <div className="col-12 pt-2 pb-1"><Typography variant="h6" className="text-center">&#62; Original like innovative &#60;</Typography> </div>
            </Slide>
            <div className="row justify-content-center my-1">
                <Slide left cascade>
                    <div className="row">
                        <div>
                            <a href="https://www.facebook.com/Nopalitoio-108502050995321" target="_blank" className="social-icons"><Facebook style={{ fontSize: "2.5em" }} /></a>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <Slide right>
                        <div className="col-12 mb-05"><Typography variant="h6">Dirección</Typography></div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><LocationOn /></div>
                            <div className="col-11"><Typography variant="body1">Av. Ancillas #557 Fraccionameinto Marimar, C.P. 28869, Manzanillo, Colima, Mexico</Typography></div>
                        </div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><WhatsApp /></div>
                            <div className="col-11"><Typography variant="body1"><a href="https://api.whatsapp.com/send?phone=3125549255" className="link-text-body">312-554-9255</a></Typography></div>
                        </div>
                        <div className="row mb-1">
                            <div className="col-1 row align-items-center"><Mail /></div>
                            <div className="col-11"><Typography variant="body1">hello@nopalito.io</Typography></div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-4 mt-1 m-lg-0 divider-left-secondary">
                    <Slide right>
                        <div className="col-12 mb-05"><Typography variant="h6">Servicios</Typography></div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><LinkIcon /></div>
                            <div className="col-11"><Typography variant="body1"><Link href="/services/preventive-maintenance"><a className="link-text-body">Mantenimiento preventivo</a></Link></Typography></div>
                        </div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><LinkIcon /></div>
                            <div className="col-11"><Typography variant="body1"><Link href="/services/preventive-corrective"><a className="link-text-body">Mantenimiento correctivo</a></Link></Typography></div>
                        </div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><LinkIcon /></div>
                            <div className="col-11"><Typography variant="body1"><Link href="/services/website"><a className="link-text-body">Paginas web</a></Link></Typography></div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-4 mt-1 m-lg-0 divider-left-secondary">
                    <Slide right>
                        <div className="col-12 mb-05"><Typography variant="h6">Links</Typography></div>
                        <div className="row mb-05">
                            <div className="col-1 row align-items-center"><LinkIcon /></div>
                            <div className="col-11"><Typography variant="body1"><Link href="/services/preventive-maintenance"><a className="link-text-body">Acerca de nosotros</a></Link></Typography></div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="bg-primary-dark row py-2 justify-content-center mt-2">
                <Typography variant="body2" className="text-center">&copy; 2020 Todos los derechos recervados. Powered by Nopalito<span className="text-secondary">.</span>io</Typography>
            </div>
        </footer>
    )
}
