import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class MedicinaService
 * @description Service class for handling CRUD operations on medicina using HTTP requests
 */
export class MedicinaService {
    /** @type {string} The API endpoint for medicina */
    resourceEndpoint = import.meta.env.VITE_MEDICINAS_ENDPOINT_PATH;

    /**
     * Retrieves all medicina records
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of medicina
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a medicina by its ID
     * @param {number|null} id - The ID of the medicina to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the medicina object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new medicina
     * @param {Object} resource - The medicina object to create
     * @param {string} resource.nombre - The name of the medicina
     * @param {string} resource.descripcion - The description of the medicina
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created medicina
     */
    create(resource) {
        console.log('servicio create de medicina enviado'); // 👈 Confirmación visual
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing medicina
     * @param {number|null} id - The ID of the medicina to update
     * @param {Object} resource - The updated medicina object
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated medicina
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a medicina by its ID
     * @param {number|null} id - The ID of the medicina to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the medicina is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }
}
