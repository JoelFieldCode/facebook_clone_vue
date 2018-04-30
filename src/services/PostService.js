import Database from '../services/Database';

export default {

    posts () {
        return Database.index("posts");
    },

    add (value) {
        return new Promise((resolve, reject) => {
            Database.add("posts", value).then( Model => {
                resolve(Model)
            });
        });
    },

    delete (id) {
        return new Promise((resolve, reject) => {
            Database.delete("posts", id).then( () => {
                resolve()
            });
        });
    }
}