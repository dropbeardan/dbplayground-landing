import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import './Blog.less';

import { ArticleCard } from './index';
import { PaginationNav } from '../../Navs';
import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        blogState: store.blog
    }
})
export default class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            articlesPerPage: 5,
            panelCount: 7
        };

        this.changePage = this.changePage.bind(this);
        this.mapArticles = this.mapArticles.bind(this);
    };

    changePage(page) {
        this.setState({
            ...this.state,
            currentPage: page
        });

        window.scrollTo(0, 0);
    };

    mapArticles(articles, currentPage, articlesPerPage) {
        let startIndex = (currentPage - 1) * articlesPerPage;
        let endIndex = currentPage * articlesPerPage;

        let visibleArticles = articles.slice(startIndex, endIndex);

        return visibleArticles.map((article, index) => {
            return <ArticlePanel key={index} {...article} />;
        });
    };

    render() {
        let blogState = this.props.blogState;

        return (
            <section className='Blog'>
                <section className='title'>
                    <header>Drop Bear Stories</header>
                    <main>Small talk over the campfire...</main>
                </section>

                <section className='articleList'>
                    {
                        !blogState.articles || blogState.articles.length == 0 ?
                            <header>Coming Soon to a Campfire near you!</header> :
                            null
                    }

                    <main>
                        {this.mapArticles(blogState.articles, this.state.currentPage, this.state.articlesPerPage)}
                    </main>
                    {
                        !blogState.articles || blogState.articles.length == 0 ?
                            null :
                            <PaginationNav
                                currentPage={this.state.currentPage}
                                pageCount={Math.ceil(blogState.articles.length / this.state.articlesPerPage)}
                                panelCount={this.state.panelCount}
                                onClick={this.changePage}
                            />
                    }
                </section>

                <JourneyTracker />
            </section>
        );
    };
};