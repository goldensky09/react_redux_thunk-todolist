# react_redux_thunk-todolist
Sample "To Do List" application using React, Redux and Thunk

##Pre requisite

* Refer [react_todolist](https://github.com/mkum83/react_todolist) contains same application built with React only.
* Refer [/react_redux-todolist](https://github.com/mkum83/react_redux-todolist), same application built with React + Redux.

before starting, please refer above applications before starting, as current application is just an extension of above both.

##What is Thunk
Thunk is a function that encapsulates synchronous or asynchronous code inside.
* https://www.npmjs.com/package/thunks 
* https://www.npmjs.com/package/redux-thunk

##Installing Redux Thunk
Thunk bindings are not included in Redux by default. You need to install them explicitly:
```sh
npm install --save redux-thunk
```

##Implementing Redux
Lets start using Thunk with our application

Import thunk and applyMiddleware in components/app.jsx as this is our main app file
```sh
import thunk from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
```
Apply Middleware with thunk to store
```sh
var store = createStore(Reducers.toDoReducer, Reducers.defaultTodos(),applyMiddleware(thunk));
```
Function which will actually call api and fetch the default state and dispatch the action after receiving state. redux-thunk will allow to dispatch this thunk function as action instead of plain object.
```sh
function loadReposAction() {  
  return function(dispatch, getState) {
    var state = getState();
    var url = "http://localhost:8080/data.json";
    return fetch(url)
      .then(function(result) {
        if (result.status === 200) {
          return result.json();
        }
        throw "request failed";
      })
      .then(function(jsonResult) {
        dispatch(ToDoActions.addTodos(jsonResult));
      })
      .catch(function(err) {
      });
  }
}
```
Dispatch this function as action after some delay 
```sh
  setTimeout(function(){ store.dispatch(loadReposAction()); },2000)
```
Add a new action in redux/Actions.jsx
```sh
static addTodos(jsonResult) {
      return {
        type: 'ADD_TODOS',
        value: jsonResult,
        isLoading: false,
        completed: false
      };
    }
```
Now you can empty the default state(state will come from API now) from component/Reducer.jsx.
```sh
static defaultTodos(){
            return{
                      todo:{
                          items:[]
                      }
                };
        };
```


        
