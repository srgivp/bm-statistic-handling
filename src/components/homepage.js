import React, {useEffect} from "react";
import './components-styles/styles-homepage.scss';
import mobile from '../images/mobile.svg';
import ellipse from '../images/ellipse.svg';
import design from '../images/design.svg';
import secure from '../images/secure.svg';
import retina from '../images/retina.svg';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {serverErrorAction} from "../redux/actions/server-error-action";

const Homepage = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('http://localhost:8080/');
                if (response.ok) {
                    const {message} = await response.json();
                    console.log(message);
                } else {
                    const error = await response.json();
                    error.message = 'Internal server error';
                    dispatch(serverErrorAction({error}));
                }
            } catch (err) {
                const {message, stack} = err;
                const error = {message, stack};
                dispatch(serverErrorAction({error}))
            }
        }
        fetchData();
    }, []);

    return <div id='homepage'>
        <div id='top-container'>
            <div>AppCo</div>
            <div><b>Brainstorming</b> for<br/> desired perfect Usability</div>
            <div>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our
                work!
            </div>
            <div className='button' onClick={() => history.push('/users/1')}>Views Stats</div>
            <img id='ellipse' src={ellipse} alt='ellipse'/>
            <img id='mobile' src={mobile} alt='mobile'/>
        </div>
        <div>
            Why <b>small business owners <br/>
            love</b> AppCo?
        </div>
        <div>
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
        </div>
        <div id='products'>
            <div className='product'>
                <div>
                    <img src={design} alt='design'/>
                </div>
                <h3>Clean Design</h3>
                <p>Increase sales by showing true dynamics of your website.</p>
            </div>
            <div className='product'>
                <div>
                    <img src={secure} alt='secure'/>
                </div>
                <h3>Secure Data</h3>
                <p>Build your online store’s trust using Social Proof & Urgency.</p>
            </div>
            <div className='product'>
                <div>
                    <img src={retina} alt='retina'/>
                </div>
                <h3>Retina Ready</h3>
                <p>Realize importance of social proof in customer’s purchase decision.</p>
            </div>
        </div>
        <footer>
            <form action='post>'>
                <input type='e-mail' placeholder='Enter your email'/>
                <input type='button' value='Subscribe'/>
            </form>
            <div className='flex-container'>
                <div>AppCo</div>
                <div>All rights reserved by ThemeTags</div>
                <div>Copyrights © 2019.</div>
            </div>
        </footer>
    </div>
}

export default Homepage;