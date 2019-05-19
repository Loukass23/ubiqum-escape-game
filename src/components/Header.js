import React, { Component } from 'react';
import Anime from './Anime';
import Typography from '@material-ui/core/Typography';
import logo from '../Ubiqum_Logo.png'



class Header extends Component {
    render() {
        return (
            <div className="app-outer">
                <div className="app-inner">
                    <div className="header">
                        <Anime
                            opacity={[0, 1]}
                            translateX={[500, 0]}
                            delay={(t, i) => 400 + i * 6000}
                            easing={'easeInOutQuad'}
                            duration={1000}
                        >
                            <div className="header-left-column">
                                <img alt="" src={logo} />
                                <Anime
                                    opacity={{
                                        delay: 2000,
                                        value: 0.9,
                                    }}
                                    translateX={[1000, 0]}
                                    delay={1000}
                                    easing={'easeInOutQuad'}
                                    duration={1000}
                                >
                                    <Typography color="primary" variant="h5" gutterBottom>
                                        Escape Room
                                 </Typography>

                                </Anime>

                            </div>
                        </Anime>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
