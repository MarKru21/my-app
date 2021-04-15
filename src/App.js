import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App(props) {
 
       function handleSubmit(response) {
         alert(`The weather in ${props.city} is ${response.data.main.temp}°C`)
       }
       let apiKey = "9fdfde34a67a648a41ee1aa53553e730";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleSubmit);
       return <h2>Hello from Weather</h2>;
        

}

export default App;
