const youtubeTranscript = require('youtube-transcript');

const getYoutubeTranscript = async (videoId, config) => {
    return new Promise((res, rej) => {
        youtubeTranscript.default.fetchTranscript(videoId, config).then((transcript) => {
            res(transcript);
        })
    })
}

exports.getYoutubeTranscript = getYoutubeTranscript