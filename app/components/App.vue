<template>
<Page class='page'>
<GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">

               <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
                <GridLayout rows="*" columns="*,*,*,*,*">
                    <Image col="1" row="0" @tap="testInsert()" height="25"
                        width="25" margin="10" src="~/assets/images/shape1@3x.png"></Image>
                    <Image col="2" row="0" @tap="testQuery()" height="60"
                        width="60" margin="10" src="~/assets/images/home@3x.png"></Image>
                </GridLayout>
            </StackLayout>

</GridLayout>
</Page>
</template>

<script>
export default {
    methods: {
        testInsert() {
            console.log('Testing insert functionality of the database')
            let zeke = { firstname: 'John', lastname: 'Ezekiel'}
            this.$store.dispatch('insert', zeke) // insert person into db
            this.$store.dispatch('query') // load list into vuex
            let data = this.$store.state.data
            console.log(data)
        },
        testQuery() {
            console.log('Testing query functionality of the database')
        }
    },
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
{
