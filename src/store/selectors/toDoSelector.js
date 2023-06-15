const selectTodos = (state) => state;
const isDone = state => state.isDone
const selectCount = state => state.count;

export {
    selectCount,
    selectTodos,
    isDone

}