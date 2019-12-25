<template>
  <Page>
    <ActionBar title="Friendlier" class="action-bar" />
    <GridLayout class="test-bg" orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
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

.test-bg {
  width:100%;
  height: 100%;
  background-image: url("~/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
