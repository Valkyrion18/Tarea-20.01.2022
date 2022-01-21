import React, { Component } from 'react';
import { url } from '../helpers/url';

export default class Lista extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ products: data })
    }

    render() {
        const state = this.state.products;
        return <div>
            <div>
                <table className="table text-center mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Species</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(product => (
                                <tr key={product.id}>
                                    <td><img src={product.image} width="100" height="100" alt=""/></td>
                                    <td>{product.name}</td>
                                    <td>{product.species}</td>
                                    <td>{product.status}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}
