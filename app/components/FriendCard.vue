<template>

      <CardView class="friend-card" margin="20" elevation="20" radius='25'>
          <StackLayout backgroundColor="3c495e" orientation="horizontal">
              <Label horizontalAlignment="left" class="name-label text-center" width="60%" :text="friend.firstName + ' ' + friend.lastName" />
              <Label horizontalAlignment="right" class="avg-score text-center" width="28%">
                  <Span class='avg-span' text='0.00' verticalAlignment="center" />
              </Label>
          </StackLayout>
      </CardView>
    
</template>
<script>
export default {
    props: ['friend']
}
</script>
<style scoped>
.friend-card {
    padding: 10;
    height: 20%;
    background-color: #1c6b48;
}

.name-label {
    text-align: center;
    padding: 10;
    margin: 10;
    height: 300px;
    font-size:15em;
    font-weight: bold;
    background-color: #43b883;
    border-radius: 25px;
}

.avg-score {
    text-align: center;
    padding: 10;
    margin: 10;
    height: 300px;
    font-size: 25em;
    background-color: #5ff4f8;
    border-radius: 25px;
}

.avg-span {
    margin-top: 22%;
}
</style>