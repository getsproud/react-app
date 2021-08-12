import axios from '../lib/axios'

class TrainingApi {
  async getTrainings() {
    return new Promise(async (resolve, reject) => {
      try {
        axios.get('/training').then(async (data) => {
          if (data.data.docs) {
            data.data.docs = await Promise.all(data.data.docs.map(async (d) => {
              d.departments = await Promise.all(d.departments.map(async (department) => {
                const { data: dep } = await axios.get(`/department/${department}`)
                return dep.name
              }))

              return d
            }))
          }

          return resolve(data.data)
        })
      } catch (err) {
        console.error('[Training Api]: ', err)
        reject(new Error('Internal server error'))
      }
    })
  }
}

export const trainingApi = new TrainingApi()