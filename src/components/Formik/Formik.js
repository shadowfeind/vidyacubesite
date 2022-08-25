import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

class ContactForm extends React.Component {
  render() {
    let {
      handleSubmit,
      handleChange,
      isSubmitting,
      values,
      errors,
    } = this.props;
    return (
      <div className="contact-form">
        <h2 className="title-text mb-30">get in touch</h2>
        <form onSubmit={handleSubmit} method="post">
          <div className="form-item">
            <input
              type="text"
              name="name"
              placeholder="your name*"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="form-item">
            <input
              type="email"
              name="email"
              placeholder="email address*"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-item">
            <input
              type="text"
              name="subject"
              placeholder="subject"
              onChange={handleChange}
            />
            {errors.subject && <p className="text-danger">{errors.subject}</p>}
          </div>
          <div className="form-textarea">
            <textarea
              name="messages"
              placeholder="write messages"
              onChange={handleChange}
            ></textarea>
            {errors.messages && (
              <p className="text-danger">{errors.messages}</p>
            )}
          </div>
          <button type="submit" className="custom-btn" name="submit">
            {isSubmitting ? "Submitting... check console" : "send message"}
          </button>
        </form>
      </div>
    );
  }
}

const AppalForm = withFormik({
  mapPropsToValues: (props) => props.values,
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("subject is required"),
    messages: Yup.string().required("messages is required"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email is required"),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "BaseRateForm",
})(ContactForm);

export default AppalForm;
