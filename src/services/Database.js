import Moment from 'moment';

export default {

    index(key){
        try{
            return JSON.parse(window.localStorage.getItem([key])).slice();
        }catch(err){
            return [];
        }
    },

    add(key, value){
        value.timestamp = Moment().format("X");
        return new Promise((resolve, reject) => {
            const currentData = this.index(key);
            currentData.unshift(value);
            window.localStorage.setItem(key, JSON.stringify(currentData));
            resolve(value);
        });
    }
}