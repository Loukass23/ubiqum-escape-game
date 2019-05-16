import React, { Component } from 'react'
import Timer from '../components/TimerComp'
import AddTeam from '../components/AddTeam'
import FindPwd from '../components/FindPwd'
import Puzzle from '../components/Puzzle'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 20
  }
})

class Landing extends Component {

  render() {
    const { team, puzzle } = this.props
    console.log(puzzle)
    const teamComp = (team ? <FindPwd /> :
      <AddTeam />)

    const puzzles = (puzzle.id ? <Puzzle /> : teamComp)
    return (
      <div>
        
        {puzzles}
{team && <Timer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    team: state.team.team,
    puzzle: state.puzzle,


  }
}
export default connect(mapStateToProps)(withStyles(styles)(Landing
))