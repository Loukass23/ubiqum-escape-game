import React, { Component } from 'react'
import Timer from '../components/TimerComp'
import AddTeam from '../components/AddTeam'
import FindPwd from '../components/FindPwd'
import Puzzle from '../components/Puzzle'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';
import EndView from '../components/EndView'
import Scoreboard from '../components/Scoreboard'



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 20
  }
})

class Landing extends Component {
componentDidMount(){
  window.onbeforeunload = function () {
    this.onUnload();
    return "";
  }.bind(this);
}
  render() {
    const { team, puzzle, result } = this.props


    const teamComp = (team ? <FindPwd /> : <AddTeam />)

    const puzzles = (puzzle.id && !result ? <Puzzle /> : teamComp)

    return (
      <React.Fragment>


        {!result &&
          <div>
            {puzzles}
            {team && <Timer />}
          </div>
        }
        {result &&
          <React.Fragment>
            <EndView />
            <Scoreboard />
          </React.Fragment>
        }

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.team.team,
    puzzle: state.puzzle,
    result: state.results.result


  }
}
export default connect(mapStateToProps)(withStyles(styles)(Landing))