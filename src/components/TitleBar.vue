<template>
  <div class="title-container">
    <router-link :to="leftLinkPath" class="title-link">{{ leftLinkName }}</router-link>
    <a class="title-name">{{ pageTitle }}</a>
  </div>
</template>

<script>
export default {
  name: 'title-bar',
	props: {
		pageTitle: String,
    leftLinkName: String,
    leftLinkPath: String
	}
};
</script>

<style lang="sass" scoped>
@import "../general"
$glow: 2px 2px 8px red, 0 0 5px white

.title-container
  position: relative
  text-align: center

.title-link
  position: absolute
  left: 10px

/* Typography */

// Font Family
.title-name
  @include monoton

.title-link
  @include news-cycle

// Sizing
.title-name
  font-size: 40px

.title-link
  font-size: 30px

// Colors
.title-name
  color: black
  //color: $yeller
  //text-shadow: $glow

.title-link
  color: black
  text-decoration: none
  @include shadow-transition
  &:first-child:hover
    @include shadow-to-right

// Quirks
@media screen and (max-width: 800px)
  .title-container
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-orient: vertical
    -webkit-box-direction: reverse
    -ms-flex-direction: column-reverse
    flex-direction: column-reverse

  .title-link
    font-size: 20px
    position: static
    &:first-child
      &:hover, &:visited, &:active
        text-shadow: none
        color: black

</style>
