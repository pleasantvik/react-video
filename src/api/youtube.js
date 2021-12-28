import axios from 'axios'
const KEY = 'AIzaSyB-uGpkeybRXVkv7x30HGSm5kMJmPxxFYo'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})
