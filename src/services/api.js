import zlFetch from 'zl-fetch' // See: https://github.com/zellwk/zl-fetch

/**
 *
 * @description API URLs builders.
 */
export const endpoints = {
  USER: (id) => `user.json?id=${id}`,
  USERS: () => `users.json`,

  RECENT: (id) => `recent.json?id=${id}`,
  RECENTS: () => `recents.json`,

  COMMENT: (id) => `comment.json?id=${id}`,
  COMMENTS: () => `comments.json`,

  CHARITY: (id) => `charity.json?id=${id}`,
  CHARITIES: () => `charities.json`,

  ORGANIZATION: (id) => `organization.json?id=${id}`,
  ORGANIZATIONS: () => `organizations.json`,
}

class APIService {
  /**
   *
   * @typedef Config {{
   *   adapter: Function, (zlFetch)
   *
   *   basePath: string,
   *
   *   requestInterceptor([
   *     endpoint: string,
   *     params?: object,
   *     config?: object,
   *   ]): {*},
   *   responseInterceptor() {
   *     body: {*},
   *     headers: object,
   *     response: {Response},
   *     status: number,
   *     statusText: string,
   *   },
   *   errorInterceptor() {{
   *     body: {*},
   *     headers: object,
   *     response: {Response},
   *     status: number,
   *     statusText: string,
   *   }},
   * }}
   * @param config {Config}
   */
  constructor(config = {}) {
    this._adapter = config.adapter || zlFetch

    this._base_path = config.basePath ? `${config.basePath}/` : ''

    this._requestInterceptor = config.requestInterceptor || (async (...args) => args)
    this._responseInterceptor = config.responseInterceptor || (async (...args) => args)
    this._errorInterceptor = config.errorInterceptor || Promise.reject
  }

  /**
   *
   * @param method {'get'|'put'|'post'|'delete'|'patch'}
   * @param args {*[]}
   */
  get newRequest() {
    const methods = ['get', 'put', 'post', 'delete', 'patch']

    return methods.reduce((acc, method) => {
      acc[method] = this.withInterceptors.bind(this, this._adapter[method])
      return acc
    }, {})
  }

  async withInterceptors(caller, ...args) {
    const newArgs1 = await this.requestInterceptor(...args)
    const newArgs2 = await this._requestInterceptor(...newArgs1)

    return caller(...newArgs2)
      .then(async (response) => {
        const newResponse = await this._responseInterceptor(response)
        return await this.handleResponse(newResponse)
      })
      .catch(async (reject) => {
        try {
          return await this._errorInterceptor(reject)
        } catch (error) {
          throw error
        }
      })
      .catch(this.handleReject)
  }

  async requestInterceptor(...args) {
    if (typeof args[0] === 'string') { // If URL then concat BASE_PATH.
      args[0] = `${this._base_path}/${args[0]}`
    }
    return [...args]
  }

  async handleResponse(response) {
    return response.body
  }

  async handleReject(reject) {
    throw reject
  }
}

/**
 *
 * @description API class for making REST API requests in a browser.
 */
export class ApiClass extends APIService {
  /**
   *
   * @param config {Config}
   */
  constructor(config) {
    super(config)
  }

  /**
   *
   * @description Users
   */
  getUser(id, params, config) {
    return this.newRequest.get(endpoints.USER(id), params, config)
  }

  getUsers(params, config) {
    return this.newRequest.get(endpoints.USERS(), params, config)
  }

  postUser(id, body, config) {
    return this.newRequest.post(endpoints.USER(id), body, config)
  }

  putUser(id, body, config) {
    return this.newRequest.put(endpoints.USER(id), body, config)
  }

  deleteUser(id, config) {
    return this.newRequest.delete(endpoints.USER(id), config)
  }

  /**
   *
   * @description Recent
   */
  getRecent(id, params, config) {
    return this.newRequest.get(endpoints.RECENT(id), params, config)
  }

  getRecents(params, config) {
    return this.newRequest.get(endpoints.RECENTS(), params, config)
  }

  postRecent(id, body, config) {
    return this.newRequest.post(endpoints.RECENT(id), body, config)
  }

  putRecent(id, body, config) {
    return this.newRequest.put(endpoints.RECENT(id), body, config)
  }

  deleteRecent(id, config) {
    return this.newRequest.delete(endpoints.RECENT(id), config)
  }

  /**
   *
   * @description Comments
   */
  getComment(id, params, config) {
    return this.newRequest.get(endpoints.COMMENT(id), params, config)
  }

  getComments(params, config) {
    return this.newRequest.get(endpoints.COMMENTS(), params, config)
  }

  postComment(id, body, config) {
    return this.newRequest.post(endpoints.COMMENT(id), body, config)
  }

  putComment(id, body, config) {
    return this.newRequest.put(endpoints.COMMENT(id), body, config)
  }

  deleteComment(id, config) {
    return this.newRequest.delete(endpoints.COMMENT(id), config)
  }

  /**
   *
   * @description Charity
   */
  getCharity(id, params, config) {
    return this.newRequest.get(endpoints.CHARITY(id), params, config)
  }

  getCharities(params, config) {
    return this.newRequest.get(endpoints.CHARITIES(), params, config)
  }

  postCharity(id, body, config) {
    return this.newRequest.post(endpoints.CHARITY(id), body, config)
  }

  putCharity(id, body, config) {
    return this.newRequest.put(endpoints.CHARITY(id), body, config)
  }

  deleteCharity(id, config) {
    return this.newRequest.delete(endpoints.CHARITY(id), config)
  }

  /**
   *
   * @description Organization
   */
  getOrganization(id, params, config) {
    return this.newRequest.get(endpoints.ORGANIZATION(id), params, config)
  }

  getOrganizations(params, config) {
    return this.newRequest.get(endpoints.ORGANIZATIONS(), params, config)
  }

  postOrganization(id, body, config) {
    return this.newRequest.post(endpoints.ORGANIZATION(id), body, config)
  }

  putOrganization(id, body, config) {
    return this.newRequest.put(endpoints.ORGANIZATION(id), body, config)
  }

  deleteOrganization(id, config) {
    return this.newRequest.delete(endpoints.ORGANIZATION(id), config)
  }

}

/**
 *
 * @constructor {Config}
 */
export default new ApiClass({
  basePath: process.env.BACKEND_URL,
  responseInterceptor: res => (console.info('response -------\n', res), res),
  errorInterceptor: rej => {
    console.warn('request error -------\n', rej)

    if (rej && rej.error && rej.error.message === 'Failed to fetch') {
      console.log('Lost internet connection')
    }

    throw rej
  },
})