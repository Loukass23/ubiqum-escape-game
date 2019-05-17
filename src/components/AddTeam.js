import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { addTeam } from '../store/action/teamActions'


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

class AddTeam extends Component {
    constructor(props) {
        super(props)
        this.form = React.createRef();
        this.validate = this.validate.bind(this);

        this.state = {
            name: ''
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
        if (this.form.current.reportValidity()) {
            this.props.addTeam(this.state)
        }

    }

    render() {
        const { classes } = this.props
        return (
            <form ref={this.form}>
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
                                onKeyDown={this._handleKeyDown}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                                Start Hacking
                         </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
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


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddTeam))