import React, { Component } from "react";

import "../stylesheets/userCard.css";
import { Link } from "react-router-dom";

export default class UserCard extends Component {
  render() {
    return (
      <div class="service-card col-md-5 col-lg-4">
        <div class="clean-pricing-item">
          <div class="heading">
            <img class="user-image" src={this.props.serviceimage}></img>
          </div>
          <p class="title">{this.props.title}</p>
          <div>
            <Link to={`/users/${this.props.ownerId}`}>
              <i>
                {" "}
                <img
                  class="user-profile-image rounded block"
                  src={this.props.userimage}
                />{" "}
              </i>
              <span>User:</span>
              <span>{this.props.username} </span>
            </Link>
          </div>
          <div class="features">
            <h5>
              <span class="feature">Category: </span>
              <span>{this.props.category}</span>
            </h5>
            <h4>
              <span class="feature">Description: </span>
              <span>{this.props.description}</span>
            </h4>
          </div>
          <div class="price">
            <h5>{this.props.price}$</h5>
          </div>
          <Link to={`/services/${this.props.id}`}>
            <button class="btn btn-outline-primary btn-block" type="button">
              BUY
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
