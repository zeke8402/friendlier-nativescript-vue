import Vue from 'vue';
import Vuex from 'vuex';

const Sqlite = require("nativescript-sqlite");

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    database: null,
    data: []
  },
  mutations: {
    init(state, data) {
      state.database = data.database;
    },
    load(state, data) {
      state.data = [];
      for (var i = 0; i < data.data.length; i++) {
        state.data.push({
          firstname: data.data[i][0],
          lastname: data.data[i][1]
        });
      }
    },
    save(state, data) {
      state.data.push({
        firstname: data.data.firstname,
        lastname: data.data.lastname
      });
    },
  },
  actions: {
    init(context) {
      (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS friends (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        db.execSQL("CREATE TABLE IF NOT EXISTS friend_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, friend_id INT, log_date DATE, log_rating INT, log_maximum INT, log_notes TEXT)").then(id => {
          context.commit("init", {database: db});
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        db.execSQL("CREATE TABLE IF NOT EXISTS friend_quotes (id INTEGER PRIMARY KEY AUTOINCREMENT, friend_id INT, quote_date DATE, quote_message TEXT)").then(id => {
          context.commit("init", {database: db});
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },
    createFriend(context, data) {
      context.state.database.execSQL("INSERT INTO friends(first_name, last_name) VALUES (?, ?)", [data.first_name, data.last_name]).then(id => {
        context.commit("save", { data: data});
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    createFriendLog(context, data) {
      context.state.database.execSQL("INSERT INTO friend_logs (friend_id, log_date, log_rating, log_maximum, log_notes) VALUES (?, ?, ?, ?, ?)", 
        [data.log_date, data.log_rating, data.log_maximum, data.log_notes]).then(id => {
          context.commit("save", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    createFriendQuote(context, data) {
      context.state.database.execSQL("INSERT INTO friend_quotes (friend_id, quote_date, quote_message) VALUES (?, ?, ?)", [data.friend_id, data.quote_date, data.quote_message]
      ).then(id => {
        context.commit("save", {data: data});
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    getFriend(context, data) {
      context.state.database.all("SELECT * FROM friends where id = ?", [data.id]).then(result => {
        context.commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    getAllFriends(context) {
      context.state.database.all("SELECT * FROM friends", []).then(result => {
        context.commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    getFriendData(context) {
      /* @todo */
    },
    insert(context, data) {
      context.state.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [data.firstname, data.lastname]).then(id => {
        context.commit("save", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    query(context) {
      context.state.database.all("SELECT firstname, lastname FROM people", []).then(result => {
        context.commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    }
  }
});

Vue.prototype.$store = store;
// module.exports = store;

export default store;
store.dispatch("init")

/**
 * Old way, following tutorial for SQLite now
 * https://www.nativescript.org/blog/data-management-with-sqlite-and-vuex-in-a-nativescript-vue-app
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
});
*/