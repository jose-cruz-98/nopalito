import Head from 'next/head'

import {Navigation} from '../../components/navigation.component'
import Footer from '../../components/footer.component'

import { Typography } from "@material-ui/core";


function PreventiveMaintenance(){
    // VARIABLES

    // FUNCTIONS

    // RENDER
    return(
        <React.Fragment>
            <Head>
                <title>Nopalito.io :: Mantenimiento Preventivo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation active>
                <section className="my-5"> 
                    <div className="container">
                        <div className="col-12 col-lg-8 offset-lg-2 mb-2"><Typography variant="h3" className="text-center text-line-secondary mt-3 mt-lg-2">Mantenimiento Preventivo</Typography></div>
                        <div className="mb-2">
                            <Typography variant="h5" className="mb-05" >¿Qué es el Mantenimiento Preventivo?</Typography>
                            <Typography variant="subtitle1" className="ml-1">Es el destinado a la conservación de equipos o instalaciones mediante la realización de revisión y limpieza que garanticen su buen funcionamiento y fiabilidad.</Typography>
                        </div>
                        <div className="">
                            <Typography variant="h5" className="mb-05" >Para eso ponemos a su disposición los siguientes servicios:</Typography>
                            <ul className="ml-2">
                                <li><Typography variant="subtitle1">Limpieza externa de equipo de computo.</Typography></li>
                                <li><Typography variant="subtitle1">Limpieza interna del equipo de computo.</Typography></li>
                                <li><Typography variant="subtitle1">Revisión completa del sistema.</Typography></li>
                                <li><Typography variant="subtitle1">Optimizacion del equipo de computo.</Typography></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer />
            </Navigation>
        </React.Fragment>
    )
}

export default PreventiveMaintenance;