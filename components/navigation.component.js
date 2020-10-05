import React,{useState, useEffect} from 'react'
import Head from 'next/head'

import { 
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core'

import Logo from '../styles/img/logo.svg'

import Slide from 'react-reveal/Slide'

export function Navigation({children}){
    const [isScroll  , setIsScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            let scroolPosition = window.scrollY;

            if(scroolPosition >= 100){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])

    // RENDER
    return(
        <React.Fragment>
            <Head><meta name="viewport" content="initial-scale=1.0, width=device-width" /></Head>
            <AppBar position="fixed" className={`nav-bar ${isScroll ? "active" : ""}`}>
                <Toolbar className="col align-self-center">
                    <Typography variant="h4" style={{flexGrow:1}}>
                        <Slide top big>
                            <div className="nav-bar-logo">
                                <div><img src={Logo} alt="Logo"/></div>
                                <div>Nopalito<span className="text-secondary">.</span>io</div>
                            </div>
                        </Slide>
                    </Typography>
                    <Slide top big cascade>
                        <div>
                            <Button color="inherit" className="mr-05">Inicio</Button>
                            <Button color="inherit" className="mr-05">Servicios</Button>
                            <Button color="inherit" className="mr-05">Clientes</Button>
                            <Button color="inherit" className="mr-05">Acerca de nosotros</Button>
                            <Button color="inherit" className="mr-05">Galeria</Button>
                            <Button color="primary" variant="contained">Contacto</Button>
                        </div>
                    </Slide>
                </Toolbar>
            </AppBar>
            <div>{children}</div>
        </React.Fragment>
    )
}
