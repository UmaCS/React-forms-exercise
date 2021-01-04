import React, {Component} from 'react';
import Box from './Box';
class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: [
            {height: 15, width: 10, color: 'purple'}, {height: 10, width: 20, color: 'teal'},
        ]}
    }
    render(){
        const boxes = this.state.boxes.map(box => {
            return <Box height={box.height} width={box.width} color={box.color} />
        })
        return (
            <div>
            <h1>Color box maker thingy</h1>
              {boxes}
            </div>
        );
    }
}
export default BoxList;