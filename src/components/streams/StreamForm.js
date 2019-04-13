import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderError( {error, touched} ) {  //destructure out error & touched, the two properties of meta that we care about
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  //to use "this" in this circumstance we must bind it by using arrow function (lecture 234)
  renderInput = ( {input, label, meta} ) => {  //destructuring instad of renderInput(formProps) and <input { ...formProps.input } /> 
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label> {label} </label>
        <input { ...input } /> 
        {/* <input { ...formProps.input } />  //also valid, "..." means it includes ALL the props rather than {formProps.input.onChange} {formProps.input.value}  */}
        { this.renderError(meta) }
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues); //callback from parent component, whether that be StreamCreate or StreamEdit   //this.props.createStream(formValues);
  }

  render() {
    return (
      <form onSubmit={ this.props.handleSubmit(this.onSubmit) } className="ui form    error"> {/* error class is little hack to get around semantic ui styling */}
        <Field name="title" component={this.renderInput } label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        
        <button className="ui button primary"> Submit </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate: validate  //also valid, just  validate  (because the key matches the value)
})(StreamForm);
