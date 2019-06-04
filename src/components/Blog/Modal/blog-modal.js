import React from 'react'
import { Modal } from "react-bootstrap";
import "./blog-modal.css"

const blogModal = (props) => {
    const blog = props.blog;
    return (
        <Modal className="blog-modal" show={props.show} onHide={props.handleClose}>
            <Modal.Body>
                <div>
                    <img src={blog.imgUrl} alt="detail" />
                    <button className="btn modal-close-button" onClick={props.handleClose}>X</button>
                </div>
                <div className="blog-modal-info">
                    <h2>{blog.title}</h2>
                    <p className="date">Publicado {blog.date}.</p>
                    <p>{blog.shortDescription}</p>
                    <p>{blog.description}</p>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default blogModal
