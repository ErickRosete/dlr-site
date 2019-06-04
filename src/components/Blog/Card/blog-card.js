import React from 'react'
import Col from "react-bootstrap/Col"
import "./blog-card.css"
const blogCard = (props) => {
    const blog = props.blog;
    return (
        <Col xs={12} md={4}>
            <div className="blog-card">
                <img src={blog.imgUrl} className="img-fluid" alt="blog-card-preview"></img>
                <div className="blog-card-info">
                    <h2>{blog.title}</h2>
                    <p className="date">Publicado {blog.date}.</p>
                    <p>{blog.shortDescription}</p>
                    <button onClick={props.onClick} className="btn btn-blue">Leer más</button>
                </div>
            </div>
        </Col>
    )
}

export default blogCard;
