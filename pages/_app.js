import {ThemeProvider} from '@material-ui/core/styles'
import Theme from '../utils/theme.util'

import '../styles/globals.style.scss'
import '../styles/bootstrap-grid.style.css'



function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
