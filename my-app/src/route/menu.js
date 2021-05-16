import React from "react";
import { Link } from "react-router-dom";


class Menu extends React.Component {

    render() {
        return (
            <section className="modal">
                <div className="lmodal">
                    <div className="lmodal__overayout"></div>
                    <div className="lmodal__overay">
                        <div className="menu__list">
                        <Link className="menu_close" to="/main">
                            <span>
                                X
                            </span></Link>
                            <div className="menu_year">년</div>
                            <div className="menu_month">월</div>
                            <div className="menu_week">주</div>
                            <div className="menu_day">일</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Menu;