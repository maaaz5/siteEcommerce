import { Link } from "react-router-dom";
import "../../Pages/Details/Details.css";
import Footer from "../../components/footer/Footer";
import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";

const ProductInfo = () => {
  return (
    <div>
      <main>
      <Miniheader/>
      <Header/>
      <Navigation/>
        <section className="path-section container row">
          <Link to="/home" className="home">
            Homepage
          </Link>
          <p className="slash">/</p>
          <Link to="/bakery" className="sel-cat">
            Bakery
          </Link>
          <p className="slash">/</p>
          <p className="sel-cat">Carrots from Tomissy Farm</p>
        </section>
        <section className="full-prodinfo row">
          <section className="img-column column">
            <div className="tags row">
              <p className="green-tag">- 36 %</p>
              <p className="green-tag">Free shipping</p>
            </div>
            <div className="img-sub" />
            <div className="img-sub" />
            <div className="img-sub" />
          </section>
          <section className="info-column column">
            <div className="title-star">
              <h1 className="title">Carrots from Tomissy Farm</h1>
              <div className="star-review row">
                <div className="stars row">
                  <img src="icons/star-yellow20x20.svg" alt="" />
                  <img src="icons/star-yellow20x20.svg" alt="" />
                  <img src="icons/star-yellow20x20.svg" alt="" />
                  <img src="icons/star-yellow20x20.svg" alt="" />
                  <img src="icons/star-transparent20x20.svg" alt="" />
                </div>
                <a className="review-value" href="#">
                  (1 customer review)
                </a>
              </div>
            </div>
            <div className="descript-div">
              <p className="description">
                Carrots from Tomissy Farm are one of the best on the market.
                Tomisso and his family are giving a full love to his Bio
                products. Tomisso’s carrots are growing on the fields naturally.
              </p>
            </div>
            <div className="chara-columns row">
              <div className="column-1 column">
                <div className="row">
                  <p className="name">SKU:</p>
                  <p className="value">76645</p>
                </div>
                <div className="row">
                  <p className="name">Category:</p>
                  <a href="#" className="value">
                    Vegetables
                  </a>
                </div>
                <div className="row">
                  <p className="name">Stock:</p>
                  <a href="#" className="value green">
                    In Stock
                  </a>
                </div>
                <div className="row">
                  <p className="name">Farm:</p>
                  <p className="value">Grocery Tarm Fields</p>
                </div>
              </div>
              <div className="column-2 column">
                <div className="row">
                  <p className="name">Freshness:</p>
                  <p className="value">1 days old</p>
                </div>
                <div className="row">
                  <p className="name">Buy by:</p>
                  <p className="value">pcs, kgs, box, pack</p>
                </div>
                <div className="row">
                  <p className="name">Delivery:</p>
                  <p className="value">in 2 days</p>
                </div>
                <div className="row">
                  <p className="name">Delivery area:</p>
                  <p className="value">Czech republic</p>
                </div>
              </div>
            </div>
            <div className="add-div row">
              <div className="price-column column">
                <p className="price">36.23 USD</p>
                <p className="old-price">48.56 USD</p>
              </div>
              <div className="btns row">
                <div className="count-block row">
                  <input type="text" name="value" placeholder={1} />
                  <label className="check-count row">
                    <input type="checkbox" name="check-count" />
                    <p className="check-name">Pcs</p>
                    <div className="check-icon" />
                  </label>
                </div>
                <div className="green-btn row">
                  <img src="icons/plus-white.svg" alt="plus" />
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
            <div className="wish-div row">
              <div className="wish-btn row">
                <label className="check-wish row">
                  <input type="checkbox" name="check-wish" />
                  <div className="check-icon" />
                  <p className="check-name">Add to my wish list</p>
                </label>
              </div>
              <div className="compare-btn row">
                <img src="icons/compare.svg" alt="compare icon" />
                <p>Compare</p>
              </div>
            </div>
            <div className="big-description column">
              <div className="select-row row">
                <div className="select-btn">
                  <input
                    type="radio"
                    name="radio-select"
                    id="radio-select1"
                    defaultChecked
                  />
                  <label htmlFor="radio-select1" className="radio-select row">
                    <p className="radio-name">Description</p>
                  </label>
                </div>
                <div className="select-btn">
                  <input type="radio" name="radio-select" id="radio-select2" />
                  <label
                    htmlFor="radio-select2"
                    className="radio-select radio-select2 row"
                  >
                    <p className="radio-name">Reviews</p>
                    <p className="green-tag">18</p>
                  </label>
                </div>
                <div className="select-btn">
                  <input type="radio" name="radio-select" id="radio-select3" />
                  <label
                    htmlFor="radio-select3"
                    className="radio-select radio-select3 row"
                  >
                    <p className="radio-name">Questions</p>
                    <p className="green-tag">4</p>
                  </label>
                </div>
              </div>
              <div className="description-text">
                <div className="text1">
                  <h3 className="title">Origins</h3>
                  <p className="description">
                    We work hard to ensure that the fruit and vegetables we sell
                    are fresh and high in quality. If we don’t grow them
                    ourselves, we source them from carefully chosen suppliers,
                    preferring to buy locally whenever possible.
                  </p>
                </div>
                <div className="text2">
                  <h3 className="title">How to cook</h3>
                  <p className="description">
                    From roasts, salads and soups to casseroles and cakes,
                    Carrots will lend sweetness, texture and colour to an
                    enormous number of recipes.
                  </p>
                </div>
              </div>
              <div className="vitamin-table">
                <h3 className="title">Full of Vitamins!</h3>
                <table className="vitamins">
                  <tbody>
                    <tr className="first-row">
                      <th>Vitamins</th>
                      <th>Quantity</th>
                      <th>% DV</th>
                    </tr>
                    <tr>
                      <td>Vitamin A equiv.</td>
                      <td>735 μg</td>
                      <td>104 %</td>
                    </tr>
                    <tr>
                      <td>Thiamine (B1)</td>
                      <td>0.066 mg</td>
                      <td>6 %</td>
                    </tr>
                    <tr>
                      <td>Niacin (B3)</td>
                      <td>0.983 mg</td>
                      <td>7 %</td>
                    </tr>
                    <tr>
                      <td>Folate (Bg)</td>
                      <td>19 μg</td>
                      <td>5 %</td>
                    </tr>
                    <tr>
                      <td>Vitamin C</td>
                      <td>5.9 mg</td>
                      <td>7 %</td>
                    </tr>
                    <tr>
                      <td>Vitamin E</td>
                      <td>0.66 mg</td>
                      <td>4 %</td>
                    </tr>
                    <tr>
                      <td>Vitamin K</td>
                      <td>13.2</td>
                      <td>13 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
        <section className="products-section container">
          <div className="section-title-row row">
            <p className="section-title title">Related products</p>
            <div className="section-btn button-right row">
              <a href="#">More products</a>
              <img src="icons/arrow-green-right.svg" alt="icon" />
            </div>
          </div>
          <div className="products-row row">
            <div className="column product-card product-card-2">
              <div className="img-sub"></div>
              <p className="product-title">Product Title</p>
              <p className="description">
                Space for a small product description
              </p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">3.26 USD</p>
                </div>
                <div>
                  <Link to="/checkout" className="buy-now-btn green-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub"></div>
              <p className="product-title">Product Title</p>
              <p className="description">
                Space for a small product description
              </p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">1.48 USD</p>
                </div>
                <div>
                  <Link to="/checkout" className="buy-now-btn green-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub">
                <p className="discount">- 36 %</p>
              </div>
              <p className="product-title">Product Title</p>
              <p className="description">
                Space for a small product description
              </p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">0.28 USD</p>
                  <p className="old-price">48.56</p>
                </div>
                <div>
                  <Link to="/checkout" className="buy-now-btn green-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub"></div>
              <p className="product-title">Product Title</p>
              <p className="description">
                Space for a small product description
              </p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">1.12 USD</p>
                </div>
                <div>
                  <Link to="/checkout" className="buy-now-btn green-btn">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </div>
  );
};

export default ProductInfo;
