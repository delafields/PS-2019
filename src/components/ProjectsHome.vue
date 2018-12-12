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
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link class="project-title" :to="'/projects/' + post.slug">
          {{post.title}}
        </router-link>
        <br>
        <h2 class="project-description">{{post.summary}}</h2>
        <hr class="hr-style">
      </div>
    </div>

    <TinyFooter />

  </div>
</template>

<script>
  import TitleBar from './TitleBar'
  import TinyFooter from './TinyFooter'

  import Butter from 'buttercms';

  const butter = Butter(process.env.VUE_APP_BUTTERTOKEN);

  export default {
    name: 'projects-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
          console.log(this.posts)
        })
      }
    },
    created() {
      this.getPosts()
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
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center

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
  @include content-flex

.content-item
  width: 70%
  min-width: 300px
  max-width: 600px

.hr-style
  border-top: 1px dotted #8c8b8b
  border-bottom: 1px dotted #fff

.project-title
  overflow-wrap: break-word

/* Typography */

// Font Family
.project-title
  @include monoton

.project-description
  @include news-cycle

// Sizing
.project-title
  font-size: 40px

.project-description
  font-size: 20px

// Colors
.project-title, .project-description
  color: black

.project-title
  text-decoration: none
  @include title-transition
  &:hover
    color: $yeller
    @include shadow-to-right

// Quirks
@media screen and (max-width: 800px)
  .project-title
    font-size: 25px
    color: $yeller
    @include shadow-to-right
    display: block
    text-align: center
</style>
