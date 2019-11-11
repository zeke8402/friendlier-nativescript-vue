<template>
  <Page>
    <ActionBar title="Friendlier" class="action-bar" />
    <GridLayout orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
<ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
<StackLayout orientation="vertical">
    <NoFriendCard v-show="showNoFriendCard" /> 
    <FriendCard v-for="friend in this.$store.state.friends" :key="friend.id" :friend="friend" />
</StackLayout>
</ScrollView>

<!--
      <Button v-if="isDevMode" height="10%" text="Clear" @tap="clearFriends" />
      -->

      <FriendlyMenu></FriendlyMenu>
    </GridLayout>
  </Page>
</template>

<script>
import App from "./App";
import AddFriend from "./AddFriend";
import FriendlyMenu from "./FriendlyMenu";
import FriendCard from "./FriendCard";
import NoFriendCard from "./NoFriendCard";
export default {
  components: {
    FriendlyMenu,
    FriendCard,
    NoFriendCard,
  },
  mounted() {
    this.$store.dispatch("getAllFriends");
  },
  computed: {
    showNoFriendCard() {
      if(this.$store.state.friends.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isDevMode() {
      return this.$store.state.isDevMode;
    }
  },
  methods: {
    goToFriendProfile(friend) {
      console.log("yep");
      this.$navigateTo(FriendProfile)
    },
    clearFriends() {
      this.$store.dispatch("clearFriends");
    }
  },
  data() {
    return {
      addFriendPage: AddFriend,
      FriendlyMenu: FriendlyMenu
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
