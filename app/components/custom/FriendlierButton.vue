<!-- What's up, future me?! 
    This button receives a navigation method (yes, the full method)
    and executes it when clicked. We should rename this to friendlierNavButton or something
    -->
<template>
    <CardView class="text-center friendlier-card" margin="20" elevation="3" @tap="navigateToProp">
        <Label class="friendlier-button-text" text="Create One" />
    </CardView>
</template>
<script>
export default {
    props: {
        navigateMethod: { type: Function },
    },
    methods: {
        navigateToProp() {
            this.navigateMethod()
        }
    },
}
</script>
<style scoped>
.friendlier-button-text {
    color: white;
    margin: 40px;
}

.friendlier-card {
    background-color: black;
}
</style>