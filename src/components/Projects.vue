<template>

  <div class="site">

    <TitleBar
      class="title"
      pageTitle="PROJECTS"
      leftLinkPath="/"
      leftLinkName="HOME"
      />

    <div class="content">
      <div
        class="content-item"
        v-for="(project,index) in projects"
        :key="project.date + '_' + index"
      >
        <h2 class="project-title">
          {{project.title}}
        </h2>
        <h2 class="project-description">{{project.description}}</h2>
        <div class="project-meta">
          <h5 class="meta-date">{{project.date}}</h5>
          <div>
            <a
              v-for="(link,index) in project.links"
              :href="link.address"
              target="_blank"
              class="meta-links"
            >
              {{link.name}}
            </a>
          </div>
        </div>
      </div>
    </div>

    <TinyFooter />

  </div>
</template>

<script>
  import TitleBar from './TitleBar'
  import TinyFooter from './TinyFooter'
  import projectsList from '../../public/projects.json'

  export default {
    name: 'projects-home',
    data() {
      return {
        projects: projectsList
      }
    },
    components: {
      TitleBar,
      TinyFooter
    }
  }
</script>

<style scoped lang="sass">
@import "../general"

@mixin content-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  -ms-flex-direction: column
  flex-direction: column
  -webkit-box-pack: justify
  -ms-flex-pack: justify
  justify-content: space-between

@mixin meta-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-pack: justify
  -ms-flex-pack: justify
  justify-content: space-between

//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
//				General Styles
//–––––––––––––––––––––––––––––––––-––––––––––––––––––––––––––––––––––––––––––––
.site
  background-color: $cream
  @include three-borders-in-a-good-neighborhood
  @include grid-layout

.title
  grid-area: title

.content
  grid-area: content
  overflow-y: scroll
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  grid-auto-rows: 200px
  grid-gap: 1rem
  padding: 20px

.content-item
  border-radius: 5px
  padding: 10px
  background-color: white
  @include content-flex

//$colors: red, blue, green, yellow
//@for $i from 1 through length($colors)
  .content-item:nth-child(#{length($colors)}n+#{$i})
    .hr-style
      border-bottom: 2px dotted nth($colors, $i)
      border-top: none

.hr-style
  border-top: 1px dotted #8c8b8b
  border-bottom: 1px dotted #fff

.project-meta
  border-top: 1px dotted #8c8b8b
  @include meta-flex

.project-title
  overflow-wrap: break-word

/* Typography */

// Font Family
.project-title
  @include anton

.project-description, .meta-date, .meta-links
  @include news-cycle

// Sizing
.project-title
  font-size: 30px
  text-transform: uppercase
  text-align: center

.project-description
  font-size: 20px
  text-align: center

// Colors
.project-title, .project-description
  color: black

.meta-links
  color: red
  &:hover
    color: black

// Quirks
.meta-links
  text-decoration: none

@media screen and (max-width: 800px)
  .site
    @include grid-layout-mobile

  .project-title
    font-size: 25px
    color: red
    display: block
    text-align: center
    &:hover
      color: red
      text-shadow: none

  .content
    grid-area: content
    overflow-y: visible
</style>
