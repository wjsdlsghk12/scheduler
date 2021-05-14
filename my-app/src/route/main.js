import React from "react";
import './css/main.css';
import Sss from './script';
import dayclick from './botton/dayclick';
import menu from './botton/menu';
import monleft from './botton/monleft';
import monright from './botton/monright';
import today from './botton/today';
// import { BrowserRouter } from "react-router-dom";
// import './public/script';
// import ScriptTag from 'react-script-tag';




class Main extends React.Component{    
    componentDidMount(){
        Sss();
        dayclick();
        menu();
        monleft();
        monright();
        today();
    }

    render(){
    return (
        <div>
            <header className="top">
                <section className="top-w">
                    <div className="top-p">
                        <div id="menu">메뉴</div>
                        <div id="home">공유 스케쥴 달력</div>
                        <div id="search">검색</div>
                    </div>
                </section>
            </header>

            <section className="mid">
                <div className="mid-s">

                    <div className="mid-top">
                        <div id="mid-top-left"></div>
                        <div id="month-left">◀</div>
                        <div id="month"></div>
                        <div id="month-right">▶</div>
                        <div id="today">오늘</div>
                    </div>

                    <div className="mid-bottom"></div>

                </div>
            </section>
            <section className="modal hidden">
                <div className="lmodal hidden">
                    <div className="lmodal__overayout"></div>
                    <div className="lmodal__overay">
                        <div className="menu__list">
                            <span className="menu_close">X</span>
                            <div className="menu_year">년</div>
                            <div className="menu_month">월</div>
                            <div className="menu_week">주</div>
                            <div className="menu_day">일</div>
                        </div>
                    </div>
                </div>

                <div className="cmodal hidden">
                    <div className="cmodal__overayout"></div>
                    <div className="cmodal__overay"></div>
                </div>
            </section>    
            <script>

            </script>
        </div>
        
    );
    }
}

export default Main;