import React, {Component} from 'react';
const { v4: uuidv4 } = require('uuid');

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {height: '', width: '', color: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state, id: uuidv4()};
        this.props.createBox(newBox);
        this.setState({height: '', width: '', color: ''});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input type="text" id='height' name='height' value={this.state.height} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input type="text" id='width' name='width' value={this.state.width} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="color">BackgroundColor:</label>
                    <input type="text" id='color' name='color' value={this.state.color} onChange={this.handleChange} />
                </div>
                <button>Add New Box</button>
            </form>
        );
    }
}
export default NewBoxForm;