import React, { Component } from 'react';

export default
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      draggedL:null,
      dragged: null,
      draggedOver: null,
      draggedOverL: null,
      content: this.props.children
    };
    this.dragStart = this.dragStart.bind(this);
    this.over = this.over.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  dragStart(ev){
    let dragged = ev.target;
    let location = [].indexOf.call(ev.target.parentNode.children, ev.target);
    this.setState({dragged:dragged,draggedL:location});
    ev.dataTransfer.effectAllowed = 'copy'
  }

  onDrop(ev){
    let {draggedL,draggedOverL, dragged,content} = this.state; 
    let newContent = [].concat(content);

    let movingValue = newContent.splice(draggedL, 1)[0];
    newContent.splice(draggedOverL, 0, content[draggedL] );
    console.log('dropped',draggedL,draggedOverL,dragged,newContent)
    this.setState({content:newContent})
  }

  prevent(ev){
    ev.preventDefault();
  }

  over(ev){
    if(ev.target === this.state.draggedOver) return;
    let location = [].indexOf.call(ev.target.parentNode.children, ev.target);
    this.setState({draggedOver: ev.target,draggedOverL:location})
  }
  render() {
    let draggableChildren = React.Children.map(this.state.content, child => 
    React.cloneElement(child,{'onDragStart':this.dragStart, "onDragEnter":this.over,  onDrop: this.onDrop, "onDragOver":this.prevent }));

    return (
      <div id="container">
        {draggableChildren}
      </div>
    );
  }
}