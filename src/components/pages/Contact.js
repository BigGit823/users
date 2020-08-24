import React from "react";

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

const Contact = () =>{
    return (	
        <div className="container">
            <div className="py-4">
                <div id="fb-root"></div>
                <h1>Contact Us</h1>
                <section class="mb-8">

                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <p class="w-responsive mx-auto mb-5">
                                   
                    2541 W Jerome Street, Unit A, CHicago, IL 60645
                                </p>    </div>
                            <div class="col-sm">
                                <p>Send us direct message</p>

                                <div class="fb-page" data-href="https://www.facebook.com/chicagonewa/" data-tabs="messages" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/chicagonewa/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/chicagonewa/">Newa American Dabu, Chicago</a></blockquote></div>
                            </div>
                        </div>
                    </div>




                </section>
            </div>
        </div>
    );
};

export default Contact;