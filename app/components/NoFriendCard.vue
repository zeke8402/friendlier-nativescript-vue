<template>
  <CardView class="friend-card text-center" margin="20" elevation="2" radius="25">
    <StackLayout class="stacked">
      <Label text="You don't have any friends yet" />
      <Label text="Create One" />
    </StackLayout>
  </CardView>
</template>

<script>
export default {};
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