import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              AyCachapas! 
            </Link>
          </div>
          <small className="website-rights">
            {" "}
            Copyright <i class="fa-regular fa-copyright"></i> 2022-Aycachapas
          </small>
          <div className="social-icons-wrapper">
            <div className="social-icons">
              
              <a
                className="social-icon-link-instagram"
                href="https://instagram.com/ay.cachapas?igshid=YmMyMTA2M2Y="
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" style={{color:"black"}}></i>
              </a>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
