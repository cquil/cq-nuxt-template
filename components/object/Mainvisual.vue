<script setup>
import mv_image from '~/assets/images/img-defult-thumbnail.jpg'
const mv = ref(mv_image)

</script>

<template lang="pug">
.c-mainvisual
  .c-mainvisual__image
    img(:src="mv" alt="a")
  .c-mainvisual__title MV section
</template>

<style lang="scss">



</style>


