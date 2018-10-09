import React from 'react';
   
class CheckForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {videoId: 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg'};
        this.getImage = this.getImage.bind(this);
    }
    getImage(){
        this.setState({ videoId: 'https://img.youtube.com/vi/YqeW9_5kURI/1.jpg'})

    }
    render() { 
    return (
    <div>
    <form>
        <p>Работоспособность ссылки на YouTube:</p><br/>
        <input type='text'/>
        <button onClick={this.getImage} type='button'>Проверить</button><br/>
        </form>
        <img src={this.state.videoId} alt='youtubeImage' id='youtubePic'/>
        </div>
    );
    }}
   export default CheckForm;
   