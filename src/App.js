import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePageOne } from "./pages";
import { HomePageTwo } from "./pages";
import { HomePageThree } from "./pages";
import { HomePageFour } from "./pages";
import { HomePageFive } from "./pages";
import { HomePageSix } from "./pages";
import { HomePageSeven } from "./pages";
import { HomePageEight } from "./pages";
import { HomePageNine } from "./pages";
import { HomePageTen } from "./pages";
import { HomePageEleven } from "./pages";
import { HomePageTwelve } from "./pages";
import { FeaturePageOne } from "./pages";
import { FeaturePageTwo } from "./pages";
import { AboutPage } from "./pages";
import { ContactPage } from "./pages";
import { TeamPage } from "./pages";
import { FaqPage } from "./pages";
import { ErrorPage } from "./pages";
import { RegisterPage } from "./pages";
import { LogInPage } from "./pages";
import { ForGetPage } from "./pages";
import { ComingSoonPage } from "./pages";
import { AppDetailsV1Page } from "./pages";
import { AppDetailsV2Page } from "./pages";
import { ReviewPage } from "./pages";
import { PricingPage } from "./pages";
import { BlogDefaultPage } from "./pages";
import { BlogStandardtPage } from "./pages";
import { BlogTwoColumnPage } from "./pages";
import { BlogThreeColumnPage } from "./pages";
import { BlogDetailsOnePage } from "./pages";
import { BlogDetailsTwoPage } from "./pages";

import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/scss/bootstrap.scss";
import "react-modal-video/scss/modal-video.scss";
import "./assets/css/animate.css";
import "./assets/css/unicons.css";
import "./assets/css/flaticon.css";
import "./assets/css/fontawesome-all.css";
import "./assets/scss/style.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/blog-default-page" component={BlogDefaultPage} />
          <Route path="/blog-standard-page" component={BlogStandardtPage} />
          <Route path="/blog-two-column-page" component={BlogTwoColumnPage} />
          <Route
            path="/blog-three-column-page"
            component={BlogThreeColumnPage}
          />
          <Route path="/blog-details-one-page" component={BlogDetailsOnePage} />
          <Route path="/blog-details-two-page" component={BlogDetailsTwoPage} />
          <Route path="/pricing-page" component={PricingPage} />
          <Route path="/review-page" component={ReviewPage} />
          <Route path="/app-details-v2" component={AppDetailsV2Page} />
          <Route path="/app-details-v1" component={AppDetailsV1Page} />
          <Route path="/coming-soon" component={ComingSoonPage} />
          <Route path="/forget-password" component={ForGetPage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/404" component={ErrorPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/about-us" component={AboutPage} />
          <Route
            path="/features-saas-landing-creative"
            component={FeaturePageTwo}
          />
          <Route
            path="/features-app-landing-creative"
            component={FeaturePageOne}
          />
          <Route path="/app-store-elegant" component={HomePageTwelve} />
          <Route path="/app-store-creative" component={HomePageEleven} />
          <Route path="/saas-landing-modern" component={HomePageTen} />
          <Route path="/saas-landing-exclusive" component={HomePageNine} />
          <Route path="/saas-landing-elegant" component={HomePageEight} />
          <Route path="/saas-landing-creative" component={HomePageSeven} />
          <Route path="/app-landing-classic" component={HomePageSix} />
          <Route path="/app-landing-exclusive" component={HomePageFive} />
          <Route path="/app-landing-minimal" component={HomePageFour} />
          <Route path="/app-landing-modern" component={HomePageThree} />
          <Route path="/app-landing-elegant" component={HomePageTwo} />
          <Route exact path="/" component={HomePageOne} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
