import React, { Component } from 'react'
import Input from './input/input.jsx'
import List from './list/list.jsx'
import Tab from './tab/tab.jsx'
import fetchJsonp from 'fetch-jsonp'

import './style.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            tab: 'book',
            tabName: '图书',
            data: [],
            keyWord: 'a',
            count: 5
        }
    }



    //初始化主页数据
    componentWillMount() {
        fetchJsonp(`https://api.douban.com/v2/${this.state.tab}/search?q=${this.state.keyWord}&count=${this.state.count}`)
        .then((response) => {
           return response.json()
        }).then((json) => {
            this.setState({
                data: json.books
            })
        }).catch((ex) => {
            console.log('parsing failed', ex)
        })
    }

    //处理请求 以及更新state 重新渲染页面
    request(currentTab, currentTabName, current_keyWord, current_count) {
        let url = 'https://api.douban.com/v2/'
        //电影列表拉取 top--250
        if (currentTab == 'movie' && current_keyWord == 'a') {
            url =  `${url}${currentTab}/top250`
        }else {
            url = `${url}${currentTab}/search?q=${current_keyWord}&count=${current_count}`
        }
        fetchJsonp(`${url}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            let newData;
            if(currentTab == 'book') {
                newData = json.books
            }
            if(currentTab == 'movie') {
                newData = json.subjects;
            }
            if(currentTab == 'music') {
                newData = json.musics
            }
            this.setState({
                tab: currentTab,
                keyWord: current_keyWord,
                data: newData,
                tabName: currentTabName,
                count: current_count
            })
        })
        .catch((ex) => {
            console.log('pasring failed', ex)
        })
    }



    render() {
        return (
            <div className="app">
                <Input request={this.request.bind(this)} tab={this.state.tab} tabName={this.state.tabName} />
                <List request={this.request.bind(this)} data={this.state.data} count={this.state.count} tab={this.state.tab} keyWord={this.state.keyWord} tabName={this.state.tabName}/>
                <Tab request={this.request.bind(this)} keyWord={this.state.keyWord}/>
            </div>
        );
    }
}

export default App;


