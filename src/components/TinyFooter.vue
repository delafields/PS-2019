<template>
    <div id="tiny-footer">
      <h6>Made in the U.S.A.</h6>
      <h6>Jeremy Fields 2019</h6>
      <h6>Thanks for passing through</h6>
    </div>
</template>

<script>

export default {
  name: 'tiny-footer'
};
</script>

<style scoped lang="sass">
@import "../general"

#tiny-footer
  grid-area: tiny
  @include tiny-flex
  @include news-cycle
  font-size: 10px
</style>
