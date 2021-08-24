import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

import Scrollbar from '../Scrollbar'
import useDepartment from '../../hooks/useDepartment'
import { combineReducers } from 'redux'

const TrainingParticpants = (props) => {
  const { participants, isLoading, ...other } = props
  const [rowsPerPage, setRowsPerPage] = useState(12)
  const [page, setPage] = useState(0)
  const { t } = useTranslation()

  return (
    <Card {...other}>
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  { t('NAME') }
                </TableCell>
                <TableCell>
                  { t('DEPARTMENT') }
                </TableCell>
                <TableCell>
                  { t('BOOKED_AT') }
                </TableCell>
                <TableCell>
                  { t('TICKET') }
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading ? participants.map((item) => (
                <TableRow key={item.participant._id}>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {item.participant.firstname} {item.participant.lastname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={item.participant.department.name} 
                      variant="outlined" /> 
                  </TableCell>
                  <TableCell>
                    { format(new Date(item.bookedAt), 'dd.MM.yyyy')}
                  </TableCell>
                  <TableCell>
                    { item.ticket.title }
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={3} align="center"/>
                    <CircularProgress />
                  <TableCell />
                </TableRow>
              )}
              { !isLoading && participants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography
                        color="textPrimary"
                        variant="h4"
                      >
                        { t('NO_PARTICIPANTS') }
                      </Typography>
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={participants.length}
        onPageChange={console.log}
        onRowsPerPageChange={console.log}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[12, 24]}
      />
    </Card>
  )
}

TrainingParticpants.propTypes = {
  participants: PropTypes.array.isRequired
}

export default TrainingParticpants
