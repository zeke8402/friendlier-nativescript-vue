<template>
  <StackLayout col="0" row="1" orientation="horizontal" backgroundColor="#FFFFFF" height="60">
    <GridLayout rows="*" columns="*,*,*,*">
      <GridLayout rows="*, auto" cols="auto" col="0" row="0" width="25%">
        <Image
          col="2"
          row="0"
          @tap="$navigateTo(appPage)"
          height="60"
          width="60"
          margin="10"
          src="~/assets/images/home@3x.png"
        ></Image>
        <Label row="1" text="Home" class="text-center"></Label>
      </GridLayout>
      <GridLayout rows="*, auto" cols="auto" col="1" row="0" width="25%">
        <Image
          col="2"
          row="0"
          @tap="$navigateTo(addFriendPage)"
          height="60"
          width="60"
          margin="10"
          src="~/assets/images/home@3x.png"
        ></Image>
        <Label row="1" text="Add Friend" class="text-center"></Label>
      </GridLayout>
      <GridLayout rows="*, auto" cols="auto" col="2" row="0" width="25%">
        <Image
          col="2"
          row="0"
          @tap="$navigateTo(friendWallPage)"
          height="60"
          width="60"
          margin="10"
          src="~/assets/images/home@3x.png"
        ></Image>
        <Label row="1" text="Friends" class="text-center"></Label>
      </GridLayout>
      <GridLayout rows="*, auto" cols="auto" col="3" row="0" width="25%">
        <Image
          col="2"
          row="0"
          @tap="$navigateTo(settingsPage)"
          height="60"
          width="60"
          margin="10"
          src="~/assets/images/home@3x.png"
        ></Image>
        <Label row="1" text="Settings" class="text-center"></Label>
      </GridLayout>
    </GridLayout>
  </StackLayout>
</template>
<script>
import App from "./App";
import AddFriend from "./AddFriend";
import FriendWall from "./FriendWall";
import Settings from "./Settings";
export default {
  data() {
    return {
      appPage: App,
      addFriendPage: AddFriend,
      friendWallPage: FriendWall,
      settingsPage: Settings
    };
  }
};
</script>
<style scoped>
</style>