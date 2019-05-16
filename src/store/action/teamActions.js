import { ADD_TEAM } from './actionsTypes'
export const addTeam = (team) => {
    return {
        type: ADD_TEAM,
        payload: team
    }
}