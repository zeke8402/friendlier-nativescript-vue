<template>
  <CardView class="friend-card text-center" margin="20" elevation="2" radius="25">
    <StackLayout class="stacked">
      <Label text="You don't have any friends yet" />
      <Button class="createBtn" text="Create One" @tap="showCreateFriend" />

      <Label text="Create One" />
    </StackLayout>
  </CardView>
</template>

<script>
import AddFriend from './AddFriend'
export default {
  methods: {
    showCreateFriend() {
      console.log('Done')
      this.$navigateTo(AddFriend)
    }
  }
};
</script>
<style scoped>
.friend-card {
  border: 15px;
  border-radius: 50%;
  height: 80em;
}

.stacked {
    padding: 20em;
}
</style>