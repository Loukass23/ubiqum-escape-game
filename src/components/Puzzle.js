import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Avatar } from '@material-ui/core'
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
        padding: 20,
        height: '50vh'


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
            blocked: false,
            time: '',
            sec: '',
            min: '',
            secForm: '',
            minForm: '00',
            timePast: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    _handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            if (puzzles[this.props.puzzle.id + 1]) this.validate()
            else this.finish()

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
                if (!puzzles[this.props.puzzle.id + 2]) {
                    let now = new Date()
                    let timer = moment.utc(moment(now, "DD/MM/YYYY HH:mm:ss")
                        .diff(moment(this.props.team.startTime, "DD/MM/YYYY HH:mm:ss")))
                    let sec = timer.format("ss")
                    let min = timer.format("mm")
                    let timePast = parseInt(sec) + (parseInt(min) * 60)
                    this.setState({ min, sec, timePast })
                }
            }
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
            this.setState({ error: 'Wrong answer', try: tries })
        }
    }
    restore = () => {
        this.setState({ blocked: false, error: '', try: 5 })
    }
    finish = () => {
        const { min, sec, minForm, secForm } = this.state

        if (min == minForm || min == '0' + minForm && sec == secForm) {
            let now = new Date()

            let timer = moment.utc(moment(now, "DD/MM/YYYY HH:mm:ss")
                .diff(moment(this.props.team.startTime, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")

            let result = {
                time: timer,
                team: this.props.team.team.name
            }
            this.props.addResult(result)

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
            this.setState({ error: 'Wrong answer', try: tries })
        }


    }


    render() {
        const { classes, puzzle, team } = this.props
        const thisPuzzle = puzzles[puzzle.id]




        return (

            <Paper className={classes.demo} >
                {this.state.blocked &&
                    <Grid container
                        spacing={0}
                        alignItems="center"
                        justify="center"

                    >
                        <div style={{ backgroundImage: "url(https://media.giphy.com/media/V39CvtftZIveg/giphy.gif)", height: '500px' }}>
                            <Grid item xs={12}   >
                                <Typography color="error" variant="h6" gutterBottom>
                                    {this.state.error}
                                </Typography>
                            </Grid>
                        </div>
                    </Grid>

                }

                {!this.state.blocked && <Grid container
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
                            {thisPuzzle.img && <img style={{ maxWidth: 500 }} src={thisPuzzle.img} alt=""></img>}
                        </Grid>
                    </Slide>


                    {!thisPuzzle.last ?
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
                                value={this.state.name}
                            />
                        </Grid> :
                        <React.Fragment>
                            <Grid item xs={12} >
                                <Typography color="error" variant="h6" gutterBottom>
                                    {this.state.timePast} seconds
                                </Typography>
                            </Grid>
                            <Grid item xs={3} >
                                <TextField
                                    fullWidth
                                    required
                                    id="minForm"
                                    label="mm"
                                    className={classes.textField}
                                    margin="normal"
                                    type="text"
                                    onChange={this.handleChange}
                                    onKeyDown={this._handleKeyDown}
                                />
                            </Grid>
                            <Typography variant="h6" gutterBottom>
                                :
                            </Typography>
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    required
                                    id="secForm"
                                    label="ss"
                                    className={classes.textField}
                                    margin="normal"
                                    type="text"
                                    onChange={this.handleChange}
                                    onKeyDown={this._handleKeyDown}
                                />
                            </Grid>
                        </React.Fragment>}
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

                    {!thisPuzzle.last ?
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={this.validate} color="primary" className={classes.button}>
                                Hack
                         </Button>
                        </Grid> :
                        <Grid item xs={4}>
                            <Button variant="contained" onClick={this.finish} color="primary" className={classes.button}>
                                Escape
                         </Button>
                        </Grid>}



                    <Grid item xs={4} >
                        <Typography color="primary" variant="subtitle1" gutterBottom>
                            Tries Left: {this.state.try}
                        </Typography>
                    </Grid>
                </Grid>}


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
    return {
        puzzle: state.puzzle,
        team: state.team,


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Puzzle))
