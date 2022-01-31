<style>
.font {
  font-family: "Times New Roman", Times, serif !important;
}

@media screen and (min-width: 961px) {
  p {
    font-size: 18px !important;
  }
}
</style>

<template>
  <v-app class="font">
    <v-app-bar flat absolute color="transparent" prominent dark height="120px">
      <v-layout justify-center>
        <v-container>
          <v-layout>
            <div align="center">
              <h1>R. L. H. Watson</h1>
            </div>
            <v-spacer></v-spacer>
            <div v-if="!this.$vuetify.breakpoint.smAndDown">
              <v-btn
                fab
                dark
                elevation="0"
                large
                color="primary"
                href="mailto:hello@rlhw.co.uk"
              >
                <v-icon dark> mdi-email </v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                elevation="0"
                large
                color="primary"
                href="https://www.facebook.com/RLHWATTO"
                target="_blank"
              >
                <v-icon dark> mdi-facebook </v-icon>
              </v-btn>
            </div>
          </v-layout>
        </v-container>
      </v-layout>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
