import { http } from 'config'

export default {
  text: function (data) {
    return http.post('', data);
  }
}