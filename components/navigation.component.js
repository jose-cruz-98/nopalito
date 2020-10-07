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
    IconButton,
    Collapse,
    Divider
} from '@material-ui/core'

import {
    Menu as MenuIcon,
    ExpandMore,
    ExpandLess,
    Close
} from '@material-ui/icons'

import Logo from '../styles/img/logo.svg'

import Slide from 'react-reveal/Slide'

export function Navigation({children, active=false}){
    const [isScroll  , setIsScroll] = useState(active ? true : false)
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [showServices, setShowServices] = useState(false)

    useEffect(() => {
        if(active === false){
            window.addEventListener('scroll', function(e) {
                let scroolPosition = window.scrollY;
    
                if(scroolPosition >= 100){
                    setIsScroll(true)
                }else{
                    setIsScroll(false)
                }
            })
        }
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
                            <Slide top big><Link href="/"><Button color="inherit" className="mr-05">Inicio</Button></Link></Slide>
                            <Slide top big delay={500}>
                                <Button 
                                    color="inherit" 
                                    className="mr-05" 
                                    onClick={() => setShowServices(!showServices)}
                                    endIcon={!showServices ? <ExpandMore /> : <ExpandLess />}
                                >Servicios</Button>
                            </Slide>
                            <Collapse
                                in={showServices}
                                timeout="auto"
                                unmountOnExit
                                className="sub-list-colapse"
                            >
                                <List
                                    component="div"
                                    disablePadding
                                    className="sub-list"
                                >
                                        <Link href="/services/preventive-maintenance">
                                            <ListItem className="link-navbar">
                                                <ListItemText primary="Mantenimineto Preventivo"/>
                                            </ListItem>
                                        </Link>
                                    <Divider />
                                    <Link href="/services/corrective-maintenance">
                                        <ListItem className="link-navbar">
                                            <ListItemText primary="Mantenimineto Correctivo"/>
                                        </ListItem>
                                    </Link>
                                    <Divider />
                                    <Link href="/services/websites">
                                        <ListItem className="link-navbar">
                                            <ListItemText primary="Paginas web"/>
                                        </ListItem>
                                    </Link>
                                </List>
                            </Collapse>
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
                                    className="menu-icon-bar"
                                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                >
                                    <MenuIcon /> Menu
                                </IconButton>
                            </Slide>
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Drawer 
                open={isOpenDrawer}
                anchor="left"
            >
                <div className="sidebar">
                    <List>
                        <div className="row justify-content-between pl-1">
                            <Typography variant="h3">Menu</Typography>
                            <IconButton color="inherit" onClick={() => setIsOpenDrawer(!isOpenDrawer)}><Close /></IconButton>
                        </div>
                        <ListItem 
                            component={Button} 
                            variant="text" 
                            className="text-body h"
                            onClick={() => setShowServices(!showServices)}
                            endIcon={!showServices ? <ExpandMore /> : <ExpandLess />}>
                            <ListItemText primary="Servicios"/>
                        </ListItem>
                        <Collapse
                                in={showServices}
                                timeout="auto"
                                unmountOnExit
                                className="sub-list-colapse"
                            >
                                <List
                                    component="div"
                                    disablePadding
                                    className="sub-list"
                                >
                                        <Link href="/services/preventive-maintenance">
                                            <ListItem className="link-navbar">
                                                <ListItemText primary="Mantenimineto Preventivo"/>
                                            </ListItem>
                                        </Link>
                                    <Divider />
                                    <Link href="/services/corrective-maintenance">
                                        <ListItem className="link-navbar">
                                            <ListItemText primary="Mantenimineto Correctivo"/>
                                        </ListItem>
                                    </Link>
                                    <Divider />
                                    <Link href="/services/websites">
                                        <ListItem className="link-navbar">
                                            <ListItemText primary="Paginas web"/>
                                        </ListItem>
                                    </Link>
                                </List>
                            </Collapse>
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
