import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20
    }
})


class Scoreboard extends Component {

    render() {
        const { result, classes } = this.props;
        return (
            <div className={classes.root}>

                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center" >
                    {!result &&
                        <Grid item xs={12} >
                            <Loader
                                type="CradleLoader"
                                color="primary"
                                height="50"
                                width="50"
                            />
                        </Grid>}
                    {result && result.map((res, index) => (
                        <React.Fragment key={res.id} >

                            <Grid item xs={2} >
                                <Typography color="primary" variant="subtitle2" gutterBottom>
                                    {index + 1}
                                </Typography>
                            </Grid>
                            <Grid item xs={5} >
                                <Typography color="primary" variant="subtitle2" gutterBottom>
                                    {res.team}
                                </Typography>
                            </Grid>
                            <Grid item xs={5} >
                                <Typography color="primary" variant="subtitle2" gutterBottom>
                                    {res.time}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>


            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {

    return {
        result: state.firestore.ordered.result,
    }
}

const fconnect = firestoreConnect([
    { collection: 'result', limit: 10, orderBy: ['time', 'asc'] },

])

export default compose(
    connect(mapStateToProps),
    fconnect)(withStyles(styles)(Scoreboard))

