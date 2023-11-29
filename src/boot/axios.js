

import { boot } from 'quasar/wrappers'
import axios from 'axios'

const RESTAPI = "http://localhost:3000/api"
// const RESTAPI = "https://manage-account-api.vercel.app/api"
const api = axios.create({
  baseURL: RESTAPI,
  headers:{ "Content-Type": "application/json"}
 })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api

  app.config.globalProperties.$RESTAPI = RESTAPI
})

export { api}
