const express = require('express');
const app = express();
const youtubeTranscript = require('./src/getYoutubeTranscript.js');
require('dotenv').config();

const PORT = process.env.PORT;

youtubeTranscript.getYoutubeTranscript('jJzRbcAUXBc', { lang: 'es', country: 'US'})
    .then((transcript) => {
        console.log(transcript);
        
    });

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.get('/transcript/:videoId', (req, res)=>{
    youtubeTranscript.getYoutubeTranscript(req.params.videoId)
        .then((transcript) => {
            console.log(transcript);
            res.send('done');
        });
})

app.listen(PORT, () => {
    console.log(`Server now running at port ${PORT}`);
});