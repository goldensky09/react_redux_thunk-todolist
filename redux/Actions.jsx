class ToDoActions{
    
     static clearTodo() {
      return {
        type: 'CLEAR_TODO'
      };
    }
    static addTodo(message) {
      return {
        type: 'ADD_TODO',
        value: message,
        completed: false
      };
    }
    static addTodos(jsonResult) {
      return {
        type: 'ADD_TODOS',
        value: jsonResult,
        isLoading: false,
        completed: false
      };
    }
    static completeTodo(index,checked) {
      return {
        type: 'COMPLETE_TODO',
        index: index,
          checked: checked
      };
    }
    static deleteTodo(index) {
      return {
          type: 'DELETE_TODO',
        index: index
      };
    }
}
export default ToDoActions;