import React from "react";

import FormikForm from "./Formik";

class ContactForm extends React.Component {
  render() {
    let values = {
      name: "",
      subject: "",
      messages: "",
      email: "",
    };
    return <FormikForm values={values} handleSubmit={this.handleFormSubmit} />;
  }
  handleFormSubmit = (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };
}

export default ContactForm;
