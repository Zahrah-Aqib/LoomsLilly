import { create } from 'zustand';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface AppState {
    cart: CartItem[];
    wishlist: string[];
    addToCart: (product: any) => void;
    removeFromCart: (id: string) => void;
    toggleWishlist: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
    cart: [],
    wishlist: [],
    addToCart: (product) => set((state) => {
        const existing = state.cart.find(item => item.id === product.id);
        if (existing) {
            return {
                cart: state.cart.map(item => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
            };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
    })),
    toggleWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.includes(id)
            ? state.wishlist.filter(wId => wId !== id)
            : [...state.wishlist, id]
    })),
}));
