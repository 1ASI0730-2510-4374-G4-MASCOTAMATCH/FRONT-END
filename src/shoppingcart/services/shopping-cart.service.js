import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class ShoppingCartService
 * @description Service class for handling CRUD operations on shopping carts using HTTP requests
 */
export class ShoppingCartService {
    /** @type {string} The API endpoint for shopping carts */
    resourceEndpoint = import.meta.env.VITE_SHOPPING_CART_ENDPOINT_PATH;

    /**
     * Retrieves the shopping cart
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of carts
     */
    getByOwnerIdAndPetId(ownerId, petId) {
        return httpInstance.get(`${this.resourceEndpoint}/owner/${ownerId}/pet/${petId}`);
    }

    /**
     * Creates a new shopping cart
     * @param {Object} resource - The cart object to create
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created cart
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Deletes a shopping cart by its ID
     * @param {number|string} id - The ID of the cart to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the cart is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves a shopping cart by owner ID
     * @param {number} ownerId - The ID of the owner
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the cart of the given owner
     */
    getCartByOwnerId(ownerId) {
        return httpInstance.get(`${this.resourceEndpoint}/owner/${ownerId}`);
    }
}