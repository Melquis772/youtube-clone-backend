const express = require('express');
const axios = require('axios')
const cors = require('cors')


const config = require('./config')

const app = express();


//Middlewares
app.use(express.json())
app.use(cors())



app.get('/:url', async (req, res) => {

    const { url } = req.params;
    const { part, q, order, channelId, id, type } = req.query

    const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

    const options = {
        url: BASE_URL,
        params: {
            maxResults: '50',
            part, q, order, channelId, id, type
        },
        headers: {
            'X-RapidAPI-Key': config.API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        const data = await response.data

        return res.json(data)
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
})


app.listen(config.PORT, () => console.log('Server on port ', config.PORT))