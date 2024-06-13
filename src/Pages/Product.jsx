import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Description box/Descriptionbox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrumbs product={product} />
            <ProductDisplay product = {product} />
            <Descriptionbox/>
            <RelatedProducts/>
        </div>
    );
}

export default Product;
