import React,{PropTypes} from 'react';

import { Glyphicon } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import ToDoActions from '../redux/Actions.jsx';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);       
    }
    onremove = () =>{
         this.props.store.dispatch(ToDoActions.deleteTodo(this.props.index));  
    }
    onchange = (e) =>{
        this.props.store.dispatch(ToDoActions.completeTodo(this.props.index, e.target.checked));       
    }
    render(){
        var _text = this.props.item.completed ?<del>{this.props.item.value}</del>:<div>{this.props.item.value}</div>;
        return (
            <div className="row" >
               <div className="col-xs-4" >
                   <Checkbox onChange={this.onchange} checked={this.props.item.completed}></Checkbox>
            </div>
            <div className="col-xs-4" > {_text}</div>
            <div className="col-xs-4" >
               <Button type="button" onClick={this.onremove} bsStyle="danger"><Glyphicon glyph="remove" /></Button>
            </div>
            </div>            
           
        );
    }
}
TodoItem.propTypes={
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
export default TodoItem;