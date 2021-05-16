import React from "react";
import { Link } from "react-router-dom";

class Dayclick2 extends React.Component {

    render() {
        var dayName = ["일", "월", "화", "수", "목", "금", "토"];//요일배열

        var startNum = new Date(`${this.props.year}`, `${this.props.month}`, 1).getDay();//현재 년월 1일 시작 요일값(0=일,1=월...)
        var endNum = new Date(`${this.props.year}`, `${this.props.month + 1}`, 0).getDate();//현재 년월 마지막일(31,30,28,29)

        const weekview = [];
        const backmonth = [];
        const mainmonth = [];
        const forwardmonth = [];

        for (var day = 0; day < 7; day++) {    //49칸 만들기 및 요일 맨위에 놓기
            weekview.push(<div key={day} className={"day" + day}>{dayName[day]}</div>)
        }

        for (var i = 0; i < 49; i++) {//현재시점 달력 숫자 구현    

            if (i < startNum) {//현재시점 전월 일자 구현                
                backmonth.push(<div key={i} className={"day" + (i + 7) + ' bmonth'}>
                    {new Date(`${this.props.year}`, `${this.props.month}`, -startNum + 1).getDate() + i}
                </div>)
            }

            else if (i < endNum + startNum) {//현재시점 현월 숫자구현                
                mainmonth.push(<Link key={i} to="/main/schedule" className={"day" + (i + 7)}>{i - startNum + 1}</Link>)
            }

            else if (i < 42) {//현재시점 다음월 일자 구현

                forwardmonth.push(<div key={i} className={"day" + (i + 7) + ' amonth'}>
                    {new Date(`${this.props.year}`, `${this.props.month}`, i - startNum + 1).getDate()}
                </div>)
            }

        }

        return (

            <div className="mid-bottom">
                {weekview}
                {backmonth}
                {mainmonth}
                {forwardmonth}                
            </div>

        )
    }
}

export default Dayclick2;