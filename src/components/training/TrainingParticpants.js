import { useState, useEffect } from 'react'
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
import Scrollbar from '../Scrollbar'
import useDepartment from '../../hooks/useDepartment'

const TrainingParticpants = (props) => {
  const { participants, ...other } = props
  const [participantArray, setParticipants] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(12)
  const [page, setPage] = useState(0)
  const { t } = useTranslation()
  const { fetchDepartmentById } = useDepartment()
  
  const getDepartment = async (item) => {
    const department = await fetchDepartmentById(item.department)
    item.departmentName = department.name

    return item
  }

  const getData = async () => {
    return Promise.all(participants.map(item => getDepartment(item)))
  }

  useEffect(() => {
    getData().then(p => setParticipants(p))
  }, [participants])

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
              </TableRow>
            </TableHead>
            <TableBody>
              {participantArray.length ? participantArray.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      {item.firstname} {item.lastname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={item.departmentName} 
                      variant="outlined" /> 
                  </TableCell>
                  <TableCell>
                    irgendwas
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <CircularProgress />
                  </TableCell>
                  <TableCell />
                </TableRow>
              )}
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
