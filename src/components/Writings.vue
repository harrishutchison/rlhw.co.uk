<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols='size()'>
        <v-card flat color="transparent">
          <div align="center">
            <h1>Wailing in the Wetlands</h1>
            <v-img height="580px" src="..\..\img\witw.png"></v-img>
          </div>
          <div align="right">
            <h3>Sci-Fi Short Story</h3>
          </div>
          <div align="justify">
            <p>
              Marsden’s hand shook when he tried to put pen to paper. He could
              not bring himself to open the door, terrified of the journey on
              the other side. It would be filled with constant questioning,
              neverending doubting, and many a sleepless night. When he got the
              offer to escape his office he jumped at the chance. However,
              Vindogon, a dead marshy planet, was not what he expected. Lifeless
              jagged trees stuck out of the mud and a permanent overcast
              shrouded his time there. It was his first and last archaeological
              dig.
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col :cols='size()'>
        <v-card flat color="transparent">
          <div align="center">
            <h1>The Tales of Alex de Vale</h1>
            <v-img max-width="100%" src="..\..\img\author.png"></v-img>
          </div>
          <div align="right">
            <h3>Folkloric Ballads</h3>
          </div>
          <div align="justify">
            <p>
              In the valley between the River Clyde and Loch Lomond a history
              was lost. The tales of an early medieval hero are now sung. Alex
              de Vale, the father of the valley, a champion for those in the
              glen. From the fast-flowing water to the rich covered hills he had
              a great fondness for the place he called home.
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col :cols='size()'>
        <v-card flat color="transparent">
          <div align="center">
            <h1 align="center">The Rogue Ambition</h1>
            <v-img max-width="62.5%" src="..\..\img\logo.png"></v-img>
          </div>
          <div align="right">
            <h3>Medieval Fantasy Novel</h3>
          </div>
          <div align="justify">
            <p>
              An adventure in the making. Watson considers this to be his
              greatest work, although it’s completion is in no hurry. This
              medieval fantasy introduces the reader to Karsthearth, a land
              recovering from the collapse of the Age of Kings. Reximus Alewood
              is a fledgling in this world of politicians, generals, merchants,
              and murderers. These other players are important in shaping not
              only his future, but also the man he comes to be.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    //
  }),
  methods: {
    size:function() {
      if (this.$vuetify.breakpoint.mdAndDown)
        return 12;
      else
        return 4;
    }
  }
};
</script>
