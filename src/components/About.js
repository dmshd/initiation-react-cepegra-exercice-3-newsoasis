import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <p>made during a 2 days React initiation session taught by Olivier Pelery at the <a href='www.cepegra.be' target='_blank'>Cepegra</a></p>
    );
}
