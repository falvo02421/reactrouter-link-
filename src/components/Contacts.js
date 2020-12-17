import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row" data-aos="fade-in">
                                <div className="col-lg-5 d-flex align-items-stretch">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                        <div className="email">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>
                                        <div className="phone">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                <div className="validate"></div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Message</label>
                                            <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
export default Contact;