import {createContext, useState} from "react";
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
    addProductToCart: (val) => {},
    shoppingCart: [],
    modalProductDetails: {
        id: 0,
        name: '',
        price: 0,
        image: '',
        description: ''
    }
});

export default function CologneSectionProvider({children}: { children: any }) {
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
    const [shoppingCart, setShoppingCart] = useState<any>({ shoppingCart: [], });

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
        setShoppingCart((prevShoppingCart: any) => {
            const itemsInCurrentCart: any[] = [...prevShoppingCart.shoppingCart];
            itemsInCurrentCart.push(product);

            return {
                shoppingCart: itemsInCurrentCart,
            }
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
        shoppingCart: shoppingCart.shoppingCart
    }

    return (
        <CologneSectionContext.Provider value={ctxValue}>
            {children}
        </CologneSectionContext.Provider>
    )
}
