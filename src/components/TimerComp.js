import React from 'react'
import Timer from 'react-compound-timer'
import Typography from '@material-ui/core/Typography';



export default function TimerComp() {
    return (
        <div>
            <Timer
                initialTime={0}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div>
                            <Typography color="primary" variant="h6" gutterBottom>
                                <Timer.Minutes /> :  <Timer.Seconds />
                            </Typography>


                        </div>
                        {/* <div>{timerState}</div> */}
                        <br />

                    </React.Fragment>
                )}
            </Timer>
        </div>
    )
}
