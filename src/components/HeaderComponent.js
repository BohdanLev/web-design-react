import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'E:/Stud/Second/WebDesign/wanderlance/src/stylesheets/bootstrap.min.css';
import 'E:/Stud/Second/WebDesign/wanderlance/src/stylesheets/styles.css';
import 'E:/Stud/Second/WebDesign/wanderlance/src/stylesheets/ourseller.css';

const token = localStorage.getItem('Token');
let isLogined = token ? true : false;
const url = "http://localhost:8000/media"

function LogedinUser(props){
  return(
    <div className="btn-group rounded-circle size red">

                <a
                  type="link"
                  className="btn dropdown-toggle "
                  data-toggle="dropdown"
                >
                  <figure className="fir-image-figure">
                    <a
                      className="fir-imageover"
                      rel="noopener"
                      target="_blank"
                      href="/userProfile"
                    >
                      <img
                        className="fir-author-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                      <div className="fir-imageover-color"></div>
                      <img
                        className="fir-imageover-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                    </a>
                  </figure>
                  <div>
              </div>
                </a>
                <div className="dropdown-menu">
                  <div>
                    <figure className="fir-image-figure ">
                      <a
                        className="fir-imageover"
                        rel="noopener"
                        target="_blank"
                        href="/userProfile"
                      >
                        <img
                          className="fir-author-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                        <div className="fir-imageover-color"></div>
                        <img
                          className="fir-imageover-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                      </a>

                      <figcaption>
                        <div className="fig-author-figure-title white-text ">
                          {props.first_name} {props.last_name}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to={`/users/${localStorage.getItem("id")}`} className="dropdown-item colorLink">
                    <i className="fa fa-money iconRed" aria-hidden="true"></i>
                    My products
                  </Link>
                  <Link to="/services/create" className="dropdown-item colorLink">
                    <i className="fa fa-money iconRed" aria-hidden="true"></i>
                    Create Product
                  </Link>
                  <Link to="/settings" className="dropdown-item colorLink">
                    <i className="fa fa-cog iconRed" aria-hidden="true"></i>
                    Settings
                  </Link>
                </div>
              </div>
  )
}


class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
          id: null,
          username: "",
          first_name: "",
          last_name: "",
          last_login: null,
          date_joined: null,
          fetched: false,
          image: null
        };
    }

  logOut = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then(res => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      localStorage.removeItem("id");
      window.location.reload(false);
      return res.json();

    });

  }

  componentDidMount() {

    if (isLogined) {
      fetch('http://localhost:8000/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        this.setState(data);
    localStorage.setItem('id', this.state.id);
        this.setState({ fetched: true });
        this.setState({image: data.image[data.image.length-1].image});
        localStorage.setItem("User", JSON.stringify(this.state));
        console.log(this.state);
      })
    }
  }


    render()
    {
        return(

    <div>
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><Link className="navbar-brand logo" to="/">Wanderlance</Link><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                    <li role="presentation" className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li role="presentation" className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                    <li role="presentation" className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
                    <li role="presentation" className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
                    {isLogined?<li id="logout" role="presentation" className="nav-item"><Link  className="nav-link" to="/" onClick={this.logOut} >Logout</Link></li>
                    :<li id="login" role="presentation" className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                    <li role="presentation" className="nav-item">{isLogined && this.state.fetched ? <LogedinUser 
              first_name={this.state.username} 
              last_name=""
              logOutClick={this.logOut}
              img = {url + this.state.image}/>:isLogined?<p></p>:""   }        </li>
                </ul>
            </div>
        </div>
    </nav>
</div>


        );
    }
}

export default Header;