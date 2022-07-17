<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Register Form</h3>
            <h6 class="subtitle-2 font-weight-light">All with vuetify element attributes</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div>
              <h2>About this app </h2>
              User who used metamask might want to get alert. when have a new transaction come in same like user who using mobile banking app.
            </div>
            <div>
              you can enter group line with this QR code.
            </div>

            <img src="https://qr-official.line.me/sid/M/768mexlo.png?shortenUrl=true">

            <v-text-field
              v-model="wallet"
              label="you metamask wallet eg 0x75956f45E5439C15441868F732D09ca8d85133E5"
              filled
              background-color="transparent"
              :rules="walletRules"
            ></v-text-field>

            <v-text-field
              type="username"
              v-model="username"
              label="username e.g. patara"
              filled
              background-color="transparent"
              :rules="userNameRules"
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
            />

            <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock"
                type="password"
                :rules="confirmPasswordRules"
            />

            <v-btn class="text-capitalize mt-5 element-0" color="success" @click="checkBeforeSend()">Submit</v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import swal from 'sweetalert';
import {mapState} from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      wallet:'',
      username:'',
      password: '',
      confirmPassword: '',
      userNameRules: [
        (value) => !!value || 'Please type username.',
        (value) => (value && value.length >= 4) || 'minimum 4 characters',
      ],
      walletRules: [
        (value) => !!value || 'Please type wallet.',
        (value) => (value && value.length >= 38) || 'minimum 38 characters',
      ],
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
            value === this.password || 'The password confirmation does not match.',
      ],
    }
  },
  computed: {
    ...mapState(["api_url"]),
  },
  methods: {
    checkBeforeSend(){
      if ( this.username.length < 4){
        swal( "Please enter username more then 4");
        return;
      } else if ( this.password.length < 6){
        swal( "Please enter password more then 6");
        return;
      } else if ( this.wallet.length < 38){
        swal( "Please enter wallet more then 38");
        return;
      }
      this.addUser()
    },
    async addUser() {
      try {
        const config = {headers: {
            'Content-Type': 'application/json'
          }}
        const json = JSON.stringify({ wallet: this.wallet,username: this.username,password: this.password });
        const res = await axios.post(this.api_url + "/user/new/",json , config)
        console.log(res)
        if (res.status!==200){
          alert("error")
        }else{
          swal( "error case :"+res.data.error);
        }
      } catch ({message}) {
        console.log(message)
      }
    }
  },
  components: {}
};
</script>
