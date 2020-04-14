import React from 'react'
import Cards from './Components/Cards/Cards'
import styles from './App.module.css';
import APIServices from './services/apiService'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    data = {};

    myAPI = new APIServices();
    async componentDidMount() {
        this.data = await this.myAPI.getResult();
        this.setState({ data: this.data });
    }
    render() {
        return <div className = { styles.container }>
            <img alt="COVIDIMAGE" className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png"></img>
            <Cards data={this.data}></Cards>
        </div>
            
    }
}
export default App;