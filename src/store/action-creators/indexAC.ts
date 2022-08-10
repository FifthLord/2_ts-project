

import * as UserActionCreators from './userAC'
import * as TodoActionCreators from './todoAC'

export default {
   ...UserActionCreators,
   ...TodoActionCreators,
}