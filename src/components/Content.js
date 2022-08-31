import React from 'react';

const Content = () => {
    return (
        <div>
            <div className="w3-row">
                <div className="w3-col l8 s12">
                    <div className="w3-card-4 w3-margin w3-white">
                        <img src="assets/woods.jpg" alt="Nature" style={{ width: "100%" }} loading="lazy"/>
                        <div className="w3-container">
                            <h3><b>TITLE HEADING</b></h3>
                            <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                        </div>

                        <div className="w3-container">
                            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
                                placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                                congue ullam corper. Praesent tincidunt sed
                                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                                fringilla.</p>
                            <div className="w3-row">
                                <div className="w3-col m8 s12">
                                    <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                </div>
                                <div className="w3-col m4 w3-hide-small">
                                    <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="w3-card-4 w3-margin w3-white">
                        <img src="assets/bridge.jpg" alt="Norway" style={{ width: "100%" }} loading="lazy"/>
                        <div className="w3-container">
                            <h3><b>BLOG ENTRY</b></h3>
                            <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
                        </div>

                        <div className="w3-container">
                            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
                                placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                                congue ullam corper. Praesent tincidunt sed
                                tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                                fringilla.</p>
                            <div className="w3-row">
                                <div className="w3-col m8 s12">
                                    <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE &raquo;</b></button></p>
                                </div>
                                <div className="w3-col m4 w3-hide-small">
                                    <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-badge">2</span></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3-col l4">
                    <div className="w3-card w3-margin w3-margin-top">
                        <img src="assets/avatar_g.jpg" style={{ width: "100%" }} loading="lazy"/>
                        <div className="w3-container w3-white">
                            <h4><b>My Name</b></h4>
                            <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of
                                lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                        </div>
                    </div>
                    <hr />

                    <div className="w3-card w3-margin">
                        <div className="w3-container w3-padding">
                            <h4>Popular Posts</h4>
                        </div>
                        <ul className="w3-ul w3-hoverable w3-white">
                            <li className="w3-padding-16">
                                <img src="assets/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: "50px" }} loading="lazy"/>
                                <span className="w3-large">Lorem</span><br />
                                <span>Sed mattis nunc</span>
                            </li>
                            <li className="w3-padding-16">
                                <img src="assets/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: "50px" }} loading="lazy"/>
                                <span className="w3-large">Ipsum</span><br />
                                <span>Praes tinci sed</span>
                            </li>
                            <li className="w3-padding-16">
                                <img src="assets/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: "50px" }} loading="lazy"/>
                                <span className="w3-large">Dorum</span><br />
                                <span>Ultricies congue</span>
                            </li>
                            <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                                <img src="assets/rock.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: "50px" }} loading="lazy"/>
                                <span className="w3-large">Mingsum</span><br />
                                <span>Lorem ipsum dipsum</span>
                            </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="w3-card w3-margin">
                        <div className="w3-container w3-padding">
                            <h4>Tags</h4>
                        </div>
                        <div className="w3-container w3-white">
                            <p>
                                <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span>
                                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div><br />
        </div>
    );
};

export default Content;