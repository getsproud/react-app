import * as authentication from './authentication'
import * as company from './company'
import * as budget from './budget'
import * as training from './training'
import * as admin from './admin'

const ActionCreators = Object.assign(
  {},
  authentication,
  company,
  budget,
  training,
  admin
)

export default ActionCreators
