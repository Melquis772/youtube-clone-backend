const config = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    API_KEY: process.env.API_KEY || '',
}