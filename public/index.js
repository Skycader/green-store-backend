class Api {
  constructor(url){
    this.url = url
  }

  async post(url,json) {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });
    const content = await rawResponse.json();
  
    return content
  }

  async getProducts() {
    let products = await this.post(this.url+"products")
    return products
  }
}

const api = new Api(location.href)