<template>
<Page>
<GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">


             <TextView editable="false">
                            <FormattedString>
                                <Span
                                    text="This is a text view that uses attributed text. You can use text attributes such as " />
                                <Span text="bold, " fontWeight="Bold" />
                                <Span text="italic " fontStyle="Italic" />
                                <Span text="and " />
                                <Span text="underline."
                                    textDecoration="Underline" />
                            </FormattedString>
                        </TextView>

               <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
                <GridLayout rows="*" columns="*,*,*,*,*">
                    <Image col="1" row="0" @tap="$navigateTo(addFriendPage)" height="25"
                        width="25" margin="10" src="~/assets/images/shape1@3x.png"></Image>
                    <Image col="2" row="0" @tap="testQuery()" height="60"
                        width="60" margin="10" src="~/assets/images/home@3x.png"></Image>
                </GridLayout>
            </StackLayout>

</GridLayout>
</Page>
</template>

<script>

import App from './App';
import AddFriend from './AddFriend';
export default {
    methods: {
        testInsert() {
            console.log('Testing insert functionality of the database')
            /*
            let zeke = { firstname: 'John', lastname: 'Ezekiel'}
            this.$store.dispatch('insert', zeke) // insert person into db
            */
           this.$navigateTo(AddFriend, {
               animated: true,
               transition: {
                   name: "slideLeft",
                   duration: 250,
                   curve: "easeIn"
               }
           })
        },
        testQuery() {
            console.log('Testing query functionality of the database')
            this.$store.dispatch('query') // load list into vuex
            let data = this.$store.state.data
            for(var i = 0; i < data.length; i++) {
                console.log('First name: ' + data[i].firstname + ', Last Name: ' + data[i].lastname)
            }
        }
    },
    data () {
        return {
            addFriendPage: AddFriend
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
