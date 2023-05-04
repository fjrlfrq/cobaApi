class Response {
    constructor(data, success = "SUCCESS") {
        this.success = success
        this.data = data
    }
  }
  
  mdule.exports = {
    Response
  }