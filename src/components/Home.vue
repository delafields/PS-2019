<template>
  <div class="site">

    <div class="name-about-container">
  		<h1 class="name">JEREMY FIELDS</h1>
  		<h6 id="about">
  			I studied Economics at the University of Maryland, College Park</br>
  			I currently work as a Data Analyst <a href="https://www.merkleinc.com/" target="_blank">@Merkle</a></br>
  			In my free time I build things
  		</h6>
    </div>

		<div class="page-links">
			<router-link
        to="/projects/" class="page-link">PROJECTS</router-link>
			</br>
			<a href="mailto:badatfun@gmail.com" target="_blank" class="page-link">
        CONTACT
      </a>
		</div>

    <TinyFooter />

	</div>
</template>

<script>
import TinyFooter from './TinyFooter'

export default {
  name: 'home',
  components: { TinyFooter }
};
</script>

<style scoped lang="sass">
@import "../general"

/* Layout */
.site
  @include grid-layout
  @include three-borders-in-a-good-neighborhood
  background-image: url("../assets/natural-paper.png"), url('../assets/background-stripes.svg')
  background-size: auto, cover

.name-about-container
  grid-area: title
  margin-left: 20px

.page-links
  position: fixed
  bottom: 60px
  right: 50px
  text-align: center

/* Typography */

// Font Family
.name, #about, .page-link
  @include news-cycle

// Sizing
.name, .page-link
  font-size: 30px

// Colors
.name
  color: black

#about, .page-link
  color: red

#about > a
  color: black

// Quirks
.name
  letter-spacing: 5px

.page-link
  @include shadow-transition
  &:hover
    @include shadow-to-left

.page-link, #about > a
  text-decoration: none
  &:visited, &:active
    text-shadow: none
</style>
