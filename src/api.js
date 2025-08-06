import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const messageAPI = {
  // 获取留言列表
  getMessages(page = 1, perPage = 5) {
    return api.get('/messages', {
      params: { page, per_page: perPage }
    })
  },

  // 创建新留言
  createMessage(content, author = '匿名用户') {
    return api.post('/messages', {
      content,
      author
    })
  }
}

export default api