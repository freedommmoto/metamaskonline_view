<template>
  <v-app id="materialpro" :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`">
      <router-view />
  </v-app>

</template>

<script>
import Pusher from 'pusher-js' // import Pusher
import { config } from '../config';
import swal from 'sweetalert';

export default {
  name: 'App',
  created () {
    this.subscribeCode()
  },
  methods:{
    subscribeCode () {
      console.log('in subscribe')
      let pusher = new Pusher(config.$pusher_key, { cluster: 'ap1' })
      let userID = localStorage.getItem('userID')
      pusher.subscribe('channel-userid-'+userID)
      pusher.bind('code-active', data => {

        swal({
          title: "You account is not active",
          text: "now you can see new transaction on metamask in you line.",
          icon: "success",
          button: "ok",
        });

        //let text = "You line code is "+data.message
        // swal(text,
        //     "please enter this code in line metamaskonline group" +
        //     " for validation and active you account.");



        console.log(data)
        //this.code = data.message
      })
    }
  },
  components: {
    
  }

};
</script>
