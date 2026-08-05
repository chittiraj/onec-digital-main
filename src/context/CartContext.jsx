import {
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    /* =============================
            Load Cart
    ============================== */

    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];

    });

    /* =============================
        Save Cart To LocalStorage
    ============================== */

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);

    /* =============================
            Add To Cart
    ============================== */

    const addToCart = (product) => {

        setCartItems((prevItems) => {

            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {

                return prevItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                );

            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: 1,
                },
            ];

        });

    };

    /* =============================
        Increase Quantity
    ============================== */

    const increaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );

    };

    /* =============================
        Decrease Quantity
    ============================== */

    const decreaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };

    /* =============================
        Remove From Cart
    ============================== */

    const removeFromCart = (id) => {

        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );

    };

    /* =============================
            Clear Cart
    ============================== */

    const clearCart = () => {

        setCartItems([]);

    };

    /* =============================
            Total Items
    ============================== */

    const totalItems = useMemo(() => {

        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

    }, [cartItems]);

    /* =============================
            Total Price
    ============================== */

    const totalPrice = useMemo(() => {

        return cartItems.reduce(
            (total, item) =>
                total + (item.price * item.quantity),
            0
        );

    }, [cartItems]);

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >

            {children}

        </CartContext.Provider>

    );

}