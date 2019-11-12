<template>
<Page>
    <ActionBar :title="fullName" class='action-bar'>
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      </ActionBar>

    <Label :text="friend.firstName" />
</Page>
</template>
<script>
export default {
    props: ["friend"],
    computed: {
        fullName() {
            return this.friend.firstName + ' ' + this.friend.lastName;
        }
    }

}
</script>
<style scoped>

</style>
