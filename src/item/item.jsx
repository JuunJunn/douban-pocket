import React, { Component } from 'react'
import BookDetail from '../bookDetail/bookDetail.jsx'
import MovieDetail from '../movieDetail/movieDetail.jsx'
import MusicDetail from '../musicDetail/musicDetail.jsx'


import './style.css'

class Item extends Component {
    constructor() {
        super()
        this.state = {
            showDetail: false
        }
    }
    //显示详细页面事件 点击插入一个 detail 组件
    handleClick() {
        this.setState({
            showDetail: !this.state.showDetail
        })    
    }


    render() {
        const {item} = this.props
        const {tab} = this.props
        const {tabName} = this.props
        const tags = item.tags || []

        if(tab === 'music') {
            const musicTags = item.tags || []
            const singer = item.author || []
            return (
                <li id={item.id} className="content-item" onClick={this.handleClick.bind(this)}>
                    <img src={item.image} alt="" className="img"/> 
                    <div className="item-infor">
                        <span className="tags"># {tags.map((i) => `${i.name} `)}</span>
                        <h2 className="title">{item.title}</h2>
                        <span className="average">评分 {item.rating.average}</span>
                        <span className="author">{singer.map((i) => `${i.name} `)}</span>
                    </div>
                    {this.state.showDetail ? 
                    <MusicDetail item={item} handleClick={this.handleClick.bind(this)} tabName={tabName} key={item.id}/>
                    : null}
                </li>
            )
        }
        if (tab === 'movie') {
            const genres = item.genres || []
            const actor = item.directors || []
            return (
                <li id={item.id} className="content-item" onClick={this.handleClick.bind(this)}>
                    <img src={item.images.medium} alt="" className="img"/>
                    <div className="item-infor">
                        <span className="tags"># {genres.map((i,) => {
                          return  <span className="genres" key={Math.random()}>{i}</span>
                        })}</span>
                        <h2 className="title">{item.title}</h2>
                        <span className="author">{actor.map((i) => `${i.name} `)}</span>
                        <span className="average">评分 {item.rating.average}</span>
                        <span className="year">{item.year}</span>
                    </div>
                    {this.state.showDetail ? 
                    <MovieDetail item={item} handleClick={this.handleClick.bind(this)} tabName={tabName} key={item.id}/>
                    : null}
                 </li>
            )

        }
        if(tab === 'book') {
            return (
                <li id={item.id} className="content-item" onClick={this.handleClick.bind(this)}>
                    <img src={item.images.medium} alt="" className="img"/>
                    <div className="item-infor">
                        <span className="tags"># {tags.map((i) => `${i.title} `)}</span>
                        <h2 className="title">{item.title}</h2>
                        <span className="average">评分 {item.rating.average}</span>
                        <span className="author">{item.author}</span>
                        <span className="time">{item.year} {item.publisher}</span>
                    </div>
                    {this.state.showDetail ? 
                    <BookDetail item={item} handleClick={this.handleClick.bind(this)} tabName={tabName} key={item.id}/>
                    : null}
                </li>
            )
        }
    }
}

export default Item;