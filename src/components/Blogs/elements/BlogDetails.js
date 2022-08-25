import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { VideoModal } from "../../Modal";

const BlogDetails = () => {
  return (
    <Fragment>
      <div className="blog-details-content pb-0 clearfix">
        <h2 className="blog-title mb-30">
          You only live once, but if you do it right, once is enough.
        </h2>
        <div className="post-meta ul-li mb-30 clearfix">
          <ul className="clearfix">
            <li>
              <Link to="#!" className="post-admin">
                <span className="admin-image">
                  <img
                    src="../assets/images/meta/img-1.jpg"
                    alt="image_not_found"
                  />
                </span>
                Nicolas otamendi
              </Link>
            </li>
            <li>
              <i className="uil uil-stopwatch"></i> 5 Hours ago
            </li>
          </ul>
        </div>

        <p className="mb-60">
          Most improve you Digital Marketing{" "}
          <Link to="#!">
            <u>selling Campaign</u>
          </Link>{" "}
          this is is important for our ability to learn from mistakes, but it
          alsogive rise to self-criticism, because it is part of the
          threat-protection system in theme other wordsImprove you Digital
          Marketing selling.
        </p>
        <h3 className="title-text mb-30">Make your Business more faster</h3>
        <p className="mb-0">
          Improve you Digital Marketing selling{" "}
          <Link to="#!">
            <u>inventore veritatis</u>
          </Link>{" "}
          is important for our ability to learn from mistakes, but it alsogive
          rise to self-criticism, because it is part of the threat-protection
          system in the other wordsImprove you Digital Marketing selling. Lorem
          ipsum dolor sit amet, consecte adipisicing elit, sed do{" "}
          <Link to="#!">
            <u>eiusmod tempor</u>
          </Link>{" "}
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim vem,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <blockquote className="blockquote">
          <p className="mb-0">
            “Excepteur sint occaecat cupidatat non proident, sunt culpa quite
            deserunt enal mollit anim id estambul ilaborum. Sed ultra practice
            omnis iste natus error unexpected site.”
          </p>
        </blockquote>

        <img
          className="mb-45"
          src="../assets/images/blog/img-4.jpg"
          alt="image_not_found"
        />
        <h3 className="title-text">
          Make your Business promosion by writing Regular Blog Post
        </h3>
        <p className="mb-0">
          Improve you Digital Marketing selling{" "}
          <Link to="#!">
            <u>inventore veritatis</u>
          </Link>{" "}
          is important for our ability to learn from mistakes, but it alsogive
          rise to self-criticism, because it is part of the threat-protection
          system in the other wordsImprove you Digital Marketing selling.
        </p>

        <div className="video-item">
          <img src="../assets/images/blog/img-8.jpg" alt="image_not_found" />
          <span className="overlay"></span>
          <Link
            className="popup-video aos-init"
            to="https://youtu.be/pmm-1T9Av-g"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <i className="uil uil-play"></i>
          </Link>
          <VideoModal />
        </div>

        <p className="mb-45">
          Digital Marketing selling{" "}
          <Link to="#!">
            <u>inventore veritatis</u>
          </Link>{" "}
          is important for our ability to learn from mistakes, but it was
          alsogive rise to self-criticism, because it is part of the
          threat-protection system in the other the company wordsImprove you
          Digital Marketing selling.
        </p>

        <div className="features-list ul-li-block mb-45 clearfix">
          <ul className="clearfix">
            <li>
              <small className="icon">
                <i className="flaticon-checked"></i>
              </small>
              <span className="info-text">
                the and expound the actual teachings of the great explorer of
                the truth, of human happiness. NoM one rejects.
              </span>
            </li>
            <li>
              <small className="icon">
                <i className="flaticon-checked"></i>
              </small>
              <span className="info-text">
                the and expound the actual teachings of the great explorer.
              </span>
            </li>
            <li>
              <small className="icon">
                <i className="flaticon-checked"></i>
              </small>
              <span className="info-text">
                the and expound the actual teachings of the great explorer of
                the truth, of human happiness. NoM one rejects.
              </span>
            </li>
          </ul>
        </div>
        <p className="mb-45">
          Most improve you Digital Marketing{" "}
          <Link to="#!">
            <u>selling Campaign</u>
          </Link>{" "}
          this is is important for our ability to learn from mistakes, but it
          alsogive rise to self-criticism, because it is part of the
          threat-protection system in theme other wordsImprove you Digital
          Marketing selling.
        </p>

        <div
          className="post-admin mb-45 clearfix"
          style={{
            backgroundImage: `url("../assets/images/blog/post-admin-bg.jpg")`,
          }}
        >
          <div className="admin-image">
            <img
              src="../assets/images/blog/admin-1.jpg"
              alt="image_not_found"
            />
          </div>
          <div className="admin-content">
            <p className="mb-45">
              Excepteur sint occaecat cupidatat non proident, sunt quite derunt
              omollit anim id estambul ilaborum. Sed ultra practices omnis
              istelat aoatus error unexpected site
            </p>
            <span className="admin-name">Kane Wiliamson</span>
          </div>
        </div>

        <div className="tag-share-links mb-100 clearfix">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="tag-links ul-li float-left clearfix">
                <span className="title-text">tags</span>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">technology</Link>
                  </li>
                  <li>
                    <Link to="#!">design</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="share-links ul-li float-right clearfix">
                <span className="title-text">share</span>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="peoples-comments mb-100">
          <h3 className="title-text mb-60">Comments(03)</h3>
          <div className="comment-item">
            <div className="hero-image">
              <img
                src="../assets/images/meta/img-2.jpg"
                alt="image_not_found"
              />
            </div>
            <div className="comment-content">
              <div className="hero-info">
                <h4 className="hero-name">Cristina Perry</h4>
                <span className="comment-time">5 hours ego</span>
                <button type="button" className="reply-btn">
                  reply
                </button>
              </div>
              <p className="paragraph-text mb-0">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea all commodalo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse caerer
                illum dolore eu fugiat nulla
              </p>
            </div>
            <div className="comment-item">
              <div className="hero-image">
                <img
                  src="../assets/images/meta/img-3.jpg"
                  alt="image_not_found"
                />
              </div>
              <div className="comment-content">
                <div className="hero-info">
                  <h4 className="hero-name">johan oblak</h4>
                  <span className="comment-time">2 hours ego</span>
                  <button type="button" className="reply-btn">
                    reply
                  </button>
                </div>
                <p className="paragraph-text mb-0">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea all commodalo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  caerer illum dolore eu fugiat nulla
                </p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="hero-image">
              <img
                src="../assets/images/meta/img-4.jpg"
                alt="image_not_found"
              />
            </div>
            <div className="comment-content">
              <div className="hero-info">
                <h4 className="hero-name">Frida Finto</h4>
                <span className="comment-time">5 hours ego</span>
                <button type="button" className="reply-btn">
                  reply
                </button>
              </div>
              <p className="paragraph-text mb-0">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea all commodalo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse caerer
                illum dolore eu fugiat nulla
              </p>
            </div>
          </div>
        </div>

        <div className="comment-form">
          <h3 className="title-text mb-60">leave a cumment</h3>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="text" placeholder="your name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="form-item">
                <input type="email" placeholder="your email" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-item">
                <input type="text" placeholder="enter website" />
              </div>
              <div className="form-textarea">
                <textarea placeholder="write message"></textarea>
              </div>
              <button type="submit" className="custom-btn">
                send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDetails;
