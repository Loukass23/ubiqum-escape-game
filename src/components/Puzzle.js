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
import { puzzles } from '../config/puzzlesUbiqum'



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


class Puzzle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            error: '',
            try: 5,
            solution: null

        }
    }
    componentDidMount() {
        const solution = puzzles[this.props.puzzle.id].solution
        this.setState({ solution })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    validate = () => {

        let name = this.state.name
        console.log(this.state.solution)
        if (this.state.solution.includes(name.toLowerCase())) {
            this.setState({ try: 5 })
            this.props.nextStep(this.props.puzzle.id + 1)
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
        console.log(thisPuzzle)
        return (
            <Paper className={classes.demo} >
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"

                >

                    <Grid item xs={12} >
                        <Typography color="primary" variant="h2" gutterBottom>
                            Puzzle {puzzle.id}
                        </Typography>
                        <Typography color="primary" variant="h4" gutterBottom>
                            {thisPuzzle.decription}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography color="primary" variant="h6" gutterBottom>

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
                    <Grid item xs={12} >
                        <Typography color="primary" variant="h6" gutterBottom>
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
    console.log(state)
    return {
        puzzle: state.puzzle
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Puzzle))