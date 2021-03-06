import PropTypes from 'prop-types';
import React from 'react';
import './Form.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <form>
        <span>Remote Working: </span>
        <div className="togg-container">
          <div className="toggle-container" onClick={toggleSelected}>
            <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </form>
    )
  }
}

Toggle.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
}

export default Toggle;



// import React from 'react';
// import Switch from 'react-switch';
// import './Form.css'

// class Toggle extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       checked: false
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(checked) {
//     this.setState({checked})
//   }

//   render() {
//     return (
//       <div>
//         <label>
//           <span>Remote Working :</span>
//         <Switch
//         className="react-switch"
//         onChange={this.handleChange}
//         checked={this.state.checked}
//         />
//         </label>
//         <p className="toggle-button"><b>{this.state.checked ? 'on' : 'off'}</b></p>
//       </div>
//     )
//   }
// }
// export default Toggle;