import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { Label } from 'reactstrap';
import './Form.css'

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err) => {
      if (!err) {
        {
            <h1>Hello</h1>
        }
        this.props.history.push('/');
      }
    });
  }



  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 align="center">Validate Form</h1>
        <h4>Validation</h4>
        <FormItem>
            <Label>FirstName:</Label>
            {getFieldDecorator('FirstName', {
                rules: [{ required: true, message: 'Please input your First Name!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(194,26,26)' }} />} placeholder="Please input your First Name!" />
            )}
        </FormItem>
        <FormItem>
            <Label>LastName:</Label>
            {getFieldDecorator('LastName', {
                rules: [{ required: true, message: 'Please input your Last Name!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(194,26,26)' }} />} placeholder="Please input your Last Name!" />
            )}
        </FormItem>
        <FormItem>
            <Label>FatherName:</Label>
            {getFieldDecorator('FatherName', {
                rules: [{ required: true, message: 'Please input your Father Name!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(194,26,26)' }} />} placeholder="Please input your Father Name!" />
            )}
        </FormItem>
        <FormItem>
            <Label>MotherName:</Label>
            {getFieldDecorator('MotherName', {
                rules: [{ required: true, message: 'Please input your Mother Name!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(194,26,26)' }} />} placeholder="Please input your Mother Name!" />
            )}
        </FormItem>
        <FormItem>
            <Label>Age:</Label>
          {getFieldDecorator('Age', {
            rules: [{ 
              type: 'number', message: 'The input is not valid Age!',
            }, {
              required: true, message: 'Please input your Age!',
            }],
          })(
            <Input prefix={<Icon type="number" style={{ color: 'rgba(194,26,26)' }} />} placeholder="Enter your Email" />
          )}
        </FormItem>
        <FormItem>
            <Label>Date of Birth:</Label>
          {getFieldDecorator('dob', {
            rules: [{
              type: 'date', message: 'The input is not valid DOB!',
            }, {
              required: true, message: 'Please input your DOB!',
            }],
          })(
              <input type="date" />
          )}
        </FormItem>
        <FormItem>
            <Label>E-mail:</Label>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter your Email" />
          )}
        </FormItem>


        <FormItem>
            <input type="submit" value="SUBMIT" />
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;