import React, { Component } from "react";
import Non from "../Image/Non.jpg";
import "./Cards.scss";
class UploadImg extends Component {
  state = {
    coverImg:
      "https://vignette.wikia.nocookie.net/thecreatureworldcc/images/8/8b/Space.jpeg/revision/latest?cb=20201016214350",
    PFImage: Non,
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ coverImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { coverImg } = this.state;
    const { PFImage } = this.state;
    return (
      <div className="Cover">
        <div className="EditBtn">
          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i class="fa fa-folder fa-1x"></i>
            </label>
          </div>
        </div>
        <img src={coverImg} alt="" />
        <div className="PFP">
          <img src={PFImage} alt="SuheibPF" />
        </div>
      </div>
    );
  }
}

export default UploadImg;
