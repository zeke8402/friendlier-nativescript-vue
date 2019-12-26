<template>
  <Page>
    <ActionBar title="Add Friend" class="action-bar" />
    <GridLayout rows="*,60" class="bg-gradient">
      <ScrollView row="0">
        <StackLayout class="m-20">
            <Image
                class="profile-image"
                width="50%"
                stretch="fill"
                :src="pictureFromCamera"
            />
          <Button class="friendlier-button" text="Add Photo" @tap="addPhoto"></Button>
          <TextField v-model="formFirstName" class="hint-placeholder" hint="First Name" />
          <TextField v-model="formLastName" class="hint-placeholder" hint="Last Name" />

          <Button class="friendlier-button" text="Submit" @tap="submitFriend"></Button>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>
<script>
import App from "./App";
import FloatLabel from "./custom/FloatLabel";
import FriendlyMenu from "./FriendlyMenu";

import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "@nativescript/core/image-source";
import * as camera from "nativescript-camera";
export default {
  components: {
    FriendlyMenu,
    FloatLabel
  },
  data() {
    return {
      formFirstName: "",
      formLastName: "",
      base64image: "",
      pictureFromCamera: "~/assets/images/no-image.png",
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear()
    };
  },
  methods: {
    addPhoto() {
      camera
        .takePicture({ width: 600, height: 600, keepAspectRatio: false })
        .then(imageAsset => {
          this.pictureFromCamera = imageAsset;
          let source = ImageSource.fromAsset(imageAsset).then(source => {
            this.base64image = source.toBase64String("jpg", 60);
          });
        })
        .catch(err => {
          console.log("Error -> " + err.message);
        });
    },
    goBack() {
      this.$navigateTo(App, {});
    },
    submitFriend() {
      // Check for valid values
      let base64Photo = null; 
      if(this.base64image) {
        base64Photo = this.base64image
      }

      if (this.formFirstName !== "" && this.formLastName !== "") {
        let friend = {
          first_name: this.formFirstName,
          last_name: this.formLastName,
          photo: base64Photo, // can be null if no photo found
        };
        this.$store.dispatch("createFriend", friend); // insert person into db
        this.$navigateTo(App, {
          animated: true,
          transition: {
            name: "slideRight",
            duration: 250,
            curve: "easeIn"
          }
        });
      } else {
        console.log("I refuse to make this friend without more details");
      }
    }
  }
};
</script>
<style scoped>
.hint-placeholder {
  color: black;
}
</style>