import React, {Component} from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <footer className="page-footer font-small mdb-color dark pt-1 ">
          <div className="    container grey mb-3">
            <div className="footer-cols row">
              <ul>
                <div className="footer-text-title">Get started</div>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sign up</a>
                </li>
                <li>
                  <a href="#">Donwloads</a>
                </li>
              </ul>
              <ul>
                <div className="footer-text-title">About us</div>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
              <ul>
                <div className="footer-text-title">Support</div>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Help desk</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
              </ul>
              <ul>
                <div className="footer-text-title">Legal</div>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Terms of Usep</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="company_name" className="footer-copyright text-center bg-info">
            ©Wanderlance 2020
          </div>
        </footer>
      </div>
    );
  }
}