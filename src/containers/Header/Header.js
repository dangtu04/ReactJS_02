import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGES } from "../../utils";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };
  render() {
    const { processLogout, userInfo } = this.props;
    return (

      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        <div className="right-header">
          <span>          <FormattedMessage id="menu.welcome" />{" "}{userInfo && userInfo.email ? userInfo.email : ''}</span>
          <div className="language-container">
            <span
              className={this.props.language === LANGUAGES.VI ? "language active" : "language"}
              onClick={() => this.changeLanguage(LANGUAGES.VI)}
            >
              VI
            </span>
            |
            <span
              className={this.props.language === LANGUAGES.EN ? "language active" : "language"}
              onClick={() => this.changeLanguage(LANGUAGES.EN)}
            >
              EN
            </span>
          </div>
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fa-solid fa-power-off" title="Logout"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageApp: (language) => dispatch(actions.changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
