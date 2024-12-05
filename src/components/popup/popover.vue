<template>
    <div v-if="visible" class="popover-overlay" @click.self="close">
      <div class="popover-content">
        <slot name="content"></slot>
        <button class="popover-close" @click="close">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";

  const visible = ref(true);
  
  const open = () => {
    visible.value = true;
  };
  
  const close = () => {
    visible.value = false;
  };
  
  defineExpose({ open, close });
  </script>
  
  <style lang="scss">
  .popover-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popover-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 500px;
    width: 100%;
  }
  
  .popover-close {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  
    &:hover {
      background-color: #0056b3;
    }
  }
  </style>
  