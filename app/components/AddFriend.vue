<template>
  <Page>
    <ActionBar title="Add Friend" class="action-bar" />
    <GridLayout rows="*,60">
    <ScrollView row="0">
      <StackLayout class="m-20">
        <FloatLabel placeholder="First Name" />
        <FloatLabel placeholder="Last Name" />
        <Label text="Birthday" class="birthdayLabel text-center" />
        <DatePicker :year="currentDay" :month="currentMonth" :day="currentYear"
           minDate="1970-01-01" maxDate="2100-01-01" />
        <Button text="Submit" />
      </StackLayout>
    </ScrollView>
               <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
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
          currentDay: new Date().getUTCDate(),
          currentMonth: new Date().getUTCMonth() + 1,
          currentYear: new Date().getUTCFullYear(),
      }
  },
  methods: {
    goBack() {
      this.$navigateTo(App, {});
    },
    submitFriend() {}
  }
};
</script>
<style scoped>
.birthdayLabel {
    font-size: 20em;
}
</style>