<template>
  <header class="base__header">
    <div class="header-flex">
      <button
        class="custom__button"
        :class="{ 'custom__button-active': route.path === '/doctors' }"
        @click="router.push('/doctors')"
      >
        Врачи
      </button>
      <button
        class="custom__button"
        :class="{ 'custom__button-active': route.path === '/nurses' }"
        @click="router.push('/nurses')"
      >
        Медсестры
      </button>
    </div>
  </header>
  <main class="base__container">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss">
body {
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
}
.base {
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100dvw;
    height: fit-content;
    background-color: aliceblue;
    .header-flex {
      display: flex;
      padding: 10px;
      width: 100%;
      height: 30px;
      gap: 10px;
      align-items: center;
      justify-content: flex-start;
      .custom__button {
        border: none;
        outline: none;
        margin: 0;
        padding: 8px;
        border-radius: 8px;
        height: 31px;
        background-color: aqua;
        cursor: pointer;
        transition: background-color 0.3s ease;
        will-change: background-color;
        &-active {
          background-color: bisque;
        }
      }
    }
  }
  &__container {
    margin-top: 55px;
  }
}
</style>
