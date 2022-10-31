import React from 'react';

interface Props {
    embedId: string;
}

const YoutubeEmbeded: React.FC<Props> = ( props ) => {
    return (<div className="youtubeEmbeded">
        <iframe 
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>)
}

export default YoutubeEmbeded;