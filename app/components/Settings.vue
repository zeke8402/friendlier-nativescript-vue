<template>
  <Page>
      <GridLayout columns="*" rows="*,auto">

          <GridLayout row='0'>
            <Label text="Settings WIP" />
          </GridLayout>
          <FriendlyMenu row='1'></FriendlyMenu>

      </GridLayout>
  </Page>
</template>
<script>
    import App from "./App";
    import FriendlyMenu from "./FriendlyMenu";
export default {
    components: {
        FriendlyMenu
    },
    methods: {
        goBack() {
            this.$navigateTo(App, {});
        }
    }
    
}
</script>
<style scoped>

</style>