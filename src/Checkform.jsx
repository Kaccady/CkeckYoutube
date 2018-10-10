import React from 'react';

class CheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddePic: false,
            linkOnVideo: 'https://www.youtube.com/watch?v=YqeW9_5kURI',
            imageSource: '',
            errorsW: '',
        }
    };
    onWrongLink = () =>{
        this.setState({hiddePic: true})
};

    onCorrectLink = () => {
        this.setState({hiddePic: false})
    };

    onLinkChange = (event) => {
        this.setState({ linkOnVideo: event.target.value, imageSource: 'https://img.youtube.com/vi/' + 
        event.target.value.replace("https://www.youtube.com/watch?v=", "") + 
        '/0.jpg' });
        const headers = new Headers()
        headers.set('Authorization', 'Bearer AIzaSyDq2afP16hclKa6dPbmpiPUdr4vjZFr_CI')
        fetch(this.state.imageSource,{mode: 'cors', headers})
    };

    render() {
        return (
            <div>
                <p>Получить заставку с YouTube видео:</p><br />
                <input placeholder='ссылка на видео' value={this.state.linkOnVideo} size='64' onChange={this.onLinkChange} type='text' /><br/><br/>
                <img hidden={this.state.hiddePic} onLoad={this.onCorrectLink} onError={this.onWrongLink} src={this.state.imageSource} alt='youtubeImage' id='youtubePic' />
                <p>{}</p>
            </div>
        );
    }
}

export default CheckForm;
