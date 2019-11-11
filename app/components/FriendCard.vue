<template>
  <CardView class="friend-card" margin="20" elevation="2" radius="25">
      <StackLayout orientation="horizontal">
        <Image
          horizontalAlignment="left"
          class="profile-image"
          stretch="fill"
          width="20%"
          :src="getProfilePhoto"
        />
        <StackLayout class="stacked-labels" width="50%">
          <Label :text="friend.firstName + ' ' + friend.lastName" />
          <Label text="Last updated: TBA" />
        </StackLayout>
        <Label horizontalAlignment="right" class="text-center" width="30%">
          <Span class="avg-score" text="0.00" />
        </Label>
      </StackLayout>
  </CardView>
</template>
<script>
export default {
  props: ["friend"],
  computed: {
    getProfilePhoto() {
      if (this.friend.photo) {
        return this.friend.photo;
      } else {
        return "~/assets/images/no-image.png";
      }
    }
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

.name-label {
  text-align: center;
  padding: 10;
  margin: 10;
  font-size: 15em;
  font-weight: bold;
  border-radius: 25px;
}

.stacked-labels {
  padding: 10;
}

.avg-score {
  font-size: 30em;
}

.profile-image {
  margin: 15px;
  background-color: white;
  border-radius: 50%;
}

.friend-card {
  border: 15px;
  border-radius: 50%;
}
</style>