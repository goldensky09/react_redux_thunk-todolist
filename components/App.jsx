import React from 'react';
import TodoList from './TodoList.jsx';
import NewToDo from './NewToDo.jsx';
import { Button } from 'react-bootstrap';
import { createStore, applyMiddleware  } from 'redux';
import Reducers from '../redux/Reducers.jsx';
import ToDoActions from '../redux/Actions.jsx';
import thunk from 'redux-thunk';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        //making default state
        this.state={items:store.getState().todo.items, isLoading:true}       
    }
    componentWillMount() {
        //subscripbe the redux store
        store.subscribe(() => {
          var state = store.getState();
            //set the new state
          this.setState({
            items: state.todo.items,
            isLoading: state.todo.isLoading
          });
        });
        //dispatch function to load data from API after some delay
        setTimeout(function(){ store.dispatch(loadReposAction()); },2000)
        
    }
    componentDidMount(){}
    componentWillUnmount(){} 
    clearcompleted = (e) =>{
        store.dispatch(ToDoActions.clearTodo());  
    }
    render() {
      return (
         <div className='container'>
                 
              <center><h1>To Do List: React + Redux + Thunk</h1>
              {this.state.isLoading ? <div>Please wait while loading the data:   <progress></progress></div> :
                  <div>
                     <br></br><br></br>
                      <NewToDo store={store} ></NewToDo><hr></hr>
                      <TodoList store={store} onremove={this.onremove} items={this.state.items}></TodoList>
                      <Button className="btn btn-primary" onClick={this.clearcompleted}>Clear</Button> 
                  </div>
              }
              </center>
              
         </div>
      );
    }
}

// returns a function and will be called in the Redux-Thunk middleware
//
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

//create store with reducer and default store using REDUX 
var store = createStore(Reducers.toDoReducer, Reducers.defaultTodos(),applyMiddleware(thunk));
export default App;