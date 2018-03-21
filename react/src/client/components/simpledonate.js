import React, { Component }			from 'react';
import { Link, withRouter }           from 'react-router-dom';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class SimpleDonate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let env = 'sandbox';
        let currency = 'USD';
        let total = 1;
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
        };
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        };
        const onError = (err) => {
            console.log("Error!", err);
        };
        const client = {
            sandbox:    'AXNyaNk-cU4QvxtUq3g-_LBO22hiFggLx8i5-k-j1QWmqfuE9AWy06ThkkPOOpqtde-XHwUPwcYWLM3A',
            production: 'YOUR-PRODUCTION-APP-ID',
        };
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );

    }


}

export default withRouter(SimpleDonate);