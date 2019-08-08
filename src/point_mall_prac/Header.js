import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataHelper from '../DataHelper';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class Header extends React.Component{
    helper = new DataHelper();
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: this.helper.isLoggedIn,
            categories: []
        };
    }

    componentDidMount() {
        this.indexCategories();
    }

    indexCategories() {
        axios.get(DataHelper.baseURL() + '/categories/')
            .then((response) => {
                const categories = response.data;
                this.setState({
                    categories: categories
                });
            });
    }
    
    render() {
        return (
        <header>
            <Link to='/'>메인</Link>
            <div className="header-right">
                <Link to="/login">로그인</Link>
            </div>
        </header>
        )
    }
}

export default Header;