<template>
<Page>
    <ActionBar :title="fullName" class='action-bar'>
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      </ActionBar>

    <GridLayout class="app-bg text-center" orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="true">
        <StackLayout orientation="vertical" class="text-center">
            <Image
                class="profile-image"
                width="50%"
                stretch="fill"
                :src="pictureFromCamera"
            />
            <Label :text="friend.firstName" />
            <Button text="Add Photo" @tap="addPhoto" />
        </StackLayout>
      </ScrollView>
    </GridLayout>
</Page>
</template>
<script>
import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "@nativescript/core/image-source";
import * as camera from "nativescript-camera";

export default {
    props: ["friend"],
    data() {
        return {
            base64Image: null,
            pictureFromCamera: null,
        }
    },
    computed: {
        fullName() {
            return this.friend.firstName + ' ' + this.friend.lastName;
        },
        getProfilePhoto() {
            console.log(this.base64Image)
            if (this.base64Image) {
                console.log('here we go again')
                return 'data:Image/png;base64,' + this.base64Image
            } else {
                console.log('not your day')
                return "~/assets/images/no-image.png";
            }
        }
    },
    methods: {
        addPhoto() {
            camera.takePicture({width: 600, height:600, keepAspectRatio: false })
                .then(imageAsset => {
                    this.pictureFromCamera = imageAsset;
                    let source = ImageSource.fromAsset(imageAsset).then((source) => {
                        this.base64image = source.toBase64String("jpg", 60); 
                    });
                }).catch((err) => {
                    console.log("Error -> " + err.message);
                })
        }
    }

}
</script>
<style scoped>
.profile-image {
  border-radius: 100%;
}
</style>
