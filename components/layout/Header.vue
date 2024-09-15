<script setup>


import logoImage from '~/assets/images/logo.png'

const logo = ref(logoImage)

</script>


<template lang="pug">
header.l-header
  .l-header__content
    h1.l-header__logo
      NuxtLink(to="/")
        img(:src="logo" alt="Logo")

    Globalnav
</template>

<style lang="scss">

</style>



