<template>
  <footer v-scroll="scrollTop">
    <div class="container">
      <div class="row align-items-center border-bottom py-5">
        <div class="col-lg-4">
          <ul class="list-inline footer-menu text-center text-lg-left">
            <li class="list-inline-item">
              <a href="changelog.html">Changelog</a>
            </li>
            <li class="list-inline-item"><a href="contact.html">contact</a></li>
            <li class="list-inline-item"><a href="search.html">Search</a></li>
          </ul>
        </div>
        <div class="col-lg-4 text-center mb-4 mb-lg-0">
          <a class="navbar-brand" href="index.html">
            <img class="img-fluid" alt="Hugo documentation theme" />
          </a>
        </div>
        <div class="col-lg-4">
          <ul class="list-inline social-icons text-lg-right text-center">
            <li class="list-inline-item">
              <a href="#"><i class="ti-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="ti-twitter-alt"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="ti-github"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="ti-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-4 text-center">
        <small class="text-light"
          >Copyright © 2020 a hugo theme by
          <a href="https://themefisher.com">themefisher</a></small
        >
      </div>
    </div>

      <svg
      class="btn-scroll"
      @click="isScrollTop"
        width="60"
        height="60"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 9C25.119 9 9 25.119 9 45C9 64.881 25.119 81 45 81C64.881 81 81 64.881 81 45C81 25.119 64.881 9 45 9ZM59.121 41.121C57.948 42.294 56.052 42.294 54.879 41.121L48 34.242V63C48 64.656 46.659 66 45 66C43.341 66 42 64.656 42 63V34.242L35.121 41.121C33.948 42.294 32.052 42.294 30.879 41.121C29.706 39.948 29.706 38.052 30.879 36.879L42.879 24.879C43.464 24.294 44.232 24 45 24C45.768 24 46.536 24.294 47.121 24.879L59.121 36.879C60.294 38.052 60.294 39.948 59.121 41.121Z"
          fill="#00d362"
        />
      </svg>
 
  </footer>
</template>
<script>
export default {
  methods: {
    scrollTop() {
      if (window.scrollY > 102) {
        document
          .querySelector(".btn-scroll")
          .classList.add("btn-scroll-visible");
      } else {
        document
          .querySelector(".btn-scroll")
          .classList.remove("btn-scroll-visible");
      }
    },
    isScrollTop() {
      window.scrollTo(0, 0);
    },
  },
  directives: {
    scroll: {
      created: (el, binding) => {
        window.addEventListener("scroll", binding.value);
      },
      unmounted: (el, binding) => {
        window.removeEventListener("scroll", binding.value);
      },
    },
  },
};
</script>

<style scoped>
.btn-scroll {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  transition: all 0.4s;
}
.btn-scroll-visible {
  visibility: visible;
  opacity: 1;
}
</style>


