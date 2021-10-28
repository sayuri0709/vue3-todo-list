<template>
  <div id="app">
    <div class="todo-list">
      <h1 class="todo-list__ttl">Todoリスト</h1>
      <div class="todo-list__inner">
        <div class="todo-list__input">
          <input v-model="todo">
        </div>

        <button class="todo-list__btn" @click="addTodo">追加</button>
        <ul class="todo-list__list">
          <li class="todo-list__item" v-for="(todo, index) in todos" :key="index">
            {{todo}} <span class="todo-list__remove" @click="removeTodo(index)"></span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      todo: '',
      todos: [] as string[]
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo)
      this.todo = ''
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1)
    }
  }
});
</script>

<style lang="scss">
  .todo-list {
    &__ttl {
      font-size: 2.4rem;
      text-align: center;
      background-color: #0d81d3;
      color: #fff;
      padding: 15px 0;
    }
    &__inner {
      padding: 35px 15px 0;
      max-width: 600px;
      margin: 0 auto;
    }
    &__input {
      input {
        width: 100%;
        padding: 5px;
        font-size: 1.8rem;
      }
    }
    &__btn {
      width: 90%;
      max-width: 200px;
      margin: 30px auto 0;
      display: block;
      -webkit-appearance: none;
      -moz-appearance: none;
      line-height: 1;
      box-sizing: border-box;
      outline: none;
      padding: 15px;
      text-align: center;
      border-radius: 60px;
      border: none;
      background: #d71717;
      color: #fff;
      font-size: 1.8rem;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background: red;
      }
    }
    &__list {
      margin: 30px auto 0;
    }
    &__item {
      font-size: 1.8rem;
      padding: 10px 15px 10px calc(15px + 1em);
      background: #f3f0f0;
      text-indent: -1em;
      position: relative;
      &:nth-child(2n) {
        background: #dfdfdf;
      }
      &::before {
        content: "・";
      }
    }
    &__remove {
      position: absolute;
      width: 20px;
      height: 100%;
      top: 0;
      right: 15px;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        width: 20px;
        height: 2px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -1px;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
