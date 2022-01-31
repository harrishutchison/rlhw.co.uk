<style>
@media screen and (max-width: 400px) {
  .head {
    width: 100%;
    height: 900px;
    padding-top: 30%;
    background-color: #420000;
  }
}

@media screen and (min-width: 401px) and (max-width: 900px) {
  .head {
    width: 100%;
    height: 100vh;
    padding-top: 30%;
    background-color: #420000;
  }
}

@media screen and (min-width: 901px) {
  .head {
    width: 100%;
    height: 400px;
    padding-top: 3.5%;
    background-color: #420000;
  }
}
</style>

<template>
  <div class="head">
    <v-layout fill-height align-center v-if='!this.$vuetify.breakpoint.mdAndDown'>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="2">
            <v-card flat color="transparent" align="center">
              <v-img max-width="80%" src="..\..\img\logo.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="10">
            <v-card flat color="transparent">
              <div>
                <h1>
                  R. L. H. Watson is a writer of adventure, medieval fantasy,
                  science fiction, and folkloric ballads.
                </h1>
              </div>
              <div>
                <p>
                  This website is to showcase works intended for publication. I
                  have gained a following over the years, composed of friends,
                  family, associates and strangers. Information about my novels,
                  short stories, and poems are displayed so I can share with
                  you, the audience, the tales that swirl around my head. I hope
                  you enjoy.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout fill-height align-center v-else>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card flat color="transparent" align="center">
              <v-img max-width="60%" src="..\..\img\logo.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="10">
            <v-card flat color="transparent" align="justify">
              <div>
                <h1>
                  R. L. H. Watson is a writer of adventure, medieval fantasy,
                  science fiction, and folkloric ballads.
                </h1>
              </div>
              <div>
                <p>
                  This website is to showcase works intended for publication. I
                  have gained a following over the years, composed of friends,
                  family, associates and strangers. Information about my novels,
                  short stories, and poems are displayed so I can share with
                  you, the audience, the tales that swirl around my head. I hope
                  you enjoy.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    //
  }),
};
</script>
