import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class UsuarioService
 * @description Service class for handling CRUD operations on Users using HTTP requests
 */
export class UsuarioService {
    /** @type {string} The API endpoint for usuarios */
    resourceEndpoint = import.meta.env.VITE_USUARIOS_ENDPOINT_PATH;

    /**
     * Retrieves all usuarios
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a specific usuario by ID
     * @param {number|string} id
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new usuario
     * @param {Usuario} usuario
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    create(usuario) {
        return httpInstance.post(this.resourceEndpoint, usuario);
    }

    /**
     * Updates an existing usuario
     * @param {number|string} id
     * @param {Usuario} usuario
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    update(id, usuario) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, usuario);
    }

    /**
     * Deletes a usuario by ID
     * @param {number|string} id
     * @returns {Promise<import('axios').AxiosResponse<any>>}
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    validateLogin(correo, password) {
        return httpInstance.post(`${this.resourceEndpoint}/login`, {
            email: correo,
            password: password
        });
    }

    UpdatePlanId(id, planId){
        console.log("Actualizando owner", id, planId);
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, { planId: planId });
    }
}