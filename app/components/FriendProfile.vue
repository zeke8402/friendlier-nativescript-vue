<template>
<Page>
    <ActionBar :title="fullName" class='action-bar'>
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
      </ActionBar>

    <GridLayout class="bg-gradient" orientation="vertical" width="100%" height="100%" columns="*" rows="*,auto">
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="true" class="text-center">
        <StackLayout orientation="vertical" class="m-20">
            <Image
                class="profile-image"
                width="50%"
                stretch="fill"
                :src="getProfilePhoto"
            />
            <Label class="name" :text="friend.firstName + ' ' + friend.lastName" horizontalAlignment="center" />
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
            pictureFromCamera: "~/assets/images/no-image.png",
        }
    },
    computed: {
        fullName() {
            return this.friend.firstName + ' ' + this.friend.lastName;
        },
        getProfilePhoto() {
            if (this.base64Image) {
                console.log('choosing base64')
                return "data:Image/png;base64," + this.base64Image;
            } 

            if (this.friend.photo) {
                console.log('choosing friend')
                return "data:Image/png;base64," + this.friend.photo;
            }

            console.log('choosing camera')
            return this.pictureFromCamera;
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

.name {
    font-size: 30px;
    font-family: 'Nunito';
}
</style>
