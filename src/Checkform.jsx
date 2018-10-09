import React from 'react';
   
class CheckForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showed: false};
        this.state = {videoId: 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg'};
        this.state = {imageSource: 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg'};
        this.getImage = this.getImage.bind(this);
        this.onLinkChange = this.onLinkChange.bind(this);

    };
    getImage(){
        this.setState({ imageSource: this.state.videoId});
        this.setState({ showed: false});


    };
    onLinkChange(event){
        this.setState({videoId: event.target.value});
    };
    render() { 
    return (
    <div>
    <form>
        <p>Работоспособность ссылки на YouTube:</p><br/>
        <input value={this.state.videoId} size='52' onChange={this.onLinkChange}  type='text'/>
        <button onClick={this.getImage} type='button'>Проверить</button><br/>
        </form>
        <img hidden={this.state.showed} src={this.state.imageSource} alt='youtubeImage' id='youtubePic'/>
        </div>
    );
    }}
   export default CheckForm;
   