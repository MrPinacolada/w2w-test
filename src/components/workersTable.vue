<template>
  <div class="table__wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in transletedWorkers" :key="item.id">
          <td v-for="column in columns" :key="column.key">
            {{ item[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn, Worker } from "@/types/workers";
import { computed } from "vue";
import {
  departmentTranslations,
  getEnumTranslation,
  roleTranslations,
} from "@/helpers/tableEnums";

const props = defineProps<{
  data: Worker[];
}>();

const transletedWorkers = computed(() =>
  props.data.map((item) => {
    return {
      ...item,
      department: getEnumTranslation(item.department, departmentTranslations),
      role: getEnumTranslation(item.role, roleTranslations),
    };
  })
);

const columns: TableColumn<Worker>[] = [
  { key: "fullName", label: "ФИО" },
  { key: "department", label: "Отделение" },
  { key: "role", label: "Роль" },
  { key: "isHead", label: "Заведующий" },
];
</script>

<style lang="scss">
.table__wrapper {
  max-width: 100%;
  overflow-x: auto;
  .table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    margin: 1rem 0;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f4f4f4;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
