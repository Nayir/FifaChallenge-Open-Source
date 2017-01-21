<template>
  <div>
    <nav class="uk-navbar-container uk-navbar-transparent uk-light" uk-navbar>

        <div class="uk-navbar-left">
            <a href="#offcanvas-slide" class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle></a>
            <div id="offcanvas-slide" uk-offcanvas>
                <div class="uk-offcanvas-bar">

                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>

                </div>
            </div>
        </div>

        <div class="uk-navbar-center">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="/">LOGO</a></li>
            </ul>

        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li>
                    <a href="#">Parent</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>

        </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>

</style>
