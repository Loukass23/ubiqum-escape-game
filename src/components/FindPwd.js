import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { nextStep } from '../store/action/puzzleActions'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20
    },
    demo: {
        padding: 20

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

const passwords = ['iloveyou', 'password', '12345678', '00000000', '11111111', 'aaaaaaaa', 'qwertyui']
class FindPwd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            error: '',
            try: 5,
            blocked: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.validate()
        }
    }
    validate = () => {
        let pwd = this.state.password
        if (passwords.includes(pwd.toLowerCase())) {
            this.props.nextStep(1)
        }
        else if (this.state.try === 1) {
            this.setState({
                blocked: true,
                error: 'You have been blocked by the system for 30 seconds'
            })

            setTimeout(this.restore, 30000)
        }
        else {
            let tries = this.state.try - 1
            this.setState({ error: 'wrong password', try: tries })
        }
    }
    restore = () => {
        this.setState({ blocked: false, error: '', try: 5 })
    }

    render() {
        const { classes, team } = this.props
        return (
            <Paper className={classes.demo} >
                {this.state.blocked &&
                    <Grid container
                        spacing={0}
                        alignItems="center"
                        justify="center"

                    >
                        <Grid item xs={12} >
                            <Typography color="error" variant="h6" gutterBottom>
                                {this.state.error}
                            </Typography>
                        </Grid>
                    </Grid>

                }
                {!this.state.blocked && 
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"

                >
                    <Grid item xs={10} >
                        <Typography color="primary" variant="h4" gutterBottom>
                            Password Security
                    </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Oh no! The system has prompted us with an 8 character password check with limited tries. Usually these are hard to force, but many people don't give enough attention to the strength of their passwords. Perhaps we could try to guess what it is...
                    </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                            onKeyDown={this._handleKeyDown}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography color="error" variant="h6" gutterBottom>
                            {this.state.error}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography color="primary" variant="subtitle1" gutterBottom>
                            Tries Left: {this.state.try}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                            Hack
                         </Button>
                    </Grid>
                </Grid>}
            </Paper >
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FindPwd))