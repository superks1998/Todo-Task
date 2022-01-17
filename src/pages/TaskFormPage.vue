<template>
    <div class="task-form">
        <div class="form-wrapper">
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
                    <input v-model="titleTask" type="text" />
                </div>
                <div class="form-field">
                    <p>Categories:</p>
                    <label
                        v-for="category in categories.all"
                        :key="category.id"
                        :for="category.name"
                        class="task-form-label"
                    >
                        {{ category.name }}
                        <input
                            type="checkbox"
                            :id="category.name"
                            @change="handleCheckedCategory($event, category.id)"
                        />
                    </label>
                </div>
                <div class="form-field">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
        ...mapState(["categories", "tasks"]),
        taskUpdate() {
            return {
                title: this.titleTask,
                categoryIds: this.categoriesTask,
            };
        },
    },
    methods: {
        ...mapActions(["getCategories", "getTask", "addTask", "updateTask"]),
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
    async created() {
        this.getCategories();
        if (this.updateId) {
            const taskUpdate = await this.handleGetTask(this.updateId);
            this.titleTask = taskUpdate.title;
        }
    },
};
</script>

<style lang="scss">
.form-field {
    p {
        margin: 0;
    }
    .task-form-label {
        display: inline-block;
        margin-right: 20px;
    }
    input[type="checkbox"] {
        background-color: rgb(84, 105, 212);
        transform: scale(1.2);
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        margin-top: 10px;
        margin-left: 5px;
    }
}
</style>
