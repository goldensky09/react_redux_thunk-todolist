import React,{PropTypes} from 'react';
import TodoItem from './TodoItem.jsx';
import { Table } from 'react-bootstrap';
class TodoList extends React.Component{
    
    constructor(props) {
        super(props);
    }
    render(){        
        return (
            <div>
                <div className="row" >
                   <div className="col-xs-4" ><h4>#</h4></div>
                    <div className="col-xs-4" > <h4>To Do</h4></div>
                   <div className="col-xs-4" > <h4>Action</h4> </div>
                </div>  
                   
                {this.props.items.map((item, i) => <TodoItem store={this.props.store} oncompletchange={this.oncompletchange} onremove={this.onremove} key={i} index={i} item={item}></TodoItem> )}
            
            </div>            

        );
    }
}
TodoList.propTypes={
    items: PropTypes.array.isRequired
    
}
export default TodoList;

