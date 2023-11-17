import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key:'018f91e3fda64567a7393f459a09267e'
  }
})
