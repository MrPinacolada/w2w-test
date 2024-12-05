<template>
  <workers-table :data="employees" />
</template>

<script setup lang="ts">
import WorkersTable from "@/components/table/workersTable.vue";
import db from "@/db/data.json";
import { Role } from "@/helpers/tableEnums";
import type { Worker } from "@/types/workers";
import { ref } from "vue";

const employees = ref<Worker[]>(
  db.employees.filter((item) => item.department === Role.Nurse)
);
</script>

<style scoped></style>
