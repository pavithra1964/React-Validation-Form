import React, { Component } from 'react'
import './Form.css' 


class ControlForm extends Component {

 	state = {
		value:50
	}
	
	handleOnChange = (e) => this.setState({value: e.target.value})
	
    render() {
    	return (
			<div>
        <div class="normal-container">
	<div class="smile-rating-container">
		<div class="smile-rating-toggle-container">
			<form class="submit-rating">
				<input id="meh"  name="satisfaction" type="radio" /> 
				<input id="fun" name="satisfaction" type="radio" /> 
				<label for="meh" class="rating-label rating-label-meh">Bad</label>
				<div class="smile-rating-toggle"></div>
				
				<div class="rating-eye rating-eye-left"></div>
				<div class="rating-eye rating-eye-right"></div>
				
				<div class="mouth rating-eye-bad-mouth"></div>
				
				<div class="toggle-rating-pill"></div>
				<label for="fun" class="rating-label rating-label-fun">Fun</label>
			</form>
		</div>
	</div>
</div>

</div>
    )}}
export default ControlForm;