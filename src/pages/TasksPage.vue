<template>
  <div class="container">
    <ul v-if="isAuthenticated" class="responsive-table">
      <div class="form-field">
        <label>Filter Task</label>
        <input class="form-field-input" type="text" @input="debouncedHandler" />
      </div>
      <li class="table-header">
        <div class="col col-3">Tasks</div>
        <div class="col col-3">Category</div>
        <div class="col col-2">Completed</div>
        <div class="col col-2">Actions</div>
      </li>
      <li
        class="table-row"
        v-for="task in filteredTask"
        :key="task.id"
        :class="{ completed: task.completedAt }"
      >
        <div class="col col-3">
          <p class="task-title">{{ task.title }}</p>
        </div>
        <div class="col col-3">
          <span
            v-for="category in task.categories"
            :key="category.id"
            class="task-category"
            >{{ category.name }}</span
          >
        </div>
        <div class="col col-2">
          <input
            type="checkbox"
            :checked="task.completedAt"
            @change="markCompleted(task.id)"
          />
        </div>
        <div class="col col-2">
          <button @click="handleUpdateTask(task.id)">Update</button>
          <button @click="handleDeleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
    <h3 v-else>Login Now</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";
import { TASK_EDIT_PATH } from "../constant/urlPath";

export default {
  name: "TaskPage",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      tasks: "tasks/tasks",
      isAuthenticated: "auth/isAuthenticated",
    }),
    filteredTask() {
      return this.tasks.filter(
        (task) => task.title.indexOf(this.search) !== -1
      );
    },
    debouncedHandler() {
      return debounce((event) => {
        this.search = event.target.value;
      }, 500);
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.getAllTasks();
    }
  },
  beforeUnmount() {
    this.debouncedHandler.cancel();
  },
  methods: {
    ...mapActions("tasks", ["getAllTasks", "markCompleted", "deleteTask"]),
    handleUpdateTask(taskId) {
      this.$router.push(`${TASK_EDIT_PATH}${taskId}`);
    },

    handleDeleteTask(idDelete) {
      this.deleteTask(idDelete);
    },
    handleOnSearch(e) {
      this.taskSearch = this.tasks.tasks.filter(
        (task) => task.title.indexOf(e.target.value) !== -1
      );
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  h3 {
    margin: 50px;
    text-align: center;
  }
  .responsive-table {
    padding-left: 0;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      padding: 25px 30px;
      border-radius: 3px;
    }
    .table-header {
      color: white;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      background: $primary-color;
      box-shadow: $button-shadow;
    }
    .table-row {
      background-color: #ffffff;
      box-shadow: $table-shadow;
    }
    span {
      display: inline-block;
      margin-right: 10px;
    }
    .task-title {
      width: 200px;
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    button {
      margin-right: 10px;
      padding: 6px 10px;
      color: white;
      background: $primary-color;
      box-shadow: $button-shadow;
      border: none;
      border-radius: 10px;
    }

    input[type="checkbox"] {
      margin-left: 40px;
      padding: 10px;
      transform: scale(2);
    }

    .completed {
      background: $secondary-color;
      .task-title {
        text-decoration: line-through;
      }
      .task-category {
        span {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
