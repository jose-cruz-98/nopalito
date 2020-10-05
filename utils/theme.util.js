import {createMuiTheme} from '@material-ui/core/styles'

export default createMuiTheme({
    overrides :{
        MuiFormHelperText : {
            root : {marginBottom : "1em"}
        },
        MuiButton : {
            root : {
                letterSpacing : "2px",
                fontFamily : "'Saira Condensed', sans-serif",
                fontWeight : "bold",
                fontSize : "1em"
            }
        }
    },
    palette : {
        primary : {
            main : "#162447"
        },
        secondary : {
            main : "#991B30"
        }
    }
})