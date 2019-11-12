<template>
  <Page>
      <GridLayout columns="*" rows="*,auto">

          <GridLayout row='0'>
            <Label text="Friend Wall WIP" />
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
    },
    data() {
        return {
            FriendlyMenu: FriendlyMenu,
        }
    }
    
}
</script>
<style scoped>

</style>