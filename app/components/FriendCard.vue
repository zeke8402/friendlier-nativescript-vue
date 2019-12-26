<template>
  <CardView class="friend-card" margin="10" elevation="2" @tap="showFriendProfile">
    <StackLayout>
      <StackLayout orientation="horizontal">
        <Image
          horizontalAlignment="left"
          class="profile-image"
          stretch="fill"
          width="20%"
          :src="getProfilePhoto"
        />
        <StackLayout class="stacked-labels" width="55%">
          <Label class="header-text text-color" :text="friend.firstName + ' ' + friend.lastName" />
          <Label class="subtext" text="Last Score: TBA" />
        </StackLayout>
        <Label horizontalAlignment="right" class="text-center" width="25%">
          <Span class="avg-score" text="10.00" />
        </Label>
      </StackLayout>
    </StackLayout>
  </CardView>
</template>
<script>
  import FriendProfile from './FriendProfile'
export default {
  props: ["friend"],
  methods: {
    showFriendProfile() {
      //this.$emit("showFriendProfile", this.friend)
      this.$navigateTo(FriendProfile, {
        props: {
          friend: this.friend
        }
      })
    },
      close () {
      // destroy the vue listeners, etc
      this.$destroy();

      // remove the element from the DOM
      this.$el.parentNode.removeChild(this.$el);
    },
    deleteFriend() {
      confirm({
        title: "Are you sure you want to delete this friend?",
        message: "The friend and their history will be deleted forever.",
        okButtonText: "Delete",
        cancelButtonText: "Close",
      }).then(() => {
        this.$store.dispatch("deleteFriend", this.friend); // insert person into db
        this.close()
      });
    }
  },
  components: { FriendProfile },
  computed: {
    getProfilePhoto() {
      if (this.friend.photo) {
        return "data:Image/png;base64," + this.friend.photo;
      } else {
        return "~/assets/images/no-image.png";
      }
    }
  },
  data() {
    return {}
  }
};
</script>
<style scoped>
.dev-primary {
  background-color: #1c6b48;
}

.dev-secondary {
  background-color: #43b883;
}

.dev-tertiary {
  background-color: #5ff5f8;
}


.header-text {
  font-family: "Raleway";
  font-size: 25px;
}
.name-label {
  text-align: center;
  padding: 10;
  margin: 10;
  font-size: 15em;
  font-weight: bold;
  /* border-radius: 25px; */
}

.stacked-labels {
  padding: 10;
}

.text-color {
  color: #F5E4C3;
}

.avg-score {
  font-size: 25em;
  color: #DF8C95;
}

.profile-image {
  margin: 15px;
  border-radius: 100%;
  background-color: white;
}

.friend-card {
  background-color: black;
  border: 10px;
  /* border-radius: 50%; */
  width: 88%;
}

.delBtn {
  color: red;
}

.forwardBtn {
  color: green;
}
</style>