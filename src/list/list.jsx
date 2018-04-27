import React, { Component } from 'react';
import Item from '../item/item.jsx';

import './style.css'


var cnt = 5

class List extends Component {

    
    // 下拉刷新
    handleScroll(e) {
        let clientHeight = this.refs.list.clientHeight
        let scrollTop = this.refs.list.scrollTop
        let scrollHeight = this.refs.list.scrollHeight

        if((clientHeight + scrollTop) === (scrollHeight)) {
                cnt +=3
                const {data} = this.props
                const {tab} = this.props
                const {tabName} = this.props
                const {keyWord} = this.props
                const {request} = this.props

                request(tab, tabName, keyWord, cnt) // 下拉刷新请求
        }
    }
    //每次点击tab时候 重置scrollTop(滚动条)
    componentDidUpdate() {
        if(this.props.count < 6) {
            this.refs.list.scrollTop = 0;
        }
    }

    render() {

        const {data} = this.props
        const {tab} = this.props
        const {tabName} = this.props
        return (
            <ul className="content-list" onScroll={this.handleScroll.bind(this)} ref="list">
                {data.map((item) => <Item item={item} key={item.id} tab={tab} tabName={tabName}/>)}
            </ul>
        )
    }
}


export default List;