import React, {Component} from 'react'

class MusciDetail extends Component {

    handleClickDetail(e) {
        e.stopPropagation()
    }
    

    render() {
        const {item} = this.props
        const {tabName} = this.props
        const singers = item.author
        const tags = item.tags
        return (
                    <div className="item-detail" onClick={this.handleClickDetail.bind(this)}>
                        <div className="header">{item.title}</div>
                        <div className="tab-name" onClick={this.props.handleClick}>{tabName}</div>
                        <div className="book-img">
                            <img src={item.image} alt=""/>
                            <ul className="scribtion-content">
                                <li>歌名: {item.title}{tags.map((i) => {
                                    return <span className="music-tags" key={Math.random()}>{i.name}</span>
                                })}</li>
                                <li>歌手: {singers.map((i) => {
                            return <span className="director" key={Math.random()}>{i.name} </span>
                        })}</li>
                                <li>发行商: {item.attrs.publisher}</li>
                                <li>发行时间: {item.attrs.pubdate}</li>
                                <li>评分: {item.rating.average}</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <h3>简介</h3>
                            <h3>内容</h3>
                            <p className="summary">{item.title}</p>
                        </div>
                    </div>
        )
    }
}

export default MusciDetail;