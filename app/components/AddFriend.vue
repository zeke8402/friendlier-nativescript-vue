<template>
  <Page>
    <ActionBar title="Add Friend" class="action-bar" />
    <GridLayout rows="*,60">
      <ScrollView row="0">
        <StackLayout class="m-20">
          <TextField v-model="formFirstName" hint="First Name" />
          <TextField v-model="formLastName" hint="Last Name" />
          <Button class="btn btn-primary" text="Submit" @tap="submitFriend"></Button>
        </StackLayout>
      </ScrollView>
      <StackLayout col="0" row="1" orientation="horizontal" backgroundColor="#FFFFFF" height="60">
        <FriendlyMenu />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
<script>
import App from "./App";
import FloatLabel from "./custom/FloatLabel";
import FriendlyMenu from "./FriendlyMenu";
export default {
  components: {
    FriendlyMenu,
    FloatLabel
  },
  data() {
    return {
      formFirstName: "",
      formLastName: "",
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear()
    };
  },
  methods: {
    goBack() {
      this.$navigateTo(App, {});
    },
    submitFriend() {
      // Check for valid values
      if (this.formFirstName !== "" && this.formLastName !== "") {
        let friend = {
          first_name: this.formFirstName,
          last_name: this.formLastName
        };
        this.$store.dispatch("createFriend", friend); // insert person into db
        this.$navigateTo(App, {
          animated: true,
          transition: {
            name: "slideRight",
            duration: 250,
            curve: "easeIn"
          }
        });
      } else {
        console.log("I refuse to make this friend without more details");
      }
    }
  }
};
</script>
<style scoped>
</style>