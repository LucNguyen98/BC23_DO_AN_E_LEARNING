import React from 'react';
import { author, blog_lg1, sm2, sm3, user } from 'src/assets/images/blog';

export default function BlogDetail() {
  return (
    <div>
      <div id="top-header">
        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="post-single">
                  <div className="post-thumb">
                    <img src={blog_lg1} alt="" className="img-fluid" />
                  </div>
                  <div className="single-post-content">
                    <div className="post-meta">
                      <span className="post-author">by Admin</span>
                      <span className="post-date">
                        <i className="fa fa-calendar-alt mr-2" />
                        May 9, 2021
                      </span>
                      <span className="post-comments">
                        <i className="far fa-comments" />
                        15 Comments
                      </span>
                    </div>
                    <h3 className="post-title">
                      {' '}
                      Digital Marketing Service Launched Ready Their Website
                      Working Our Site.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem, omnis voluptatum iure expedita sequi obcaecati iste
                      dolores debitis numquam, reprehenderit eum consequuntur
                      cum, quam nesciunt esse tenetur architecto molestiae
                      adipisci.
                    </p>
                    <p>
                      Some SEO-related tools such as the Google Keyword Planner
                      and Google Analytics provide quantitative
                    </p>
                    <blockquote>
                      Good design good business.Deliver the project wirthin
                      time.its called professionalism. Build your site with
                      care.
                      <cite>- Site Admin</cite>
                    </blockquote>
                    <h4 className="inner-title">
                      SEO is a Cost-Effective Advertising Strategy
                    </h4>
                    <p>
                      Some SEO-related tools such as the Google Keyword Planner
                      and Google Analytics provide quantitative data to help you
                      understand your market, analyze the trends, and know your
                      competitors’ standings. It helps you identify popular and
                      valuable keywords so you can decide how to structure or
                      revise your content. It also gives you insights on your
                      market’s behavior such as location, times of activity,
                      frequency of searches, technologies used, product
                      preferences, etc. All these metrics are useful in helping
                      you get to know your audience.
                    </p>
                    <ol>
                      <li>Donec porta ultricies urna, faucib</li>
                      <li>Ultricies porta Donec urna, faucib</li>
                      <li>Porta ultricies urna, faucib</li>
                    </ol>
                    <h4 className="inner-title">
                      SEO is a Cost-Effective Advertising Strategy
                    </h4>
                    <p>
                      {' '}
                      It also gives you insights on your market’s behavior such
                      as location, times of activity, frequency of searches,
                      technologies used, product preferences, etc. All these
                      metrics are useful in helping you get to know your
                      audience.
                    </p>
                    <ul>
                      <li>Lo managed to make it hers for $28 million.</li>
                      <li>Ultricies porta Donec urna, faucib</li>
                      <li>
                        Lo managed to make it hers for $28 million. As the Bronx
                        native acquires{' '}
                      </li>
                      <li>
                        The property, complete with a 30-seat screening room, a
                        100-seat amphit{' '}
                      </li>
                    </ul>
                  </div>
                  <div className="blog-footer-meta d-md-flex justify-content-between align-items-center">
                    <div className="post-tags mb-4 mb-md-0">
                      <a href="#">Design</a>
                      <a href="#">Development</a>
                      <a href="#">UX</a>
                    </div>
                    <div className="article-share d-md-flex align-items-center">
                      <h6>Share: </h6>
                      <ul className="social-icon">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {' '}
                            <i className="fab fa-twitter" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {' '}
                            <i className="fab fa-instagram" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-single-author mb-5">
                    <div className="author-img">
                      <img src={author} alt="" className="img-fluid" />
                    </div>
                    <div className="author-info">
                      <h4>Mikel John</h4>
                      <span>Web Developer</span>
                      <p>
                        Lorem ipsum dolor sit amet Officia enim nihil accusamus
                        error perspiciatis nam quas distinctio nobis, quibusdam
                        mollitia totam ipsam obcaecati, iusto alias
                        reprehenderit tempora placeat voluptates eligendi.
                      </p>
                    </div>
                  </div>
                  <div className="comments common-form">
                    <h3 className="title">2 Comments</h3>
                    <div className="comment-box">
                      <div className="comment-avatar">
                        <img src={user} className="me-3" alt="..." />
                      </div>
                      <div className="comment-info">
                        <h5>Harish John</h5>
                        <span>17 Feb 2021</span>
                        <p>
                          {' '}
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue
                          felis in faucibus.{' '}
                        </p>
                        <a className="reply-link" href="#">
                          <i className="fas fa-reply-all" />
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="has-children">
                      <div className="comment-box">
                        <div className="comment-avatar">
                          <img src={user} className="me-3" alt="..." />
                        </div>
                        <div className="comment-info">
                          <h5>Harish John</h5>
                          <span>17 Feb 2021</span>
                          <p>
                            {' '}
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Fusce
                            condimentum nunc ac nisi vulputate fringilla. Donec
                            lacinia congue felis in faucibus.{' '}
                          </p>
                          <a className="reply-link" href="#">
                            <i className="fas fa-reply-all" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comment-box">
                      <div className="comment-avatar">
                        <img src={user} className="me-3" alt="..." />
                      </div>
                      <div className="comment-info">
                        <h5>Harish John </h5>
                        <span>17 Feb 2021</span>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue
                          felis in faucibus.{' '}
                        </p>
                        <a className="reply-link" href="#">
                          <i className="fas fa-reply-all" />
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comments-form common-form mt-4 ">
                    <h3 className="titile">Write a Review </h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form action="#" className="comment_form">
                      <div className="row form-row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              name="msg"
                              id="msgt"
                              cols={30}
                              rows={6}
                              placeholder="Comment"
                              className="form-control"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <a href="#" className="btn btn-main rounded">
                              Post Comment
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="blog-sidebar mt-5 mt-lg-0">
                  <div className="widget widget-search">
                    <form role="search" className="search-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget widget_latest_post">
                    <h4 className="widget-title">Latest Posts</h4>
                    <div className="recent-posts">
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm3} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              Custom Platform for an Audit Insurance
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10 april 2021
                          </span>
                        </div>
                      </div>
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm2} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              World’s most famous app developers
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10 april 2021
                          </span>
                        </div>
                      </div>
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm3} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              Be a top rated marketer
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10 april 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li className="cat-item">
                        <a href="#">Web Design</a>(4)
                      </li>
                      <li className="cat-item">
                        <a href="#">Wordpress</a>(14)
                      </li>
                      <li className="cat-item">
                        <a href="#">Marketing</a>(24)
                      </li>
                      <li className="cat-item">
                        <a href="#">Design &amp; dev</a>(6)
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h4 className="widget-title">Tags</h4>
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">UX</a>
                    <a href="#">Marketing</a>
                    <a href="#">Tips</a>
                    <a href="#">Tricks</a>
                    <a href="#">Ui</a>
                    <a href="#">Free</a>
                    <a href="#">Wordpress</a>
                    <a href="#">bootstrap</a>
                    <a href="#">Tutorial</a>
                    <a href="#">Html</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
