import React from 'react';

class CheckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showed: true,
            linkOnVideo: 'https://www.youtube.com/watch?v=YqeW9_5kURI',
            imageSource: '',
            errorsW: [],
        }
    };

    onLinkChange = (event) => {
        this.setState({ linkOnVideo: event.target.value });
        this.setState({ imageSource: 'https://img.youtube.com/vi/' + 
        event.target.value.replace("https://www.youtube.com/watch?v=", "") + 
        '/0.jpg' });
        fetch(this.state.imageSource,{mode: 'cors', 
        headers:'Authorization: Bearer AIzaSyDq2afP16hclKa6dPbmpiPUdr4vjZFr_CI'})
        .then(res => res.text())
        .then((errorsW) =>{
            this.setState({
                errorsW
            })
        })

        if(this.state.errors === 44){
            this.setState({})
        }else{this.setState({showed: false})}
        };

    render() {
        return (
            <div>
                <p>Получить заставку с YouTube видео:</p><br />
                <input placeholder='ссылка на видео' value={this.state.linkOnVideo} size='64' onChange={this.onLinkChange} type='text' /><br/><br/>
                <img hidden={this.state.showed} src={this.state.imageSource} alt='youtubeImage' id='youtubePic' />
                <p>{}</p>
            </div>
        );
    }
}

export default CheckForm;
