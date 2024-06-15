<script>
import navBar from './views/layout/navBar.vue'
import footer from './views/layout/footer.vue'
import homePage from './views/homePage.vue'

export default {
    components: {
        navBar,
        'FooterViews': footer,
        homePage
    }
}
</script>

<template>
  <navBar/>
 <router-view></router-view>
 <FooterViews></FooterViews>
</template>

