import React from 'react';

class CheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePic: false,
            linkOnVideo: '',
            imageSource: 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg',
            errorsW: '',
        }
    };
    onWrongLink = () =>{
        this.setState({hidePic: true})
};

    onCorrectLink = () => {
        this.setState({hidePic: false})
    };

    onLinkChange = (event) => {
        this.setState({ linkOnVideo: event.target.value, imageSource: 'https://img.youtube.com/vi/' + 
        event.target.value.replace("https://www.youtube.com/watch?v=", "") + 
        '/0.jpg', hidePic: false });
    };

    render() {
        return (
            <div>
                <h1>Получить заставку с YouTube видео:</h1><br />
                <input placeholder='ссылка на видео' value={this.state.linkOnVideo} size='64' onChange={this.onLinkChange} type='text' /><br/><br/>
                <img hidden={this.state.hidePic} src={this.state.imageSource} alt='youtubeImage' id='youtubePic' />
                <p>{}</p>
            </div>
        );
    }
}

export default CheckForm;
