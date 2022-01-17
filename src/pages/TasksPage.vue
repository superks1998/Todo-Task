<template>
    <div class="container">
        <ul v-if="auth.isAuthenticated" class="responsive-table">
            <div class="form-field">
                <label>Filter Task</label>
                <input type="text" @input="debouncedHandler" />
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
import { mapActions, mapState } from "vuex";
import debounce from "lodash.debounce";

export default {
    name: "TaskPage",
    computed: {
        ...mapState(["auth", "tasks"]),
        filteredTask() {
            return this.tasks.all.filter(
                (task) => task.title.indexOf(this.search) !== -1
            );
        },
    },
    data() {
        return {
            search: "",
        };
    },
    methods: {
        ...mapActions(["getAllTasks", "markCompleted", "deleteTask"]),
        handleUpdateTask(taskId) {
            this.$router.push(`/tasks/edit/${taskId}`);
        },

        handleDeleteTask(idDelete) {
            this.deleteTask(idDelete);
        },
        handleOnSearch(e) {
            this.taskSearch = this.tasks.all.filter(
                (task) => task.title.indexOf(e.target.value) !== -1
            );
        },
    },
    created() {
        this.getAllTasks();
        this.debouncedHandler = debounce((event) => {
            this.search = event.target.value;
        }, 500);
    },
    beforeUnmount() {
        this.debouncedHandler.cancel();
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
        text-align: center;
        margin: 50px;
    }
}

.responsive-table {
    padding-left: 0;
    li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .table-header {
        background: rgb(84, 105, 212);
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
            rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    .table-row {
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }
    .col {
        flex-wrap: wrap;
    }
    .col-1 {
        flex-basis: 10%;
    }
    .col-2 {
        flex-basis: 20%;
    }
    .col-3 {
        flex-basis: 30%;
    }
    .col-4 {
        flex-basis: 40%;
    }
    span {
        display: inline-block;
        margin-right: 10px;
    }
    .task-title {
        margin: 0;
        white-space: nowrap;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    button {
        color: white;
        border: none;
        border-radius: 10px;
        padding: 6px 10px;
        background: rgb(84, 105, 212);
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
            rgb(84, 105, 212) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
        margin-right: 10px;
    }

    input[type="checkbox"] {
        transform: scale(2);
        padding: 10px;
        margin-left: 40px;
    }

    .completed {
        background: rgba(84, 105, 212, 0.2);
        .task-title {
            text-decoration: line-through;
        }
        .task-category {
            span {
                text-decoration: line-through;
            }
        }
    }

    @media all and (max-width: 767px) {
        .table-header {
            display: none;
        }
        li {
            display: block;
        }
        .col {
            flex-basis: 100%;
        }
        .col {
            display: flex;
            padding: 10px 0;
            &:before {
                color: #6c7a89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
        }
    }
}
.pagination {
    display: flex;
    justify-content: center;
    &__item {
        display: inline-block;
        margin: 30px 10px;
        font-size: 15px;
        font-weight: 600;
        opacity: 0.4;
        &:hover {
            opacity: 1;
        }
        &.current-page {
            opacity: 1;
        }
    }
}
</style>
