import axios from 'axios';

export default class PostsService {
  static _apiBase = `https://simple-blog-api.crew.red/`;

  async getResource(url) {
    try {
      const resp = await axios.get(`${PostsService._apiBase}${url}`);
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  async postResource(url, body) {
    try {
      const resp = await axios.post(`${PostsService._apiBase}${url}`, body);
      return resp.data;
    } catch (err) {
      return err;
    }
  }

  async getPosts() {
    const resp = await this.getResource(`posts`);
    return resp;
  }

  async getPost(id) {
    const resp = await this.getResource(`posts/${id}?_embed=comments`);
    return resp;
  }

  async createPost(body) {
    const resp = await this.postResource(`posts`, body);
    return resp;
  }

  async createComment(body) {
    const resp = await this.postResource(`comments`, body);
    return resp;
  }
}
