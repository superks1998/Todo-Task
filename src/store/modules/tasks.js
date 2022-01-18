import tasksApi from "../../api/tasksApi";

const state = () => ({
  tasks: [],
});

const actions = {
  async getAllTasks({ commit }) {
    try {
      const response = await tasksApi.getAll();
      commit("SET_TASKS", response.items);
    } catch (error) {
      console.log(error);
    }
  },
  // async getTask(idTask) {
  //     try {
  //         const response = await tasksApi.get(idTask);
  //         commit("SET_TASK", response);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // },
  async addTask({ commit }, newTask) {
    try {
      const response = await tasksApi.add(newTask);
      commit("ADD_TASK", response);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTask({ commit }, idDelete) {
    try {
      await tasksApi.delete(idDelete);
      commit("DELETE_TASK", idDelete);
    } catch (error) {
      console.log(error);
    }
  },
  async updateTask({ commit }, { taskId, taskUpdate }) {
    try {
      const taskUpdateNew = await tasksApi.update(taskId, taskUpdate);
      commit("UPDATE_TASK", { taskId, taskUpdateNew });
    } catch (error) {
      console.log(error);
    }
  },
  markCompleted({ commit }, idTask) {
    commit("MARK_COMPLETED", idTask);
  },
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  // SET_TASK(state, taskUpdate) {
  //     state.taskUpdate = taskUpdate;
  // },
  ADD_TASK(state, newTask) {
    state.tasks.unshift(newTask);
  },
  DELETE_TASK(state, idDelete) {
    state.tasks = state.tasks.filter((task) => task.id !== idDelete);
  },
  UPDATE_TASK(state, { taskId, taskUpdateNew }) {
    const indexUpdate = state.tasks.findIndex((task) => task.id === taskId);
    state.tasks[indexUpdate] = taskUpdateNew;
  },
  MARK_COMPLETED(state, idTask) {
    state.tasks.map((task) => {
      if (task.id === idTask) {
        task.completedAt = !task.completedAt;
      }
    });
  },
};

export default {
  mutations,
  actions,
  state,
};
