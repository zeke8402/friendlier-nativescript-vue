<template>
  <Page>
    <ActionBar title="Friendlier" class="action-bar" />
    <GridLayout class="bg-gradient" orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
        <StackLayout orientation="vertical">
          <NoFriendCard v-show="showNoFriendCard" />
          <FriendCard
            v-for="friend in this.$store.state.friends"
            :key="friend.id"
            :friend="friend"
          />
          <FriendlierButton :navigateMethod="showAddFriend" />
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import App from "./App";
import AddFriend from "./AddFriend";
import FriendlyMenu from "./FriendlyMenu";
import FriendlierButton from "./custom/FriendlierButton";
import FriendCard from "./FriendCard";
import NoFriendCard from "./NoFriendCard";
import FriendProfile from "./FriendProfile";
export default {
  components: {
    FriendlyMenu,
    FriendCard,
    FriendProfile,
    FriendlierButton,
    NoFriendCard
  },
  mounted() {
    this.$store.dispatch("getAllFriends");
  },
  data() {
    return {
      addFriendPage: AddFriend,
      FriendlyMenu: FriendlyMenu,
      friendProfile: FriendProfile
    };
  },
  computed: {
    showNoFriendCard() {
      if (this.$store.state.friends.length === 0) {
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
    showAddFriend() {
      this.$navigateTo(AddFriend)
    },
    showFriendProfile(friend) {
      this.$navigateTo(FriendProfile, {
        props: {
          friend: friend
        }
      });
    },
    clearFriends() {
      this.$store.dispatch("clearFriends");
    }
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

.bg-gradient {
  width:100%;
  height: 100%;

    background: #34e89e;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(45deg, #0f3443, #34e89e);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(45deg, #0f3443, #34e89e);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
