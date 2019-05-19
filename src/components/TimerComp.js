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
                        <div style={{ marginTop: 20 }}>
                            <Typography variant="h4" gutterBottom>
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
