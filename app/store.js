import Vue from 'vue';
import Vuex from 'vuex';

const Sqlite = require("nativescript-sqlite");

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    database: null,
    data: [],
    friends: [],
    isDevMode: false,
  },
  mutations: {
    init(state, data) {
      state.database = data.database;
    },
    loadFriends(state, data) {
      state.friends = [];
      for (var i = 0; i < data.data.length; i++) {
        state.friends.push({
          id: data.data[i][0],
          firstName: data.data[i][1],
          lastName: data.data[i][2]
        });
      }
    },
    updateFriends(state, data) {
      state.friends.push({
        firstName: data.data.first_name,
        lastName: data.data.last_name,
      });
    },
    updateDeletedFriend(state, data) {
      let oldFriends = state.friends 
      state.friends = oldFriends.filter(function(item) {
        return friend.id !== data.data.id
      });
    }
  },
  actions: {
    init(context) {
      (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS friends (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, birthday DATE)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        db.execSQL("CREATE TABLE IF NOT EXISTS friend_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, friend_id INT, log_date DATE, log_rating INT, log_maximum INT, log_notes TEXT)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        db.execSQL("CREATE TABLE IF NOT EXISTS friend_quotes (id INTEGER PRIMARY KEY AUTOINCREMENT, friend_id INT, quote_date DATE, quote_message TEXT)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });

        console.log('The dev mode is ' + this.state.isDevMode);
        /*
        if (this.state.isDevMode) {
          db.execSQL("INSERT INTO friends(first_name, last_name) VALUES (?, ?)", ['Sample', 'Person']);
        }
        */
      }, error => {
        console.log("OPEN DB ERROR", error);
      });

    },
    createFriend(context, data) {
      context.state.database.execSQL("INSERT INTO friends(first_name, last_name) VALUES (?, ?)", [data.first_name, data.last_name]).then(id => {
        context.commit("updateFriends", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    deleteFriend(context, data) {
      console.log("Data receivd: " + data.id);
        context.state.database.execSQL("DELETE FROM friends WHERE id = ?", [data.id]).then( id => {
          context.commit("updateDeletedFriend", { data: data});
      }, error => {
        console.log("DELETE ERROR", error);
      })
    },
    /*
    createFriendLog(context, data) {
      context.state.database.execSQL("INSERT INTO friend_logs (friend_id, log_date, log_rating, log_maximum, log_notes) VALUES (?, ?, ?, ?, ?)", 
        [data.log_date, data.log_rating, data.log_maximum, data.log_notes]).then(id => {
          context.commit("saveFriend", { data: data });
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
        context.commit("loadFriends", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    */
    getAllFriends(context) {
      context.state.database.all("SELECT id, first_name, last_name FROM friends").then(result => {
        context.commit("loadFriends", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    getFriendData(context) {
      /* @todo */
    },
    /**
     * Destructors
     */
    clearFriends(context) {
      context.state.database.execSQL("DELETE FROM friends").then(result => {
        context.commit("loadFriends", { data: {} });
      }, error => {
        console.log("CLEAR ERROR", error);
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