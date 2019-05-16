import { NEXT_STEP } from './actionsTypes'
export const nextStep = (id) => {
    return {
        type: NEXT_STEP,
        payload: id
    }
}