<template>
  <v-app>
    <v-toolbar dark color="primary" min-height="60" max-height="60">
      <v-toolbar-title>Jacob Thompson Software</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-tabs
          align-with-title
          class="hidden-xs-only"
          background-color="transparent"
          style="padding-top: 4px"
        >
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/blog">Blog</v-tab>
        </v-tabs>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-bottom-navigation class="hidden-sm-and-up">
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/blog">
        <span>Blog</span>
        <v-icon>mdi-blogger</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
