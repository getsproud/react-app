import * as admin from './admin'
import * as authentication from './authentication'
import * as budget from './budget'
import * as company from './company'
import * as training from './training'

const ActionCreators = Object.assign(
  {},
  admin,
  authentication,
  budget,
  company,
  training
)

export default ActionCreators
