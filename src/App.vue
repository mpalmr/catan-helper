<template>
  <main id="app">
    <router-view />
  </main>
</template>

<style lang="scss">
@import "./sass/list";

.settlements {
	@extend %list-clear;
}
</style>
