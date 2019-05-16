import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//import { compose, withHandlers, lifecycle } from 'recompose'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import firebase from "firebase";
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        // height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background: theme.palette.secondary.light,
        opacity: '0.7'

    },
    icon: {
        color: 'primary',
    },
});





class Scoreboard extends Component {
    state = {
        myCity: null
    }
    componentDidMount() {

        // const param = this.props.match.params.name

        // firebase
        //     .firestore()
        //     .collection("cities")
        //     .where("cityName", '==', param)
        //     .get()
        //     .then(querySnapshot => {
        //         const cities = [];
        //         querySnapshot.forEach(function (doc) {

        //             cities.push(doc.data())
        //         })
        //         const myCity = cities[0]
        //         console.log(myCity)
        //         this.setState({ myCity });

        //     })
        //     .catch(function (error) {
        //         console.log("Error getting documents: ", error);
        //     });
    }

    render() {
        const { result, classes } = this.props;
        console.log(this.props)
        return (
            <div className={classes.root}>

                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center" >
                    {!result &&
                        <Grid item xs={12} >
                            <Loader
                                //type="Plane"
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
    console.log(state.firestore)

    // const cityStr = ownProps.match.params.name
    // const itinerariesList = state.firestore.ordered.itineraries
    // const citiesList = state.firestore.ordered.cities
    // const itineraries = itinerariesList ? itinerariesList.filter(e => {
    //     return e.cityName === cityStr
    // }) : null

    // const cities = citiesList ? citiesList.filter(e => {
    //     return e.cityName === cityStr
    // }) : null

    return {
        result: state.firestore.ordered.result,

        // city: cityStr,
        // cities: cities
        // auth: state.firebase.auth,
        //         // notifications: state.firestore.ordered.notifications
    }
}
const fconnect = firestoreConnect([
    { collection: 'result', limit: 10, orderBy: ['time', 'asc'] },

    //{ collection: 'cities', orderBy: ['createdAt', 'desc'] }

    // {
    //     collection: 'cities',
    //     where: [
    //         ['cityName', '==', 'London']
    //     ]

    // }
])

//export default connect(mapStateToProps)(ItineraryChoice)
export default compose(
    connect(mapStateToProps),
    fconnect)(withStyles(styles)(Scoreboard))


// const enhance = compose(
//     withFirestore, // add firestore to props
//     lifecycle({
//         componentDidMount() {
//             console.log(this.props.match.params.name)
//             this.props.firestore.collection('cities').get() // equivalent without withHandlers
//             this.props.firestore.get('itineraries')
//         }
//     }),
//     connect((state) => ({
//         myCity: state.firestore.ordered.cities,
//         itineraries: state.firestore.ordered.itineraries
//     }))
// )

// export default enhance(ItineraryChoice)
