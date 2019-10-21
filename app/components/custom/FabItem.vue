<template>
	<StackLayout class="fab-item" :backgroundColor="color" @onButtonTap="testWhatever">
		<Label :text="title" horizontalAlignment="center" />
	</StackLayout>
</template>

<script>
	export default {
		methods: {
			testWhatever() {
				console.log('testing')
			}
		},
	props: { title: String, color: String }
}

</script>

<style scoped>
	.fab-item {
		width: 40;
		height: 40;
		border-radius: 20;
		color: #fff;
		font-weight: bold;
		vertical-align: center;
		z-index: 9999;
	}
</style>