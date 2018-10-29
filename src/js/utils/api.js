class Api {
  API_CONFIG = {
    newSubscriber: {
      endpoint: "subscribers",
      method: "post"
    }
  }

  DEFAULT_REQUEST_ARGS = {
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    mode: "cors",
    redirect: "follow",
    referrer: "no-referrer",
  }

  ROOT_URL = "https://wedding-site-api.herokuapp.com/"

  call = (action, data = {}) => {
    const { endpoint, method } = this.API_CONFIG[action]
    return this[method](endpoint, data)
  }
  
  post = async (endpoint, data) => {
    const newArgs = { method: "POST", body: JSON.stringify(data) }
    const args = { ...this.DEFAULT_REQUEST_ARGS, ...newArgs }
    try {
      const res = await fetch(`${this.ROOT_URL}/${endpoint}`, args)
      const res_1 = await res.json()
      return res_1
    }
    catch (err) {
      return err
    }
  }
}

export default Api
