import React from 'react';
import './css/Footer.css';
import {Link} from'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer">
            <h1><Link to="/">Features</Link></h1>
            <address>
                2452 Features, Honolulu, HI 96814 USA
                대표자.minjeong, 사업자번호.123-45-6789
                <br/>E abcd@naver.com T 123-456-789
                <br/>Copyright © 2022 by minjeong. All right reserved.
            </address> 
        </div>
    );
};

export default Footer;