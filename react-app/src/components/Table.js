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
    console.log('Add Row', this.state.numRows);
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
    console.log('Add Column', this.state.numCols);
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

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
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
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;