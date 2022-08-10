

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from '../store/action-creators/indexAC'

export const UseActions = () => {
   const dispatch = useDispatch()
   return bindActionCreators(ActionCreators, dispatch)
}