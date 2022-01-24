<template>
  <div class="task-form">
    <div v-if="isAuthenticated" class="form-wrapper">
      <form
        @submit.prevent="
          updateId
            ? handleUpdateTask(updateId, taskUpdate)
            : handleAddTask(titleTask, categoriesTask)
        "
      >
        <h4>{{ updateId ? "Update Task" : "Add Task" }}</h4>
        <div class="form-field">
          <label>Title Task</label>
          <input class="form-field-input" v-model="titleTask" type="text" />
        </div>
        <div class="form-field">
          <p>Categories:</p>
          <label
            v-for="category in categories"
            :key="category.id"
            :for="category.name"
            class="task-form-label"
          >
            {{ category.name }}
            <input
              class="form-field-checkbox"
              type="checkbox"
              :id="category.name"
              @change="handleCheckedCategory($event, category.id)"
            />
          </label>
        </div>
        <div class="form-field">
          <input class="form-field-input submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
    <h3 v-else>Login Now</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import tasksApi from "../api/tasksApi";

export default {
  name: "TaskFormPage",
  data() {
    return {
      titleTask: "",
      categoriesTask: [],
      updateId: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      categories: "categories/categories",
    }),
    taskUpdate() {
      return {
        title: this.titleTask,
        categoryIds: this.categoriesTask,
      };
    },
  },
  async created() {
    if (this.isAuthenticated) {
      this.getCategories();
    }
    if (this.updateId) {
      const taskUpdate = await this.handleGetTask(this.updateId);
      this.titleTask = taskUpdate.title;
    }
  },
  methods: {
    ...mapActions("tasks", ["getTask", "addTask", "updateTask"]),
    ...mapActions({
      getCategories: "categories/getCategories",
    }),
    handleCheckedCategory(e, categoryId) {
      if (e.target.checked) {
        if (this.categoriesTask.indexOf(categoryId) === -1) {
          this.categoriesTask.push(categoryId);
        }
      } else {
        this.categoriesTask = this.categoriesTask.filter((id) => {
          return id != categoryId;
        });
      }
    },
    handleAddTask(titleTask, categoriesTask) {
      this.addTask({
        title: titleTask,
        categoryIds: categoriesTask,
      })
        .then(() => {
          alert("Add Task thành công");
          this.$router.push("/");
        })
        .catch(() => {
          alert("Add Task thất bại");
        });
    },
    async handleGetTask(taskId) {
      try {
        const response = await tasksApi.get(taskId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    handleUpdateTask(taskId, taskUpdate) {
      this.updateTask({
        taskId,
        taskUpdate,
      })
        .then(() => {
          alert("Update Task thành công");
          this.$router.push("/");
        })
        .catch(() => {
          alert("Update Task thất bại");
        });
    },
  },
};
</script>

<style></style>
