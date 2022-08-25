import React, { Fragment } from "react";

import ContactForm from "../../components/Formik";

class Map extends React.Component {
  render() {
    return (
      <Fragment>
        <section id="map-section" className={`map-section clearfix`}>
          <iframe
            className="google-map"
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.011704628028!2d85.3221951!3d27.686214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b711261b9d%3A0xc50ac7fa4caee2!2sJwagal%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1654074915132!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <ContactForm />
        </section>
      </Fragment>
    );
  }
}

export default Map;
