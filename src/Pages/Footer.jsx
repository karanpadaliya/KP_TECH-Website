import '../assets/css/Footer.css'
import footer_bg from '../assets/images/footer_bg.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="footer">
                <div className="container-fulid">
                    <div className="row" id='up_footer'>
                        <div className="col-lg-5">
                            <h3>LOGO</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit earum tenetur nobis eligendi dolore placeat, hic consectetur magni voluptate fugiat dicta.</p>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><RiInstagramFill /></a>
                            <a href=""><FaLinkedinIn /></a>
                        </div>
                        <div className="col-lg-3">
                            <h3>Qulick Link</h3>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Cources</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </div>
                        <div className="col-lg-4">
                            <h3>Get In Touch</h3>
                                <li>
                                    <FaLocationDot />  Office No:15, Second Floor, Nilkanth Plaza Near Swaminayan Template, Mavadi,Rajkot-360004
                                </li>
                            <li><FaPhoneAlt /> +91 1234567890</li>
                            <li><IoMdMail /> xyz@gmail.com</li>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <img src={footer_bg} alt="" id='footer_bg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer