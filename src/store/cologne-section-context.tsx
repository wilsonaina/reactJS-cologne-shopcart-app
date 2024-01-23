import {createContext, useReducer, useState} from "react";
import {CologneGroupModel, ModalProductDetails} from "../model/cologne-product-model";

export const CologneSectionContext = createContext<CologneGroupModel>({
    mensTab: () => {},
    womensTab: () => {},
    mensActiveTab: false,
    womensActiveTab: false,
    initProductModal: (val) => {},
    initCartModal: () => {},
    modalActive: false,
    cartModalActive: false,
    closeModal: () => {},
    addProductToCart: (val: ModalProductDetails) => {},
    shoppingCart: [],
    modalProductDetails: {
        id: 0,
        name: '',
        price: 0,
        image: '',
        description: ''
    }
});

function shoppingCartReducer(state: any, action: any) {
    // console.log(`Items added: ${JSON.stringify(action.product)}`);
    if (action.type === 'ADD_ITEM') {
        const itemsInCurrentCart: any[] = [...state.shoppingCart];
        itemsInCurrentCart.push(action.payload);

        return {
            shoppingCart: itemsInCurrentCart,
        }
    }

    return state;
}

export default function CologneSectionProvider({children}: { children: any }) {
    const [shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, {shoppingCart: [],})
    const [mensActiveTab, setMensActiveTab] = useState(true);
    const [womensActiveTab, setWomensActiveTab] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [cartModalActive, setCartModalActive] = useState(false);
    const [modalProductDetails, setModalProductDetails] = useState({
        id: 0,
        name: '',
        price: 0,
        image: '',
        description: ''
    });

    function mensTab() {
        setMensActiveTab(true);
        setWomensActiveTab(false);
    }

    function womensTab() {
        setWomensActiveTab(true);
        setMensActiveTab(false);
    }

    function initializeProductModal(product: any) {
        setModalProductDetails({...product});
        setModalActive(true);
    }

    function initializeCartModal() {
        setCartModalActive(true);
    }

    function closeModal() {
        setModalActive(false);
        setCartModalActive(false);
    }

    function addProductToCart(product: any) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: product
        });
    }

    const ctxValue = {
        mensTab: mensTab,
        womensTab: womensTab,
        mensActiveTab: mensActiveTab,
        womensActiveTab: womensActiveTab,
        initProductModal: initializeProductModal,
        initCartModal: initializeCartModal,
        modalActive: modalActive,
        cartModalActive: cartModalActive,
        closeModal: closeModal,
        modalProductDetails: modalProductDetails,
        addProductToCart: addProductToCart,
        shoppingCart: shoppingCartState.shoppingCart
    }

    return (
        <CologneSectionContext.Provider value={ctxValue}>
            {children}
        </CologneSectionContext.Provider>
    )
}
