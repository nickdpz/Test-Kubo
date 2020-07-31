import React from 'react';
import './styles/Home.css';
import { connect } from 'react-redux';
import ProductContainer from '../components/ProductContainer';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import Filter from '../components/Filter'
import Footer from '../components/Filter'

const Home = ({ products }) => {
    return (
        <>
            <Header />
            <div className="container-body">
                <Filter />
                <ProductContainer>
                    {products.length > 0 && (
                        <>
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    {...item}
                                    isList
                                />
                            ))}
                        </>
                    )}
                </ProductContainer>
            </div>
            <Footer />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};
export default connect(mapStateToProps, null)(Home);