function solve(product, quantity) {
    switch (product) {
        case "coffee":
            return (1.50 * +quantity).toFixed(2);
        case "water":
            return (1.00 * +quantity).toFixed(2);
        case "coke":
            return (1.40 * +quantity).toFixed(2);
        case "snacks":
            return (2.0 * +quantity).toFixed(2);
    }
}
