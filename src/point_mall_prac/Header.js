import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataHelper from '../DataHelper';
import { inject, observer } from 'mobx-react';

@inject('authStore', 'itemStore')
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

    logout = () => {
        const { authStore } = this.props;
        authStore.deleteToken();
    }
    
    render() {
        const { authStore, itemStore } = this.props;
        const categories = this.state.categories.map((category) => {
            return (
                <Link key={category.id} to={'/categories/' + category.id}>{category.title}</Link>
            )
        });
        return (
        <header>
            <Link to='/'>메인</Link>
            {categories}
            <div className="header-right">
                <Link to="/cart/items">장바구니</Link>
                {
                    authStore.isLoggedIn && <Link to="/me/items">내 아이템 {itemStore.cartItemsCount}</Link>
                }
                {
                    authStore.isLoggedIn ?
                        <button onClick={this.logout}>로그아웃</button> :
                        <Link to="/login">로그인</Link>

                }
            </div>
        </header>
        )
    }
}

export default Header;