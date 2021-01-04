import React, {Component} from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {height: '', width: '', backgroundColor: ''}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <form>
                <label htmlFor="height">Height</label>
                <input type="text" id='height' name='height' onChange={this.handleChange} />

                <label htmlFor="width">Width</label>
                <input type="text" id='width' name='width' onChange={this.handleChange} />

                <label htmlFor="color">BackgroundColor:</label>
                <input type="text" id='color' name='color' onChange={this.handleChange} />
                
                <button>Add a new box</button>
            </form>
        );
    }
}
export default NewBoxForm;