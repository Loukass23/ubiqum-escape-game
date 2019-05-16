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
                            translateY={[100, 0]}
                            delay={(t, i) => 400 + i * 6000}
                            easing={'easeInOutQuad'}
                            duration={1000}
                        >
                            <div className="header-left-column">
                        <img alt="" src={logo}  />

                
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
                                 <Typography color="primary" variant="h2" gutterBottom>
                                 Escape Room
                                 </Typography>

                                </Anime>

                            </div>
                        </Anime>
                        <Anime opacity={[0, 1]} delay={5000} duration={10000}>
                            <div className="header-right-column d-flex" id="built-whith">

                            </div>
                        </Anime>
                    </div>
                    <Anime
                        opacity={[0, 0.5]}
                        translateY={[100, 0]}
                        easing={'easeInOutQuad'}
                        duration={1000}
                        delay={5000}
                    >
                        <div className="footer">
                            <a href="#about"><i className="fa fa-chevron-down" id="chevron"></i></a>
                        </div>
                    </Anime>
                </div>
                <Anime translateX={[{ value: 0 }, { value: 5000, duration: 5000 }]}>
                    <div className="app-slide" ></div>
                </Anime>
            </div>
        );
    }
}

/*
<Anime
                opacity={{
                  delay: 4000,
                  value: 0.5
                }}
                translateX={[1000, 0]}
                delay={3000}
                easing={'easeInOutQuad'}
                duration={1000}>
                <h2>Open source enthusiast, creative, kind</h2>
              </Anime>
              <h1>IjzerenHein</h1>
*/

export default Header;
