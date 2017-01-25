<template>
  <div>
    <ul class="uk-flex-center uk-margin-large-top router-tab">
      <router-link v-for="link in links" tag"li" to="{ name: link.routername }" >
        <a> {{ link.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
// Need Update - tag"li" options is not meant to be used with components.
// https://github.com/vuejs/vue-router/issues/821
export default {
  name: 'routerTab',
  data () {
    return {
      links: {
        profile: {
          title: 'Profile',
          routername: 'user.profile'
        },
        matchs: {
          title: 'Matchs',
          routername: 'user.matchs'
        },
        tournaments: {
          title: 'Tournaments',
          routername: 'user.tournaments'
        },
        settings: {
          title: 'Settings',
          routername: 'user.settings'
        }
      }
    }
  }
}
</script>

<style>

</style>
