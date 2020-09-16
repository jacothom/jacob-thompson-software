<template>
  <!--  <template>-->
  <div>
    <b-navbar>
      <template slot="brand">
        <a class="navbar-item" href="/"> Jacob Thompson Software </a>
      </template>
      <template slot="start">
        <b-navbar-item href="/"> Home </b-navbar-item>
        <b-navbar-item href="/about"> About </b-navbar-item>
        <b-navbar-item href="/blog"> Blog </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container column is-10">
      <nuxt />
    </div>
  </div>

  <!--  </template>-->
  <!--  <div>-->
  <!--    <nav-->
  <!--      class="navbar header has-shadow is-primary"-->
  <!--      role="navigation"-->
  <!--      aria-label="main navigation"-->
  <!--    >-->
  <!--      <div class="navbar-brand">-->
  <!--        <a class="navbar-item" href="/"> Jacob Thompson Software </a>-->

  <!--        &lt;!&ndash;        <div class="navbar-burger">&ndash;&gt;-->
  <!--        &lt;!&ndash;          <span />&ndash;&gt;-->
  <!--        &lt;!&ndash;          <span />&ndash;&gt;-->
  <!--        &lt;!&ndash;          <span />&ndash;&gt;-->
  <!--        &lt;!&ndash;        </div>&ndash;&gt;-->
  <!--      </div>-->
  <!--    </nav>-->

  <!--    <section class="main-content columns">-->
  <!--      <aside class="column is-2 section">-->
  <!--        <p class="menu-label is-hidden-touch">General</p>-->
  <!--        <ul class="menu-list">-->
  <!--          <li v-for="(item, key) of items" :key="key">-->
  <!--            <nuxt-link :to="item.to" exact-active-class="is-active">-->
  <!--              <b-icon :icon="item.icon" /> {{ item.title }}-->
  <!--            </nuxt-link>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </aside>-->

  <!--    </section>-->
  <!--  </div>-->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
