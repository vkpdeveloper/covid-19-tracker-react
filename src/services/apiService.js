import axios from 'axios';

class APIServices{
    apiUrl = "https://covid19.mathdro.id/api";

    getResult = async () => {
        let changeableUrl = `${this.apiUrl}/countries/india`;
        let response = await axios.get(changeableUrl);
        return response.data;
    };

}

export default APIServices;