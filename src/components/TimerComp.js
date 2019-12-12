import React from 'react'
import Timer from 'react-compound-timer'
import Typography from '@material-ui/core/Typography';



export default function TimerComp() {
    return (
        <div>
            <Timer
                initialTime={0}
            >
                {() => (
                    <React.Fragment>
                        <div style={{ marginTop: 20, height: 180, backgroundPosition: 'bottom', backgroundImage: "url(https://media.giphy.com/media/1iTHo2aLKHaJw1DW/giphy.gif)" }}>

                            <Typography style={{ backgroundColor: 'white' }} variant="h4" gutterBottom>
                                <Timer.Minutes /> :  <Timer.Seconds />
                            </Typography>
                        </div>
                        <br />
                    </React.Fragment>
                )}
            </Timer>
        </div>
    )
}
