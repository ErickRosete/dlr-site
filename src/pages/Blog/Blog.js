import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
import { Container, Row } from "react-bootstrap";
import blogDetail from "../../assets/images/blog/blog-detail.png";
import BlogCard from "../../components/Blog/Card/blog-card"
import BlogModal from "../../components/Blog/Modal/blog-modal"
import "./Blog.css";

export class BlogPage extends Component {

    state = {
        selectedBlog: { id: "" },
        show: false,
    };
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = (blog) => {
        this.setState(
            {
                selectedBlog: blog,
                show: true
            });
    }

    render() {
        var data = {
            blogs: [{
                id: "23q4i9ujgvfaiwqeshjt02",
                title: "Título de noticia 1",
                date: "22/03/2019 - 9:00 am",
                imgUrl: blogDetail,
                shortDescription:
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.
                \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
            },
            {
                id: "asdfssad2123412r3",
                title: "Título de noticia 2",
                date: "22/03/2019 - 9:00 am",
                imgUrl: blogDetail,
                shortDescription:
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.
                \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
            },
            {
                id: "asoldfjhasasdfasder",
                title: "Título de noticia 3",
                date: "22/03/2019 - 9:00 am",
                imgUrl: blogDetail,
                shortDescription:
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.
                \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efficitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel. Lorem ipsum dolor sit amet, consectetur adipsicing elit.`,
            },
            ]
        }
        return (
            <Layout>
                <div className="blog">
                    <div className="blog-intro">
                        <div className="blog-intro-info">
                            <h1>{}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Nullam placerat enim dui, eget convallis nisi efficitur ve. Nullam placerat enim dui, eget convallis nisi efficitur vel.</p>
                        </div>
                    </div>
                    <div className="blog-list">
                        <Container>
                            <Row>
                                {data.blogs.map((blog) =>
                                    <BlogCard key={blog.id} blog={blog} onClick={this.handleShow.bind(this, blog)} />)}
                            </Row>
                        </Container>
                    </div>
                    <BlogModal
                        show={this.state.show} blog={this.state.selectedBlog} handleClose={this.handleClose}>
                    </BlogModal>
                </div>
            </Layout>
        );
    }
}

export default BlogPage;
