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

                        <FriendlyMenu></FriendlyMenu>


</GridLayout>
</Page>
</template>

<script>

import App from './App';
import AddFriend from './AddFriend';
import FriendlyMenu from './FriendlyMenu';
export default {
    components: {
        FriendlyMenu
    },
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
            addFriendPage: AddFriend,
            FriendlyMenu: FriendlyMenu
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
