import React, { Component } from 'react';

import './style.css'

class MovieDetail extends Component {

    //阻止事件冒泡 
    handleClickDetail(e) {
        e.stopPropagation()
    }

    render() {
        const {item} = this.props
        const {tabName} = this.props
        const directors = item.directors
        const genres = item.genres
        const casts = item.casts
        return (
            <div className="item-detail" onClick={this.handleClickDetail.bind(this)}>
                <div className="header">{item.title}</div>
                <div className="tab-name" onClick={this.props.handleClick}>{tabName}</div>
                <div className="movie-img">
                    <img src={item.images.large} alt=""/>   
                </div>
                <div className="footer">
                    <h3>简介</h3>
                    <ul>
                        <li>名称: {item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{genres.map((i, index) => {
                           return  <span className="genres" key={index}>{i}</span>
                        })}</li>
                        <li>上映时间: {item.year}</li>
                        <li>导演: {directors.map((i) => {
                            return <span className="director" key={Math.random()}>{i.name}</span>
                        })}</li>
                        <li className="movie-title">{item.title}</li>
                    </ul>
                    <h3>演员</h3>
                    <div className="actor-img">
                        {casts.map((i, index) => {
                            return <div className="container" key={index}>
                                        <img src={i.avatars.small} alt=""/><span>{i.name}</span>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;