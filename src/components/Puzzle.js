import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { nextStep } from '../store/action/puzzleActions'
import { puzzles } from '../config/puzzlesUbiqum'
import moment from 'moment'
import { addResult } from '../store/action/resultAction'
import Slide from '@material-ui/core/Slide';







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
});


class Puzzle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            error: '',
            try: 5,
            solution: null,
            puzzle: null,
            timer: null,
            checked: true

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    _handleKeyDown = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
            this.validate()
        }

    }
    validate = () => {
        const solution = puzzles[this.props.puzzle.id].solution
        const puzzle = puzzles[this.props.puzzle.id]
        this.setState({ solution, puzzle })
        let name = this.state.name

        if (solution.includes(name.toLowerCase())) {
            if (!puzzles[this.props.puzzle.id + 1]) {
                let now = new Date()
                let timer = moment.utc(moment(now, "DD/MM/YYYY HH:mm:ss")
                    .diff(moment(this.props.team.startTime, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")

                let result = {
                    time: timer,
                    team: this.props.team.team.name
                }
                this.props.addResult(result)

            }
            else {
                this.setState({ try: 5, error: "", name: "" })
                this.props.nextStep(this.props.puzzle.id + 1)
            }


        }
        else if (this.state.try === 0) {
            this.setState({
                error: 'You have been blocked by the system'
            })
        }
        else {
            let tries = this.state.try - 1
            this.setState({ error: 'Wrong answer', try: tries })
        }
    }


    render() {
        const { classes, puzzle } = this.props
        const thisPuzzle = puzzles[puzzle.id]
        return (

            <Paper className={classes.demo} >
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"

                >
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                        <Grid item xs={12}  >
                            <Typography color="primary" variant="h4" gutterBottom>
                                {thisPuzzle.title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {thisPuzzle.description}
                            </Typography>
                            {thisPuzzle.img && <img src={thisPuzzle.img} alt=""></img>}
                        </Grid>
                    </Slide>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            id="name"
                            label={thisPuzzle.res}
                            className={classes.textField}
                            margin="normal"
                            type="text"
                            onChange={this.handleChange}
                            onKeyDown={this._handleKeyDown}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography color="error" variant="h6" gutterBottom>
                            {this.state.error}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography color="primary" variant="subtitle2" gutterBottom>
                            Puzzle {puzzle.id}

                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                            Hack
                         </Button>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography color="primary" variant="subtitle1" gutterBottom>
                            Tries Left: {this.state.try}
                        </Typography>
                    </Grid>



                </Grid>
            </Paper>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        nextStep: (id) => dispatch(nextStep(id)),
        addResult: (result) => dispatch(addResult(result)),

    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        puzzle: state.puzzle,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Puzzle))
