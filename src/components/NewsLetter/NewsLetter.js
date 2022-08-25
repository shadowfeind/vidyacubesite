import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import titleNinen from "../../data/title/title-nine.json";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const [{ title }] = titleNinen;
const NewsLeter = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <React.Fragment>
      <div className="newsletter-section text-center sec-ptb-160 pt-0 clearfix mt-5">
        <Container>
          <div className="section-title text-center mb-60">
            <h2 className="title-text">{title}</h2>
          </div>

          <Row className="justify-content-center">
            <Col lg="8" md="10">
              <div
                className="newsletter-form mb-30"
                style={{
                  backgroundImage: `url(${"../assets/images/newsletter-bg-1.png"})`,
                }}
              >
                {/* <form> */}
                <div className="form-item mb-0">
                  <input
                    id="email-input"
                    ref={(node) => (email = node)}
                    type="email"
                    placeholder="Enter Email Address"
                  />
                  <button
                    onClick={submit}
                    type="submit"
                    className="form-item-btn bg-default-blue"
                  >
                    subscribe
                  </button>
                </div>
                {/* </form> */}
              </div>
            </Col>
          </Row>

          {status === "sending" && (
            <div style={{ color: "#f6716f" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "green" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <p className="mb-0">We won’t spam you, Pinky Promise</p>
        </Container>
      </div>
    </React.Fragment>
  );
};

class SubscribeMailChimp extends Component {
  render() {
    const url =
      "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <NewsLeter
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default SubscribeMailChimp;
