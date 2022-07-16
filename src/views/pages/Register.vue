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
              v-model="dtext"
              label="you metamask wallet eg 0x75956f45E5439C15441868F732D09ca8d85133E5"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              type="username"
              v-model="username"
              label="username e.g. patara"
              filled
              background-color="transparent"
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


            <v-btn class="text-capitalize mt-5 element-0" color="success">Submit</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      password: '',
      confirmPassword: '',
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
  //
  // data: () => ({
  //   dtext: "0x75956f45E5439C15441868F732D09ca8d85133E5",
  //   emailtext: "",
  //   password: "22",
  //   confirmPassword: "",
  //   disableinput: "",
  //   checkbox1: "",
  //   checkbox2: "",
  //   checkbox3: "",
  //   show1: true,
  //   passwordRules: [
  //     (value) => !!value || 'Please type password.',
  //     (value) => (value && value.length >= 6) || 'minimum 6 characters',
  //   ],
  //   confirmPasswordRules: [
  //     (value) => !!value || 'type confirm password',
  //     (value) =>
  //         value === this.password || 'The password confirmation does not match.',
  //   ],
  //   // rules: {
  //   //   matchingPasswords: v => v === this.password || "The password confirmation does not match.",
  //   //   required: value => !!value || "Required.",
  //   //   min: v => v.length >= 8 || "Min 8 characters!",
  //   // },
  // }),
  methods: {

  },
  components: {}
};
</script>
