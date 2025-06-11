import React, { useState } from 'react';

export default function AddToCart() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);

    const handleClick = () => {
        const newProduct = { name, price, image, category };
        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
        setImage('');
        setCategory('');
    };

    return (
        <div className="main-container">
            <h1 className="main-title">Add Your Product</h1>

            <div className="flex-layout">
                <div className="form left-box">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                    <button onClick={handleClick}> + </button>
                </div>

                <div className="product-list right-box">
                    {products.length > 0 ? (
                        products.map((p, i) => (
                            <div key={i} className="product-card">
                                <img src={p.image} alt={p.name} />
                                <div className="info">
                                    <h3>{p.name}</h3>
                                    <p>₹{p.price}</p>
                                    <p>{p.category}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-products">No Product!</p>
                    )}
                </div>
            </div>
        </div>
    );
}