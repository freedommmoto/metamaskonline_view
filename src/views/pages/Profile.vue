<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Update Profile</h3>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              type="email"
              v-model="emailtext"
              label="username"
              disabled
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
                type="code"
                v-model="code"
                label="you validation code is, you need to add this code in line group bot for active you wallet"
                disabled
                filled
                background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="password"
              filled
              background-color="transparent"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="New Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn class="text-capitalize mt-5 element-0" color="success">update password</v-btn>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Metamask Wallet </h3>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="mt-4">
              <v-select :items="items" disabled value="bsc-testnet" filled label="Select Chain" background-color="transparent"></v-select>
            </div>
            <div class="mt-4">
              <v-text-field
                  v-model="walletName"
                  label="you wallet name eg patara wallet"
                  filled
                  background-color="transparent"
              ></v-text-field>
            </div>
            <div class="mt-4">
                <v-text-field
                  v-model="dtext"
                  label="you metamask wallet eg 0x75956f45E5439C15441868F732D09ca8d85133E5'"
                  filled
                  background-color="transparent"
                ></v-text-field>
            </div>
            <div class="mt-4">
              <div style="float: left;margin-right: 4px;margin-left: 10px"><input type="checkbox" id="checkbox" v-model="checked" /></div>
              <h4 style="margin-right: 10px"><label for="checkbox">Follow alert this wallet</label></h4>
            </div>
              <v-btn class="text-capitalize mt-5 element-0" color="success">update wallet</v-btn>
              <v-btn style="margin-left: 10px" class="text-capitalize mt-5 element-0" color="accent">remove wallet</v-btn>
          </v-card-text>

<!--          <v-divider></v-divider>-->
<!--          <v-card-text>-->
<!--            <h3 class="title blue-grey&#45;&#45;text text&#45;&#45;darken-2 font-weight-regular">Metamask Wallet (backup)</h3>-->
<!--          </v-card-text>-->
<!--          <v-divider></v-divider>-->
<!--          <v-card-text>-->
<!--            <div class="mt-4">-->
<!--              <v-select :items="items" disabled value="bsc-testnet" filled label="Select Chain" background-color="transparent"></v-select>-->
<!--            </div>-->
<!--            <div class="mt-4">-->
<!--              <v-text-field-->
<!--                  v-model="walletName"-->
<!--                  label="you wallet name eg patara wallet"-->
<!--                  filled-->
<!--                  background-color="transparent"-->
<!--              ></v-text-field>-->
<!--            </div>-->
<!--            <div class="mt-4">-->
<!--              <v-text-field-->
<!--                  v-model="dtext"-->
<!--                  label="you metamask wallet eg 0x75956f45E5439C15441868F732D09ca8d85133E5'"-->
<!--                  filled-->
<!--                  background-color="transparent"-->
<!--              ></v-text-field>-->
<!--            </div>-->
<!--            <div class="mt-4">-->
<!--              <div style="float: left;margin-right: 4px;margin-left: 10px"><input type="checkbox" id="checkbox" v-model="checked" /></div>-->
<!--              <h4 style="margin-right: 10px"><label for="checkbox">Follow alert this wallet</label></h4>-->
<!--            </div>-->
<!--            <v-btn class="text-capitalize mt-5 element-0" color="success">update wallet</v-btn>-->
<!--            <v-btn style="margin-left: 10px" class="text-capitalize mt-5 element-0" color="accent">remove wallet</v-btn>-->
<!--          </v-card-text>-->

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: "Profile",
  created () {
  },
  data: () => ({
    code:"1234",
    walletName:"",
    dtext: "0x75956f45E5439C15441868F732D09ca8d85133E5",
    emailtext: "patara",
    password: "",
    disableinput: "",
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    show1: true,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    items: ["bsc-testnet", "bsc", "eth"]
  }),
  components: {},
  mounted () {
    axios
        .post('http://localhost:8888/test')
        .then(response => (this.info = response))
  },
  methods: {
  }
};
</script>
