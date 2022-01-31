<template>
  <div>
  <welcome />
  <writings />
  <!-- <blog /> -->
  <about />
  <!-- <contact /> -->
  </div>
</template>

<script>
  import Welcome from '../components/Welcome'
  import Writings from '../components/Writings'
  // import Blog from '../components/Blog'
  import About from '../components/About'
  // import Contact from '../components/Contact'

  export default {
    name: 'Home',

    components: {
      Welcome,
      Writings,
      // Blog,
      About,
      // Contact,
    },
  }
</script>
