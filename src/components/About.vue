<style>
p {
  font-size: 18px;
}
</style>

<template>
  <v-container>
    <br />
    <v-row justify="center">
      <v-col cols="9">
        <h1>About R. L. H. Watson</h1>
        <v-row align="center" justify="center">
          <v-col cols="7">
            <v-card flat color="transparent">
              <div align="justify">
                <p>
                  Watson was born one of triplets in Glasgow, Scotland, on the
                  sixth of March 2000. He attended Christie Park Primary School,
                  the Vale of Leven Academy, and Balfron High School. For him,
                  History and English quickly became the most enjoyable subjects
                  at school, allowing stories of fiction and of the past to
                  influence his early writings. Much of these were handwritten
                  stories in jotters, on spare bits of printer paper, and even
                  vocally shared amongst friends and family. From a young age, a
                  creative light flickered behind two blue eyes. These were the
                  years of learning how to imagine a story, the years of
                  learning how to write a story were to follow.
                </p>
                <p>
                  Studying at the University of St Andrews instilled Watson with
                  the academic discipline, spending four years reading Ancient
                  and Medieval History. Although passionate about academia, he
                  maintained writing fiction. More and more poems were sealed
                  from the light of day in a small journal and the paper basket
                  received much attention from many thrown out stories. This
                  grind sharpened his wits and allowed him to develop adept
                  writing styles for the stories he wants to tell.
                </p>
                <p>
                  He currently resides in St. Andrews, sharing an apartment with
                  his partner, as well as his guide dog Duke.
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card flat color="transparent" align="center">
              <v-img max-width="100%" src="..\..\img\author.png"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <h1>Contact</h1>
        <p align="justify">
          As a writer trying to get published, please do contact me if you wish
          to discuss my works. However, I am unable to read any manuscripts or
          comment on any budding writer’s stories due to legal reasons.
        </p>
        <div align="center">
          <v-btn
            class="mx-2"
            fab
            dark
            large
            color="primary"
            href="mailto:hello@rlhw.co.uk"
          >
            <v-icon dark> mdi-email </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            large
            color="primary"
            href="https://www.facebook.com/RLHWATTO"
            target="_blank"
          >
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>
        </div>
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
};
</script>
