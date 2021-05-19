import React from "react";
import { Link } from "react-router-dom";
import css from './css/main.css';
import Structure from './component/structure';
import dayclick from './component/dayclick';
import today from './component/today';
import Dayclick2 from './component/dayclick2';


var date = new Date();

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    datechangeleft = () => {
        if (this.state.month === 0) {//왼쪽 클릭시 1월일경우 년도/월 변경
            this.setState({
                year: this.state.year - 1,
                month: 11
            })
        }
        else {//현재월의 왼쪽 클릭시 년도 변경 외에 월변경
            this.setState({                
                month: this.state.month - 1
            })
        }
        document.querySelectorAll('.mid-bottom a').forEach(a => { a.classList.remove("target") });
    }

    datechangeright = () => {
        if (this.state.month === 11) {//오른쪽 클릭시 12월일경우 년도 변경
            this.setState({
                year: this.state.year + 1,
                month: 0
            })
        }
        else {//현재월의 오른쪽 클릭시 이벤트(년도 변경 외에)
            this.setState({                
                month: this.state.month + 1
            })
        }
    }

    componentDidMount() {        
        // dayclick();        
        today();
    }
    componentDidUpdate() {
    }

    render() {
        return (
            <div>
                <header className="top">
                    <section className="top-w">
                        <div className="top-p">
                            <Link id="menu" to="/main/menu">메뉴</Link>
                            <div id="home">공유 스케쥴 달력</div>
                            <div id="search">검색</div>
                        </div>
                    </section>
                </header>

                <section className="mid">
                    <div className="mid-s">

                        <Structure 
                        datechangeleft={this.datechangeleft}
                        datechangeright={this.datechangeright}
                        year={this.state.year}
                            month={this.state.month}
                         />

                        <Dayclick2
                            year={this.state.year}
                            month={this.state.month}
                        />

                    </div>
                </section>
                <section className="modal hidden">
                    <div className="cmodal hidden">
                        <div className="cmodal__overayout"></div>
                        <div className="cmodal__overay"></div>
                    </div>
                </section>

            </div>

        );
    }
}

export default Main;