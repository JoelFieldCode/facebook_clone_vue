import Moment from 'moment';

export default {

    index (key){
        try{
            return JSON.parse(window.localStorage.getItem([key])).slice();
        }catch(err){
            return [];
        }
    },

    add (key, value){
        value.timestamp = Moment().format("X");
        return new Promise((resolve, reject) => {
            const currentData = this.index(key);
            value.id = this.computeUniqueId(key);
            currentData.unshift(value);
            this.set(key, currentData);
            resolve(value);
        });
    },

    computeUniqueId (key) {
        const latestInsert = this.index(key).sort( (valueA, valueB) => {
            return valueB.id - valueA.id;
        })[0];

        if(latestInsert === undefined){
            return 1;
        }

        return latestInsert.id + 1;
    },

    set (key, values) {
        window.localStorage.setItem(key, JSON.stringify(values));
    },

    delete (key, id) {
        return new Promise((resolve, reject) => {
            const currentData = this.index(key).filter( value => {
                return id !== value.id;
            });
    
            this.set(key, currentData);
            resolve();
        });
    }
}