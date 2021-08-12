import PropTypes from 'prop-types'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import getInitials from '../../utils/getInitials'
import { useTranslation } from 'react-i18next'
import useAuth from '../../hooks/useAuth'

const TrainingMembers = (props) => {
  const { members, ...other } = props
  const { t } = useTranslation()
  const { user } = useAuth()

  return (
    <Card {...other}>
      <CardHeader
        sx={{ pb: 0 }}
        title={ t('PARTICIPANTS') }
        titleTypographyProps={{ variant: 'overline' }}
      />
      <CardContent sx={{ pt: 0 }}>
        <List>
          { members.map((member) => (
            <ListItem
              disableGutters
              key={ member._id }
            >
              <ListItemAvatar>
                <Avatar src={member.avatar}>
                  { getInitials(`${member.firstname} ${member.lastname}`) }
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Typography
                    color="textPrimary"
                    variant="subtitle2"
                  >
                    { user._id === member._id ? t('YOU') : `${member.firstname} ${member.lastname}` }
                  </Typography>
                )}
                secondary={(
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    { member.position }
                  </Typography>
                )}
              />
            </ListItem>
          )) }
        </List>
      </CardContent>
    </Card>
  )
}

TrainingMembers.propTypes = {
  members: PropTypes.array.isRequired
}

export default TrainingMembers
