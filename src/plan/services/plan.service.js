import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class PlanService
 * @description Service class for handling CRUD operations on categories using HTTP requests
 */
export class PlanService {
    /** @type {string} The API endpoint for planes */
    resourceEndpoint = import.meta.env.VITE_PLANES_ENDPOINT_PATH;

    /**
     * Retrieves all planes
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of planes
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a plan by its ID
     * @param {number|string} id - The ID of the plan to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the plan object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new plan
     * @param {Object} resource - The plan object to create
     * @param {string} resource.name - The name of the plan
     * @param {string} resource.image - The image of the plan
     * @param {string} resource.description - The description of the plan
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created plan
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing plan
     * @param {number|string} id - The ID of the plan to update
     * @param {Object} resource - The plan object to create
     * @param {string} resource.name - The name of the plan
     * @param {string} resource.image - The image of the plan
     * @param {string} resource.description - The description of the plan
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated plan
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a plan by its ID
     * @param {number|string} id - The ID of the plan to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the plan is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves plans by name
     * @param {string} name - The name to search for
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of matching planes
     */
    getByName(name) {
        return httpInstance.get(`${this.resourceEndpoint}?name=${name}`);
    }

    /**
     * Retrieves plans by name
     * @param {int} ownerId - The name to search for
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of matching planes
     */
    getPlanByOwnerId(ownerId){
        return httpInstance.get(`${this.resourceEndpoint}/owner/${ownerId}`);
    }
}