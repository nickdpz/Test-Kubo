import React from 'react';
import './styles/Home.css';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SalesList from '../components/SalesList'
import FormBuy from '../components/FormBuy'
import Footer from '../components/Filter'

const Buy = ({ productsCar }) => {
    return (
        <div className="container">
            <Header />
            <SalesList sales={productsCar} />
            <FormBuy productsCar={productsCar}/>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productsCar: state.productsCar,
    };
};
export default connect(mapStateToProps, null)(Buy);