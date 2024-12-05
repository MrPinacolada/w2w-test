<template>
  <span class="base__chip"> {{ props.text }} </span>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
}

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.base__chip {
  position: relative;
  width: fit-content;
  height: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  font-size: 12px;
}
</style>
