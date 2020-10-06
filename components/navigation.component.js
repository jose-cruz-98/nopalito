import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
    IconButton
} from '@material-ui/core'

import {Menu as MenuIcon} from '@material-ui/icons'

import Logo from '../styles/img/logo.svg'

import Slide from 'react-reveal/Slide'

export function Navigation({children}){
    const [isScroll  , setIsScroll] = useState(false)
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

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
                    <Hidden smDown mdDown>
                        <div className="row">
                            <Slide top big><Button color="inherit" className="mr-05">Inicio</Button></Slide>
                            <Slide top big delay={500}><Link href="#services" className="btn-link"><Button color="inherit" className="mr-05">Servicios</Button></Link></Slide>
                            <Slide top big delay={700}><Button color="inherit" className="mr-05">Clientes</Button></Slide>
                            <Slide top big delay={900}><Button color="inherit" className="mr-05">Acerca de nosotros</Button></Slide>
                            <Slide top big delay={1100}><Button color="inherit" className="mr-05">Galeria</Button></Slide>
                            <Slide top big delay={1300}><Button color="primary" variant="contained">Contacto</Button></Slide>
                        </div>
                    </Hidden>
                    <Hidden mdUp> 
                        <div>
                            <Slide top big>
                                <IconButton 
                                    style={{color: "#e6e6e6"}}
                                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                >
                                    <MenuIcon style={{color: "#e6e6e6",fontSize : "2em"}}/> Menu
                                </IconButton>
                            </Slide>
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Drawer 
                open={isOpenDrawer}
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                anchor="left"
            >
                <div className="sidebar">
                    <List>
                        <ListItem component={Button} variant="text" className="text-body h">
                            <ListItemText primary="Servicios"/>
                        </ListItem>
                        <ListItem component={Button} variant="text" className="text-body">
                            <ListItemText primary="Clientes"/>
                        </ListItem>
                        <ListItem component={Button} variant="text" className="text-body">
                            <ListItemText primary="Acerca de nosotros"/>
                        </ListItem>
                        <ListItem component={Button} variant="text" className="text-body">
                            <ListItemText primary="Galeria"/>
                        </ListItem>
                        <ListItem component={Button} variant="contained" color="secondary">
                            <ListItemText primary="Contacto"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <div>{children}</div>
        </React.Fragment>
    )
}
