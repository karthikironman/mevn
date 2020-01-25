import API from '../services/API'
export default {
  getBranches () {
    return API().get('branches')
  },
  getColleges () {
    return API().get('colleges')
  }
}