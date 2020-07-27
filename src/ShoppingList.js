import React from 'react';

const ah = require('albert-heijn');
const urlTools = require('url');

class ShoppingList extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    };
    }

    componentDidMount() {
        const { pathname } = urlTools.parse('https://www.ah.nl/producten/product/wi39686/ah-dubbel-likkers');
        const url = `https://www.ah.nl/service/rest/delegate?url=${encodeURIComponent(pathname)}`;
        fetch(url)
        .then(response => {
            if (response.status >= 400) {
            throw new Error('Bad response from server');
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        });
        ah.getNutritionFacts('https://www.ah.nl/producten/product/wi39686/ah-dubbel-likkers').then(console.log);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title} {item.price}
                    </li>
                ))}
            </ul>
            );
        }
    }
  }

  export default ShoppingList;