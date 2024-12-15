import React from "react";
import "../App.css"; // Importing the CSS file

function Footer() {
  return (
    <footer>
      {/* Market Product Section */}
      <section id="market_product">
        {/* Product 1 */}
        <div className="ms">
          <div id="mp1" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Infinite Horizons{" "}
                <span>
                  <p className="aao">Price - 299$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="ms">
          <div id="mp2" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Embrace Astronaut{" "}
                <span>
                  <p className="aao">Price - 349$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="ms">
          <div id="mp3" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Marvelous Jupiter{" "}
                <span>
                  <p className="aao">Price - 499$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="ms">
          <div id="mp4" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Azure Dragon{" "}
                <span>
                  <p className="aao">Price - 449$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="ms">
          <div id="mp5" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Frozen Mafuga{" "}
                <span>
                  <p className="aao">Price - 449$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="ms">
          <div id="mp6" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Voyage Firmament{" "}
                <span>
                  <p className="aao">Price - 399$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="ms">
          <div id="mp7" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Jungle Fury{" "}
                <span>
                  <p className="aao">Price - 349$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="ms">
          <div id="mp8" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Ninja Town{" "}
                <span>
                  <p className="aao">Price - 499$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 9 */}
        <div className="ms">
          <div id="mp9" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Blossom Night{" "}
                <span>
                  <p className="aao">Price - 499$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Product 10 */}
        <div className="ms">
          <div id="mp10" className="mproduct product">
            <div className="pf">
              <p className="chupao">
                Droplet Pearl{" "}
                <span>
                  <p className="aao">Price - 499$</p>
                </span>
              </p>
              <button className="buy">
                Buy Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <center>
        <hr />
        <section id="last">
          <div id="do_subscribe">
            <h2>
              Never miss a <span>Drop!</span>
            </h2>
            <br />
            <p>
              Subscribe to the super-exclusive drop list and be the first to know about upcoming
              drops.
            </p>
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              id="mail"
              inputMode="email"
            />
            <input type="submit" id="submit" value="Submit" />
          </div>
        </section>
      </center>
    </footer>
  );
}

export default Footer;
