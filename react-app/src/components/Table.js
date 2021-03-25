import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red"
    }
  }

//add a row and increment numRows by 1
  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

//add a column and increment numCol by 1
  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
    //if numRow is 0 it adds a row to allow a column to be added
    if(this.state.numRows === 0)
    {
      this.addRow();
    }
  }

//remove a row
  removeRow = () => {
    //if numRows is 0, state numRows/numCols
    if (this.state.numRows === 0)
    {
        console.log('Row', this.state.numRows);
        console.log('Column', this.state.numCols);
    }
    //otherwise remove row and decrease numRows by 1
    else{
        this.setState(state => {
            return {numRows:state.numRows - 1}
        });
    } 

  }

//remove column
  removeCol = () => {
    //if no columns are to be removed, return the state of numCols and numRows
    if (this.state.numCols === 0)
    {
      console.log('Row', this.state.numRows);
      console.log('Column', this.state.numCols);
    }
    else
    //otherwise decrease numCols by 1 and remove column
    {
      this.setState(state => {
        return {numCols:state.numCols - 1}
      });
    } 
  }

//fill all uncolored
  fillUC = () => {
    console.log('Fill uncolored');
  }

//fill all
  fillAll = () => {
    console.log('Fill all');
  }

//clear all colors
  clearAll = () => {
    console.log('Clear');
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
    console.log(this.state.selectedColor);
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeCol}>Remove Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.fillUC}>Fill All Uncolored</button>
        <button onClick={this.fillAll}>Fill All</button>
        <button onClick={this.clearAll}>Clear</button>
        <select onChange={this.handleColorChange}>
          <option value="#ff6961">Red</option>
          <option value="#ffb347">Orange</option>
          <option value="#FDFD96">Yellow</option>
          <option value="#77dd77">Green</option>
          <option value="#aec6cf">Blue</option>
          <option value="#b19cd9">Purple</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;