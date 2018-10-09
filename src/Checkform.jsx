import React, {Component} from 'react';
class Show extends Component {
    render() {
    return (<g/>);
}};
const videoId = 'https://img.youtube.com/vi/YqeW9_5kURI/0.jpg';     
class CheckForm extends React.Component{
    render(){ 
    return (
    <div>
    <form>
        <p>Работоспособность ссылки на YouTube:</p><br/>
        <input type='text'/>
        <button type='button' onClick={Show}>Проверить</button><br/>
        </form>
        <img src ={videoId} alt='youtubeImage' id='youtubePic'/>
        </div>
    );
    
   }};
   export default CheckForm;
   