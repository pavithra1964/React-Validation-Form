import React from 'react';
import styled from 'styled-components'
const Styles = styled.div``;
class Rangecomponent extends React.Component {
  state = {
    value: 50
  }
 handleOnChange = (e) => this.setState({value: e.target.value})
  render() {
    return (
      <Styles>
        <input type="range" min={0} max={255} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div>{this.state.value}</div>
      </Styles>
    );
  }
}
export default Rangecomponent;