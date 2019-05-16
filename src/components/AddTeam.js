import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { addTeam } from '../store/action/teamActions'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20
    },
    demo: {
        padding: 20

    },
    // textField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,

    // },
    // textArea: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    //     margin: 8

    // },
    input: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        display: 'none',
    },
    inputLabel: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 12,
    },
    progress: {

        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 20,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class AddTeam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    validate = () => {
        this.props.addTeam(this.state)
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.demo} >
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"

                >

                    <Grid item xs={12} >
                    </Grid>
                    <Grid item xs={12} >
                        <Typography color="primary" variant="h6" gutterBottom>
                            Choose Your Hacker Team Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            id="name"
                            label="Name"
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                           Start Hacking
                         </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        addTeam: (team) => dispatch(addTeam(team))

    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        // cities: state.firestore.ordered.cities,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddTeam))