import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { nextStep } from '../store/action/puzzleActions'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20
    },
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
    }
});

class EndView extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    validate = () => {

    }

    render() {
        const { classes, team, result } = this.props
        return (
            <Paper className={classes.demo} >
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"

                >

                    <Grid item xs={12} >
                        <Typography color="primary" variant="h6" gutterBottom>
                            Congratulations {result.team}, you have successfully hacked into Ubliqum in {result.time}

                        </Typography>
                    </Grid>

                    {/* <Grid item xs={12} sm={6}>
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                            Hack
                         </Button>
                    </Grid> */}
                </Grid>
            </Paper>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        nextStep: (id) => dispatch(nextStep(id))

    }
}
const mapStateToProps = (state) => {
    return {
        team: state.team.team,
        result: state.results.result
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EndView))