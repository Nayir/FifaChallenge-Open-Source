<template>
  <div>
    <div id="tm-hero" class="tm-hero uk-block uk-block-large uk-cover-background uk-flex uk-flex-middle tm-height-viewport">
        <div class="pk-user pk-user-reset uk-form uk-form-stacked uk-width-medium-1-2 uk-width-large-1-3 uk-container" action="/user/resetpassword/request" method="post">
          <h1 class="uk-h2 uk-text-center">Forgot Password</h1>
          <p>Please enter your email address. You will receive a link to create a new password via email.</p>
          <div class="uk-form-row">
            <input class="uk-width-1-1" type="text" name="email" value="" placeholder="Email" required="" autofocus="">
          </div>
          <p class="uk-form-row">
            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1" type="submit">Request password</button>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Login',
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
</style>
