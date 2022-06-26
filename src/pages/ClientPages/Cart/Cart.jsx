import React from 'react';
import { logo_white } from 'src/assets/images';
import { course_2 } from 'src/assets/images/course';
import { course_5 } from 'src/assets/images/shop';

export default function Cart() {
  return (
    <div>
      <div id="top-header">
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Cart</h1>
                  <ul className="header-bradcrumb justify-content-center">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active" aria-current="page">
                      Cart
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="woocommerce single page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="woocommerce-cart">
                  <div className="woocommerce-notices-wrapper" />
                  <form className="woocommerce-cart-form" action method>
                    <table
                      className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th className="product-remove">&nbsp;</th>
                          <th className="product-thumbnail">thumbnail</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="woocommerce-cart-form__cart-item cart_item">
                          <td className="product-remove">
                            <a
                              href="#"
                              className="remove"
                              aria-label="Remove this item"
                              data-product_id={30}
                              data-product_sku
                            >
                              ×
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                width={324}
                                height={324}
                                src={course_2}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name" data-title="Product">
                            <a href="#">Trendy Cloth</a>
                          </td>
                          <td className="product-price" data-title="Price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              90.00
                            </span>
                          </td>
                          <td
                            className="product-quantity"
                            data-title="Quantity"
                          >
                            <div className="quantity">
                              <label
                                className="screen-reader-text"
                                htmlFor="quantity_5cc58182489a8"
                              >
                                Quantity
                              </label>
                              <input
                                type="number"
                                id=" "
                                className="input-text qty text"
                                step={1}
                                min={0}
                                max
                                name="cart[34173cb38f07f89ddbebc2ac9128303f][qty]"
                                defaultValue={1}
                                title="Qty"
                                size={4}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                aria-labelledby="Sunglasses quantity"
                              />
                            </div>
                          </td>
                          <td className="product-subtotal" data-title="Total">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              90.00
                            </span>
                          </td>
                        </tr>
                        <tr className="woocommerce-cart-form__cart-item cart_item">
                          <td className="product-remove">
                            <a
                              href="#"
                              className="remove"
                              aria-label="Remove this item"
                              data-product_id={30}
                              data-product_sku
                            >
                              ×
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                width={324}
                                height={324}
                                src={course_5}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="product-name" data-title="Product">
                            <a href="#">Sunglasses</a>
                          </td>
                          <td className="product-price" data-title="Price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              90.00
                            </span>
                          </td>
                          <td
                            className="product-quantity"
                            data-title="Quantity"
                          >
                            <div className="quantity">
                              <label
                                className="screen-reader-text"
                                htmlFor="quantity_5cc58182489a8"
                              >
                                Quantity
                              </label>
                              <input
                                type="number"
                                id="quantity_5cc58182489a8"
                                className="input-text qty text"
                                step={1}
                                min={0}
                                max
                                name="cart[34173cb38f07f89ddbebc2ac9128303f][qty]"
                                defaultValue={1}
                                title="Qty"
                                size={4}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                aria-labelledby="Sunglasses quantity"
                              />
                            </div>
                          </td>
                          <td className="product-subtotal" data-title="Total">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              90.00
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={6} className="actions">
                            <div className="coupon">
                              <label htmlFor="coupon_code">Coupon:</label>{' '}
                              <input
                                type="text"
                                name="coupon_code"
                                className="input-text"
                                id="coupon_code"
                                defaultValue
                                placeholder="Coupon code"
                              />{' '}
                              <button
                                type="submit"
                                className="button"
                                name="apply_coupon"
                                value="Apply coupon"
                              >
                                Apply coupon
                              </button>
                            </div>
                            <button
                              type="submit"
                              className="button"
                              name="update_cart"
                              value="Update cart"
                              disabled
                            >
                              Update cart
                            </button>
                            <input
                              type="hidden"
                              id="woocommerce-cart-nonce"
                              name="woocommerce-cart-nonce"
                              defaultValue="27da9ce3e8"
                            />
                            <input
                              type="hidden"
                              name="_wp_http_referer"
                              defaultValue="/cart/"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-4">
                <div className="cart-collaterals mt-5">
                  <div className="cart_totals ">
                    <h2>Cart totals</h2>
                    <table
                      cellSpacing={0}
                      className="shop_table shop_table_responsive"
                    >
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td data-title="Subtotal">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              18.00
                            </span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td data-title="Total">
                            <strong>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                18.00
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="wc-proceed-to-checkout">
                      <a
                        href="checkout.html"
                        className="checkout-button button alt wc-forward"
                      >
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer footer-4">
          <div className="footer-mid">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 me-auto col-sm-8">
                  <div className="footer-logo mb-3">
                    <img src={logo_white} alt="" className="img-fluid" />
                  </div>
                  <div className="widget footer-widget mb-5 mb-lg-0">
                    <p>
                      Edumel is a Bootstrap Template for online courses
                      education websites support multiple courses
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Explore</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title ">Categories</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">SEO Business</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">Social Marketing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Links</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">News &amp; Blogs</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Address</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <h6 className="text-white">Phone</h6>
                        <a href="#">+0800 327 8534</a>
                      </li>
                      <li>
                        <h6 className="text-white">Email</h6>
                        <a href="#">support@edumel.com</a>
                      </li>
                    </ul>
                    <div className="footer-socials mt-4">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-btm-top">
            <a href="#top-header" className="js-scroll-trigger scroll-to-top">
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
