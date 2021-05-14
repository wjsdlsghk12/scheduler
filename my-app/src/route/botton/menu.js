import React from "react";
import { Link } from "react-router-dom";


class Menu extends React.Component {

    render() {
        return (
            <div className="modal">
                <div className="lmodal">
                    <div className="lmodal__overayout"></div>
                    <div className="lmodal__overay">
                        <div className="menu__list">
                            <span className="menu_close">
                                <Link to="/main">X</Link>
                            </span>
                            <div className="menu_year">년</div>
                            <div className="menu_month">월</div>
                            <div className="menu_week">주</div>
                            <div className="menu_day">일</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;