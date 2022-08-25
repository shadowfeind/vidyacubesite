import React, { useState, Fragment } from "react";
import ModalVideo from "react-modal-video";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="UxPkK8gW0hs"
        onClose={() => setOpen(false)}
      />

      <button
        className="popup-video aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay="100"
        onClick={() => setOpen(true)}
      >
        <i className="uil uil-play"></i>
      </button>
    </Fragment>
  );
};

export default VideoModal;
