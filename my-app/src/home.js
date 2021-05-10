// import './public/css.css';
// import './public/script';


function Index() {
    return (
        <div>
            <header classNameName="top">
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


        </div>
    );
}

export default Index;