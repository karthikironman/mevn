import axios from 'axios'
export default() => {
  return axios.create({
    baseURL: `http://192.168.43.106:8081/` // the url of our server
  })
}