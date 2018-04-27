import React, {Component} from 'react'

//import './style.css'



class BookDetail extends Component {
    
    handleClickDetail(e) {
        e.stopPropagation()
    }

    render() {
        const {item} = this.props
        const {tabName} = this.props
        return (
                    <div className="item-detail" onClick={this.handleClickDetail.bind(this)}>
                        <div className="header">{item.title}</div>
                        <div className="tab-name" onClick={this.props.handleClick}>{tabName}</div>
                        <div className="book-img">
                            <img src={item.images.medium} alt=""/>
                            <ul className="scribtion-content">
                                <li>名称: {item.title}</li>
                                <li>作者: {item.author}</li>
                                <li>出版社: {item.publisher}</li>
                                <li>日期: {item.pubdate}</li>
                                <li>评分: {item.rating.average}</li>
                                <li>价格: {item.price}</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <h3>序言</h3>
                            <p className="catalog">{item.catalog}</p>
                            <h3>简介</h3>
                            <p className="summary">{item.summary}</p>
                        </div>
                    </div>
        )
    }
}

export default BookDetail;