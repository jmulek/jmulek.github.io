import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import classNames from 'classnames';
import MeetTheTeamSlider from './../components/banners/meetTheTeam';
import { Helmet } from 'react-helmet';

class About extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "aboutPage"}}>
              <title>{`About - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render() {

        return (
            <div>
                {this.head()}
                <InternalTextBanner Heading="About" wrapperClass="about" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                <div className="main anim-appear">
                    <div className="aboutPage_wrapper">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        The company
                                    </h2>
                                    <ul className="gallery">
                                  		<li><h2 className="🐜-title">Dragonfly</h2></li>
                                  		<li><h2 className="🐜-title">Bug</h2></li>
                                  		<li><h2 className="🐜-title">Beetle</h2></li>
                                  		<li><h2 className="🐜-title">Bee</h2>
                                  		</li>
                                  		<li><h2 className="🐜-title">Grasshopper</h2></li>
                                  		<li><h2 className="🐜-title">Monarch</h2></li>
                                  		<li><h2 className="🐜-title">Fly</h2></li>
                                  		<li><h2 className="🐜-title">Ladybug</h2></li>
                                  		<li className="featured"><h2 className="🐜-title">Dragon fly</h2></li>
                                  		<li><h2 className="🐜-title">Fake Ladybug</h2></li>
                                  		<li><h2 className="🐜-title">Amazing-Looking Bug</h2></li>
                                  		<li className="mantis"><h2 className="🐜-title">Praying Mantis</h2></li>
                                  		<li><h2 className="🐜-title">Bee</h2></li>
                                  		<li><h2 className="🐜-title">Grasshopper</h2></li>
                                  		<li><h2 className="🐜-title">Butterfly or Moth</h2></li>
                                  		<li><h2 className="🐜-title">Beetle</h2></li>
                                  		<li><h2 className="🐜-title">Catepillar</h2></li>
                                  		<li><h2 className="🐜-title">Ladybug</h2></li>
                                  	</ul>
                                </div>
                                <MeetTheTeamSlider />
                            </div>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }

};

export default {
  component: About
};
