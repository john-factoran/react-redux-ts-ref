import { Action } from "../actions"

const initState = 0

const reducer = (state: number = initState, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload
    case "withdraw":
      return state - action.payload
    case "bankrupt":
      return 0
    default:
      return state
  }
}

export default reducer