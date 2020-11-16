import React from "react";
import { Link } from "react-router-dom";

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200);
});
function togglesidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
const Menux = (props) => {
  return (
    <>
      <header>
        <ul>
          <li className="topo">
            <div className="toggle_btn" onClick={togglesidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
          <li>
            <Link to={props.link1}> {props.name1} </Link>
          </li>
          <li>
            <Link to="/herright">HerRights</Link>
            <ul>
              <li>
                <Link to="/knowyourright">Know Your Rights</Link>
              </li>
              <li>
                <Link to="/childright">Child Rights</Link>
              </li>
              <li>
                <a href="http://ncw.nic.in/ncw-cells/complaint-investigation-cell">
                  Complain To NCW
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/herstory">HerStory</Link>
            <ul>
              <li>
                <Link to="/article">Articles</Link>
              </li>
              <li>
                <Link to="/biography">Biography</Link>
              </li>
              <li>
                <Link to="/interviews">Interviews</Link>
              </li>
              <li>
                <Link to="/share_with_us">Share with us</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/news">InNews</Link>
            <ul>
              <li>
                <Link to="/daily_news">Daily News</Link>
              </li>
              <li>
                <Link to="/opinion">Opinion</Link>
              </li>
              <li>
                <Link to="/op-ed">OP-ED Columnist</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/hercare">HerCare</Link>
            <ul>
              <li>
                <Link to="/">Fitness</Link>
              </li>
              <li>
                <Link to="/">Skin & Hair Care</Link>
              </li>
              <li>
                <Link to="/">Ayurveda & Yoga</Link>
              </li>
              <li>
                <Link to="/">Mantel Wellness </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/herhome">HerHome</Link>
            <ul>
              <li>
                <Link to="/">Food Recipe</Link>
              </li>
              <li>
                <Link to="/">Home Decor</Link>
              </li>
              <li>
                <Link to="/">Gardening</Link>
              </li>
              <li>
                <Link to="/">Life Style</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Menux;
