import React from 'react';

class CheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showed: false,
            linkOnVideo: 'https://www.youtube.com/watch?v=YqeW9_5kURI',
            videoId: '',
            imageSource: 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg',

        }
    };

    onLinkChange = (event) => {
        this.setState({ linkOnVideo: event.target.value });
        this.setState({ imageSource: 'https://img.youtube.com/vi/' + event.target.value.replace("https://www.youtube.com/watch?v=", "") + '/0.jpg' });
        this.setState({ showed: false });
        
    };

    render() {
        return (
            <div>
                <p>Получить заставку с YouTube видео:</p><br />
                <input placeholder='ссылка на видео' value={this.state.linkOnVideo} size='64' onChange={this.onLinkChange} type='text' /><br/><br/>
                <img hidden={this.state.showed} src={this.state.imageSource} alt='youtubeImage' id='youtubePic' />
            </div>
        );
    }
}

export default CheckForm;
