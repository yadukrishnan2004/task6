import { createSelector } from "@reduxjs/toolkit";

const selet=(state)=>state.todo;

export const length=createSelector(
    [selet],
    (todo)=>todo.list.length
)