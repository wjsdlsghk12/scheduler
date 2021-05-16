import React from "react";


var date = new Date();//현재 날짜

class Structure extends React.Component {
    componentDidMount(){        
        var startNum = new Date(`${this.props.year}`, `${this.props.month}`, 1).getDay();//현재 년월 1일 시작 요일값(0=일,1=월...)    
        document.querySelector(`.day${date.getDate() + startNum + 6}`).classList.add("target");//홈페이지 진입시 오늘 설정
    }
    render() {        
        var midtlc = this.props.year;
        var midtlin = `${this.props.year}년${this.props.month + 1}월`;
        var month = (this.props.month + 1);
        return (
            <div className="mid-top">
                <div id="mid-top-left" className={midtlc}>{midtlin}</div>
                <div onClick={this.props.datechangeleft} id="month-left">◀</div>
                <div id="month">{month}</div>
                <div onClick={this.props.datechangeright} id="month-right">▶</div>
                <div id="today">오늘</div>
            </div>
        )
    }
}

export default Structure;


