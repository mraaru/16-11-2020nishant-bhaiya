import React, { Component } from 'react'
import NewsAll from '../../Pages/Component/Container/News/index'
import Top from "../../Pages/Component/Layout/Top";
import Menu from '../../Pages/Component/Layout/Menu';
import Sidebar from '../../Pages/Component/Layout/Sidebar';
import Footer from '../../Pages/Component/Layout/Footer';


export class News extends Component {
    render() {
        return (
            <div>
               
                
                <NewsAll />
                <Top />
                <Menu />
                <Footer />
                <Sidebar />
            </div>
        )
    }
}

export default News;
