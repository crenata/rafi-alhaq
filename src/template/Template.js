import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {jquery} from "../scripts/jquery";

class Template extends PureComponent {
    componentDidMount() {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.innerHTML = jquery.toString();
        document.body.appendChild(s);
    }

    render() {
        return (
            <>
                <div id="shell">
                    <Navbar/>
                    {this.props.children}
                    <Footer/>
                </div>

                <script src="//static.zdassets.com/hc/assets/en-us.2c5c638c28926554a2d6.js"/>
                <script
                    src="https://kalibrr-support.zendesk.com/auth/v2/host.js"
                    data-brand-id="114095008172"
                    data-return-to="https://kalibrr-support.zendesk.com/hc/en-us"
                    data-theme="hc"
                    data-locale="en-us"
                    data-auth-origin="114095008172,false,true"
                />
                <script src="//static.zdassets.com/hc/assets/hc_enduser-fc5f459435153cda7be0d2b49736899f.js"/>
                <script src="//static.zdassets.com/hc/assets/hc_analytics-c03f86cfac0a35d7f97a26b90615fd00.js"/>
                <script
                    type="text/javascript"
                    src="//p25.zdassets.com/hc/theming_assets/2132548/114095008172/script.js?digest=8637358424857"
                />
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993"
                    integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA=="
                    data-cf-beacon='{"rayId":"78d028547b37a135","token":"cf7c3fc56c9d48bc8da9737f5e2ddee8","version":"2022.11.3","si":100}'
                    crossOrigin="anonymous"
                />
            </>
        );
    }
}

Template.propTypes = {
    className: PropTypes.string
};

export default Template;