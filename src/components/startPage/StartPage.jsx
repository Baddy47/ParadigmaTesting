import logo from '../../assets/Logo.png';
import calc from '../../assets/calc_icon.png';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';
import phoneIcon from '../../assets/phone_icon.png';
import license from '../../assets/license_img.png';
import classes from './StartPage.module.css';

const StartPage = () => {

    //const setActive = ({isActive}) => isActive ? 'activePage' : '';

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
                            <div className={classes.headerTopDescriptionText}><b>Профессиональный монтаж
                                дымоходов</b> любой сложности в Киеве и Киевской обл.</div>
                        </div>
                        <div className={classes.headerTopLocation}>
                            <div className={classes.headerTopLocationMap}/>
                            <div className={classes.headerTopLocationAddress}>
                                <p><b>Украина, Киев,</b><br/>Васильковская 30</p>
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
                            <div><b>лет устанавливаем дымоходы</b> для частных лиц и организаций</div>
                        </div>
                        <div className={classes.mainDescriptionItem}>
                            <div><b>Бесплатный выезд инженера</b> в пределах 30 км. от Киева</div>
                        </div>
                        <div className={classes.mainDescriptionItem}>
                            <div><b>Монтаж под ключ от 1 дня,</b> в наличии все разрешительные документы</div>
                        </div>
                    </div>
                    <div className={classes.mainAboutAll}>
                        <div className={classes.mainAboutCalc}>
                            <p>
                                Рассчитайте стоимость монтажа вашего
                                дымохода за 1 минуту и  <span>получите скидку 15%</span>
                            </p>
                            <button>
                                <img src={calc} alt="Calculator"/>
                                <p className={classes.mainAboutCalcTextButton}>Рассчитать стоимость монтажа и получить скидку</p>
                            </button>
                        </div>
                        <div className={classes.mainAboutLicense}>
                            <h5>Лицензии и сертификаты в наличии</h5>
                            <div className={classes.mainAboutLicenseSlider}>
                                <div><img src={arrowLeft} alt="<"/></div>
                                <div className={classes.sliderWrapper}>
                                    <div className={classes.sliderItem}><img src={license} alt="Card"/></div>
                                    <div className={classes.sliderItem}><img src={license} alt="Card"/></div>
                                    <div className={classes.sliderItem}><img src={license} alt="Card"/></div>
                                </div>
                                <div><img src={arrowRight} alt=">"/></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default StartPage;