export interface CologneGroupModel {
    mensTab: () => void,
    womensTab: () => void,
    mensActiveTab: boolean,
    womensActiveTab: boolean,
    initProductModal: ({product}: { product: {} }) => void,
    initCartModal: () => void,
    modalActive: boolean,
    cartModalActive: boolean,
    closeModal: () => void,
    addProductToCart: (product: ModalProductDetails) => void,
    shoppingCart: [],
    modalProductDetails: ModalProductDetails
}

export interface ModalProductDetails {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string
}
