import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Schedule extends React.Component {
    getMovies = async () => {
        const a = await axios.get("http://localhost:3001/main/schedule");
        return a
    }

    componentDidMount(){
        console.log(this.getMovies());
    }

    render() {
        return (
            <section className="modal">
                <div className="cmodal">
                    <div className="cmodal__overayout"></div>
                    <div className="cmodal__overay">
                        <Link className="menu_close2" to="/main">
                            <span>
                                X
                            </span></Link>
                    </div>
                </div>
            </section>
        )
    }
}


export default Schedule;