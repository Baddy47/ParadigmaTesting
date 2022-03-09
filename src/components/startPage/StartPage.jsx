import logo from '../../assets/Logo.png';
import calc from '../../assets/calc_icon.png';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';
import phoneIcon from '../../assets/phone_icon.png';
import sert_1 from '../../assets/sert-1.jpg';
import sert_2 from '../../assets/sert-2.jpg';
import sert_3 from '../../assets/sert-3.jpg';
import classes from './StartPage.module.css';
import {useState} from "react";

const StartPage = () => {

    //const setActive = ({isActive}) => isActive ? 'activePage' : '';

    const [license, setLicense] = useState();

    const popupOpen = (e) => {
        setLicense(e.target.currentSrc)
        let popup = document.getElementById('popup');
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';
        console.log(e)
    }
    const popupClosed = () => {
        let popup = document.getElementById('popup');
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
    }

    const slideBtnLeft = () => {
        let position = 0;
        let slidesToShow = 3;
        let slidesToScroll = 1;

        let slider = document.getElementById('slider-wrapper');
        let itemWidth = slider.offsetWidth / slidesToShow;
        let movePosition = slidesToScroll * itemWidth;
        let track = document.getElementById('slider');

        position += movePosition;
        track.style.transform = `translateX(${position}px)`;
    }
    const slideBtnRight = () => {
        let position = 0;
        let slidesToShow = 3;
        let slidesToScroll = 1;

        let slider = document.getElementById('slider-wrapper');
        let itemWidth = slider.offsetWidth / slidesToShow;
        let movePosition = slidesToScroll * itemWidth;
        let track = document.getElementById('slider');

        position -= movePosition;
        track.style.transform = `translateX(${position}px)`;
    }

    return (
        <>
            <div className={classes.pageContainer}>
                <header className={classes.header}>
                    <div className={classes.headerTop}>
                        <div className={classes.headerTopDescription}>
                            <a href="/">
                                <div className={classes.headerTopLogo}>
                                    <img src={logo} className={classes.headerTopLogoImg} alt="logo"/>
                                </div>
                            </a>
                            <div className={classes.headerTopDescriptionText}><strong>Профессиональный монтаж
                                дымоходов</strong> любой сложности в Киеве и Киевской обл.
                            </div>
                        </div>
                        <div onClick={popupOpen} className={classes.headerTopLocation}>
                            <div className={classes.headerTopLocationMap}/>
                            <div className={classes.headerTopLocationAddress}>
                                <p><strong>Украина, Киев,</strong><br/>Васильковская 30</p>
                            </div>
                            <div className={classes.popup}>
                                <div className={classes.popup__wrapper}>
                                    <div onClick={popupClosed} className={classes.popup__close}>X</div>
                                    <div className={classes.popup__content}>
                                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5285420608793!2d30.48762341594254!3d50.393986699312435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8dab18f8501%3A0x2a4b5bdd07e13e4!2z0YPQuy4g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDMwLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2sby!4v1643806804115!5m2!1sru!2sby"
                                            width="1000" height="800" allowFullScreen=""
                                            loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.headerTopButton}>
                            <button>Консультация инженера</button>
                        </div>
                        <div className={classes.headerTopContacts}>
                            <div className={classes.headerTopContactsNumber}>
                                <a href="tel:+380672435878">
                                    <img src={phoneIcon} alt="Phone"/>
                                    <span>+38 067 243-58-78</span>
                                </a>
                            </div>
                            <div className={classes.headerTopContactsSocial}>
                                <a href={'viber://chat?number=%2B380672435878'}>
                                    <div className={classes.headerTopContactsSocialViber}/>
                                </a>
                                <a href={'https://telegram.me/paradigma_website'}>
                                    <div className={classes.headerTopContactsSocialTelegram}/>
                                </a>
                                <a href={'https://wa.me/380672435878'}>
                                    <div className={classes.headerTopContactsSocialWathsApp}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.headerBottom}>
                        <nav className={classes.headerNavigation}>
                            <ul>
                                <li><a href={'#calculator'}>Калькулятор</a></li>
                                <li><a href={'#services'}>Услуги</a></li>
                                <li><a href={'#our-news'}>Наши новости</a></li>
                                <li><a href={'#reviews'}>Отзывы</a></li>
                                <li><a href={'#consultation'}>Консультация</a></li>
                                <li><a href={'#advantages'}>Преимущества</a></li>
                                <li><a href={'#production'}>Производство</a></li>
                                <li><a href={'#faq'}>Воррос-ответ</a></li>
                                <li><a href={'#contacts'}>Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main className={classes.mainContainer}>
                    <div className={classes.mainHeader}><b>Монтаж дымоходов из
                        нержавеющей стали</b> для
                        частных домов и предприятий
                    </div>
                    <div className={classes.mainDescription}>
                        <div className={classes.mainDescriptionItem}>
                            <div className={classes.mainDescriptionItemYear}>15</div>
                            <div><strong>лет устанавливаем дымоходы</strong> для частных лиц и организаций</div>
                        </div>
                        <div className={classes.mainDescriptionItem}>
                            <div><strong>Бесплатный выезд инженера</strong> в пределах 30 км. от Киева</div>
                        </div>
                        <div className={classes.mainDescriptionItem}>
                            <div><strong>Монтаж под ключ от 1 дня,</strong> в наличии все разрешительные документы</div>
                        </div>
                    </div>
                    <div className={classes.mainAboutAll}>
                        <div className={classes.mainAboutCalc}>
                            <p>
                                Рассчитайте стоимость монтажа вашего
                                дымохода за 1 минуту и <span>получите скидку 15%</span>
                            </p>
                            <button>
                                <img src={calc} alt="Calculator"/>
                                <p className={classes.mainAboutCalcTextButton}>Рассчитать стоимость монтажа и получить
                                    скидку</p>
                            </button>
                        </div>
                        <div className={classes.mainAboutLicense}>
                            <h5>Лицензии и сертификаты в наличии</h5>
                            <div className={classes.slider}>
                                <div onClick={slideBtnLeft} className={classes.slider__arrow}><img src={arrowLeft} alt="<"/>
                                </div>
                                <div id='slider-wrapper' className={classes.slider__wrapper}>
                                    <div id='slider' className={classes.slider__track}>
                                        <div className={classes.slider__item}><img onClick={popupOpen}
                                                                                 className={classes.slider__item_img}
                                                                                 src={sert_1} alt="Card"/></div>
                                        <div className={classes.slider__item}><img onClick={popupOpen}
                                                                                 className={classes.slider__item_img}
                                                                                 src={sert_2} alt="Card"/></div>
                                        <div className={classes.slider__item}><img onClick={popupOpen}
                                                                                 className={classes.slider__item_img}
                                                                                 src={sert_3} alt="Card"/></div>
                                    </div>
                                    </div>
                                <div onClick={slideBtnRight} className={classes.slider__arrow}><img src={arrowRight} alt=">"/>
                                </div>
                                <div id='popup' className={classes.popup}>
                                    <div className={classes.popup__wrapper}>
                                        <div onClick={popupClosed} className={classes.popup__close}>X</div>
                                        <div className={classes.popup__content}>
                                            <img src={license} alt="License"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default StartPage;