export const getCollections = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`, {
            method: 'GET',
    
        });

        if (!response.ok) {
            throw new Error('Failed to fetch collections');
        }

        const collections = await response.json();
        return collections;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
}

export const getProducts = async (item: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${item}`, {
            method: 'GET',
       
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();
   
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const getProduct = async (productId: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`, {
            method: 'GET',
  
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products = await response.json();
   
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export const getSearchedProducts  = async (query: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`, {
            method: 'GET',
  

        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const searchedProduct = await response.json();
   
        return searchedProduct;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export const getOrders  = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`, {
        method: 'GET', 
     

    });
    return await orders.json();
   
}