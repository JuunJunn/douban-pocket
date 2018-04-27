import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'

import './style.css'

class Tab extends Component {
    constructor() {
        super()
        this.state = {
            book: true,
            movie: false,
            music: false,
            color: 'black'
        }
    }


    hanleClick(e) {
        const target = e.target
       const tab = target.id || target.parentNode.id
       const {request} = this.props
       const inputDom = document.getElementsByTagName('input')[0]
       inputDom.value = ''//初始化input值
       const count = 5; //初始化count
       const keyWord = inputDom.value || 'a' //获取input 搜索关键字
       let tabName = ''

       

    if(tab == 'book') {
        this.setState({book: true, movie: false, music: false})
        tabName = '图书'
    }
    if(tab == 'movie') {
        this.setState({book: false, movie: true, music: false})
        tabName = '电影'
    }
    if(tab == 'music') {
        this.setState({book: false, movie: false, music: true})
        tabName = '音乐'
    }

    request(tab, tabName, keyWord, count)//调用负组件 发送请求

    }

    render() {
        return (
            <div className="tab-container">
                <div style={this.state.book? {color:this.state.color}:null} className="tab-item" id="book" onClick={this.hanleClick.bind(this)}><i className="icon-books"></i ><span>图书</span></div>
                <div style={this.state.movie? {color:this.state.color}:null} className="tab-item" id="movie" onClick={this.hanleClick.bind(this)}><i className="icon-movie"></i><span>电影</span></div>
                <div style={this.state.music? {color:this.state.color}:null} className="tab-item" id="music" onClick={this.hanleClick.bind(this)}><i className="icon-music"></i><span>音乐</span></div>
            </div>
        )
    }
}

export default Tab;