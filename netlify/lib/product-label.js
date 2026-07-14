function getProductLabel(product) {

    let label = product.title;

    if (product.language) {
        label += ` (${product.language})`;
    }

    if (product.edition) {
        label += ` • ${product.edition}`;
    }

    return label;

}

module.exports = {

    getProductLabel

};