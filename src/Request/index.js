const server = require('../Server/config.json')

const Request = async (request_type, url, data = {}) => {
    try {
        let options = {
            method: request_type.toUpperCase(),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        if (request_type.toLowerCase() !== 'get') {
            options.body = JSON.stringify(data);
        } else {
            const query = new URLSearchParams(data).toString();
            url += query ? `?${query}` : '';
        }
        url = server.url + '/' + url

        const response = await fetch(url, options);

        return response.json();

    } catch (error) {
        return {error_message: error.message}
    }
};
  
module.exports = {
    Request
};
  