<template>
  <Page>
    <GridLayout orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
      <ListView for="friend in friends">
        <v-template>
          <Label :text="friend.firstName + ' ' + friend.lastName" />
        </v-template>
      </ListView>

      <Button v-if="isDevMode" height="10%" text="Clear" @tap="clearFriends" />

      <FriendlyMenu></FriendlyMenu>
    </GridLayout>
  </Page>
</template>

<script>
import App from "./App";
import AddFriend from "./AddFriend";
import FriendlyMenu from "./FriendlyMenu";
export default {
  components: {
    FriendlyMenu
  },
  mounted() {
      this.$store.dispatch('getAllFriends');
  },
  computed: {
      friends() {
          return this.$store.state.friends;
      },
      isDevMode() {
          return this.$store.state.isDevMode;
      }
  },
  methods: {
    clearFriends() {
        this.$store.dispatch("clearFriends");
    }
  },
  data() {
    return {
      addFriendPage: AddFriend,
      FriendlyMenu: FriendlyMenu,
    };
  }
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
{
