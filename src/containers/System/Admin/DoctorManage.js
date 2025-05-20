import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import Select from "react-select";
import "react-markdown-editor-lite/lib/index.css";
import "./DoctorManage.scss";
import { LANGUAGES } from "../../..//utils/constant";
import { toast } from 'react-toastify';


const mdParser = new MarkdownIt();

class DoctorManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctor: null,
      description: "",
      listDoctor: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctor();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctor !== this.props.allDoctor) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctor);
      this.setState({
        listDoctor: dataSelect,
      });
    }

    if (prevProps.language !== this.props.language) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctor);
      this.setState({
        listDoctor: dataSelect,
      });
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleChange = (selectedDoctor) => {
    this.setState({ selectedDoctor }
    );
  };

  handleOnChangDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  handleSaveInfo = async () => {
    let res = await this.props.saveDoctorDetail({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
    });
   if (res && res.errCode === 0) {
    toast.success(res.message);
  } else {
    toast.error(res.errMessage);
  }
  };

  render() {
    const { selectedDoctor } = this.state;
    return (
      <div className="manage-doctor-container">
        <h1 className="title text-center">Manage Doctor</h1>

        <div className="manage-doctor-editor">
          <div className="more-info row p-3 bg-light mb-3">
            <div className="left-content col-md-4">
              <label className="form-label">Chọn bác sĩ</label>
              <Select
                value={selectedDoctor}
                onChange={this.handleChange}
                options={this.state.listDoctor}
              />
            </div>
            <div className="right-content col-md-8">
              <label htmlFor="introduction" className="form-label">
                Giới thiệu
              </label>
              <textarea
                id="introduction"
                name="introduction"
                rows="6"
                className="form-control"
                placeholder="Nhập thông tin giới thiệu tại đây..."
                onChange={(event) => this.handleOnChangDescription(event)}
                value={this.state.description}
              ></textarea>
            </div>
          </div>

          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
        <button
          className="save-btn btn-primary"
          onClick={() => this.handleSaveInfo()}
        >
          Lưu thông tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctor: state.user.allDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveDoctorDetail: (data) => dispatch(actions.saveDoctorDetail(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
