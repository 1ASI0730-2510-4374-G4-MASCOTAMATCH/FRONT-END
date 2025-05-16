import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class UsuarioPlanService
 * @description Service class for handling CRUD operations on usuario_planes using HTTP requests
 */
export class UsuarioPlanService {
    /** @type {string} The API endpoint for usuario_planes */
    resourceEndpoint = import.meta.env.VITE_USUARIO_PLANES_ENDPOINT_PATH;

    /**
     * Retrieves all usuario_planes
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of usuario_planes
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a specific usuario_plan by its ID
     * @param {number|string} id - The ID of the usuario_plan to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the usuario_plan object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new usuario_plan
     * @param {Object} resource - The usuario_plan object to create
     * @param {number} resource.usuarioId - The ID of the user
     * @param {number|null} resource.planId - The ID of the plan (can be null)
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created usuario_plan
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing usuario_plan
     * @param {number|null} id - The ID of the usuario_plan to update
     * @param {{planId: number, userId: number}} resource - The updated usuario_plan data
     * @param {number} resource.usuarioId - The ID of the user
     * @param {number} resource.planId - The ID of the plan (can be null)
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated usuario_plan
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a usuario_plan by its ID
     * @param {number|string} id - The ID of the usuario_plan to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the usuario_plan is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves all plans for a specific user
     * @param {number} usuarioId - The ID of the user
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of usuario_planes
     */
    getByUsuarioId(usuarioId) {
        return httpInstance.get(`${this.resourceEndpoint}?userId=${usuarioId}`);
    }

    /**
     * Retrieves all usuario_planes by planId
     * @param {number|string} planId - The ID of the plan to search for
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of usuario_planes
     */
    getByPlanId(planId) {
        return httpInstance.get(`${this.resourceEndpoint}?planId=${planId}`);
    }
}