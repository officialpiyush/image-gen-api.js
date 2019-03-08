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
    
  }
}

module.exports = Client;