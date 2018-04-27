import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'

import './style.css'

class Input extends Component {
    
    handleClick() {

        const inputDom = document.getElementsByTagName('input')[0]
        const keyWord = inputDom.value || 'a' //获取input 搜索关键字
        const {tab} = this.props
        const {request} = this.props
        const {tabName} = this.props
        const count = 5
        
        
        request(tab, tabName, keyWord, count)//调用父组件 发送请求
    }

    //按下enter键 搜索 
    handlekeyUp(e) {
        if(e.keyCode === 13) {
            this.handleClick();
        }
    }

    componentDidMount() {
        this.input.focus()
    }

    render() {
        return (
            <div className="search">
                <input type="text" ref={(input) => this.input=input} onKeyUp={this.handlekeyUp.bind(this)}/><button onClick={this.handleClick.bind(this)}>搜索</button>
            </div>
        )
    }
}

export default Input;