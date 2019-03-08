/**
 * @author Piyush Bhangale <bhangalepiyush@gmail.com>
 */

// Import Packages
const request = require("request");

/**
 * Initialize The Client
 * @params {object} options - The Options Of The Client
 * @constructor
 */

class Client {
  constructor(options = {}) {
    this.request = request;
    this.baseURl = options.baseURl;
    this.options = options;
  }
async getOptions(data = {}) {
  if(!data.url) data.url = null;
  let JSONArray = [];
      if(data.url) JSONArray.push("url", data.url);
    let options = { //eslint-disable-line
      method:'get',
      url: `${this.baseURl}/${data.endpoint}`,
      json: JSONArray.join(",")
  }
    }
  }

module.exports = Client;