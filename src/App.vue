<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./sass/list";

.settlements {
	@extend %list-clear;
}
</style>
