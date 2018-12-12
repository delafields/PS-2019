<template>
  <div class="site">

    <TitleBar
    class="title"
      :pageTitle="post.data.title"
      leftLinkPath="/projects/"
      leftLinkName="🔙"
      />

    <div id="blog-post">
      <div v-html="post.data.body"></div>
      <div id="blog-post-footer">
        <h4>
          {{ post.data.author.first_name }}
          {{ post.data.author.last_name }} ||
          {{ post.data.published.slice(0,10) }}
        </h4>
        <img src="../assets/buttercms-logo.png" alt="Butter CMS" width="200px" height="50px" />
      </div>
    </div>

    <TinyFooter/>

  </div>

</template>

<script>
  import TitleBar from './TitleBar'
  import TinyFooter from './TinyFooter'

  import Butter from 'buttercms';
  const butter = Butter(process.env.BUTTER_TOKEN);

  export default {
    name: 'project',
    data() {
      return {
        post: null
      }
    },
    components: {
      TitleBar,
      TinyFooter
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
            console.log(this.post.data)
          }).catch(res => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style lang="sass">
@import "../general"

/* Layout */
.site
  background-color: $cream
  @include three-borders-in-a-good-neighborhood
  @include grid-layout

.title
  grid-area: title

/* font-family */
#blog-post
  h1, h2, h3, h4, h5, ul, ol, p, table
    @include news-cycle

/* Default Buttercms stuff */
#blog-post
  grid-area: content
  overflow: scroll

  iframe
    max-width: 100%

  img, iframe
    display: block
    margin-left: auto
    margin-right: auto

  table
    margin-left: auto
    margin-right: auto

  #blog-post-footer
    text-align: center

  h1, h2, h3, h4, h5
    margin-bottom: 1em
    margin-top: 1.5em

  ul, ol
    margin-bottom: 1.25em

    li
      margin-bottom: 0.25em
      margin-left: 1em

  p
    font-size: 1.25em
    line-height: 1.58
    margin-bottom: 1.25em
    font-weight: 400
    letter-spacing: -.003em

    a
      color: red
      text-decoration: none

  /* Responsive default image width */
  img
    max-width: 100%
    height: auto

  /* Responsive floating */
  @media only screen and (min-width: 720px)
    .butter-float-left
      float: left
      margin: 0px 10px 10px 0px


    .butter-float-right
      float: right
      margin: 0px 0px 10px 10px


  /* Image caption */
  figcaption
    font-style: italic
    text-align: center
    color: #ccc

  p code
    padding: 2px 4px
    font-size: 90%
    color: #c7254e
    background-color: #f9f2f4
    border-radius: 4px
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace

  pre
    display: block
    padding: 1em
    margin-left: auto
    margin-right: auto
    max-width: 900px
    font-size: 1em
    line-height: 1.4
    word-break: break-all
    word-wrap: break-word
    color: #333333
    background-color: #f5f5f5
    font-family: Menlo, Monaco,Consolas, "Courier New", monospace

  blockquote
    border-left: 2px solid red
    padding-left: 4px
    p
      opacity: 0.7

  table
    max-width: 800px
    text-align: center

</style>
