<template>
  <div class="table__wrapper">
    <table v-if="tableItems" class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.label }}
          </th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableItems" :key="item.id">
          <td v-for="column in columns" :key="column.key">
            <p v-if="column.key !== 'isHead'">
              {{ item[column.key as keyof typeof item] }}
            </p>
            <chip v-else-if="item.isHead" :text="'Заведующий'" />
          </td>
          <td>
            <button @click="openEditPopover(item)">Редактировать</button>
            <button @click="deleteWorker(item.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Popover ref="popoverRef" v-if="editingWorker" @close="closePopover">
      <template #content>
        <form @submit.prevent="saveWorker">
          <div>
            <label for="fullName">ФИО</label>
            <input
              v-model="editingWorker.fullName"
              type="text"
              id="fullName"
              required
            />
          </div>
          <div>
            <label for="department">Отделение</label>
            <input
              v-model="editingWorker.department"
              type="text"
              id="department"
              required
            />
          </div>
          <div>
            <label for="role">Роль</label>
            <input
              v-model="editingWorker.role"
              type="text"
              id="role"
              required
            />
          </div>
          <div>
            <button type="submit">Сохранить</button>
            <button type="button" @click="closePopover">Закрыть</button>
          </div>
        </form>
      </template>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  departmentTranslations,
  getEnumTranslation,
  roleTranslations,
} from "@/helpers/tableEnums";
import Chip from "../base/chip.vue";
import Popover from "@/components/popup/popover.vue";
import type { Worker } from "@/types/workers";

interface TranslatedWorker extends Omit<Worker, "department" | "role"> {
  department: string;
  role: string;
}

const props = defineProps<{
  data: Worker[];
}>();

const tableItems = ref<TranslatedWorker[] | null>(null);
const editingWorker = ref<TranslatedWorker | null>(null);
const popoverRef = ref<HTMLElement | null>(null);

const translateWorkers = () => {
  tableItems.value = props.data.map((item) => {
    return {
      ...item,
      department: getEnumTranslation(item.department, departmentTranslations),
      role: getEnumTranslation(item.role, roleTranslations),
    };
  });
};

const columns = [
  { key: "fullName", label: "ФИО" },
  { key: "department", label: "Отделение" },
  { key: "role", label: "Роль" },
  { key: "isHead", label: "Заведующий" },
];

const openEditPopover = (worker: TranslatedWorker) => {
  editingWorker.value = { ...worker };
  popoverRef.value?.open();
};

const closePopover = () => {
  popoverRef.value?.close();
  editingWorker.value = null;
};

const saveWorker = () => {
  if (editingWorker.value) {
    const updatedWorker = editingWorker.value;
    const index = tableItems.value?.findIndex(
      (item) => item.id === updatedWorker.id
    );
    if (index !== undefined && index !== -1) {
      tableItems.value![index] = updatedWorker;
    }
    closePopover();
  }
};

const deleteWorker = (id: number) => {
  if (tableItems.value) {
    tableItems.value = tableItems.value.filter((item) => item.id !== id);
  }
};

onMounted(() => {
  translateWorkers();
});
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
      p {
        margin: 0;
      }
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

  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
    }

    button {
      margin-top: 1rem;
      background-color: #28a745;

      &:hover {
        background-color: #218838;
      }
    }
  }
}
</style>
