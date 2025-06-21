import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class MascotaService
 * @description Service class for handling CRUD operations on mascotas using HTTP requests
 */
export class MascotaService {
    /** @type {string} The API endpoint for mascotas */
    resourceEndpoint = import.meta.env.VITE_MASCOTAS_ENDPOINT_PATH;

    /**
     * Retrieves all mascotas
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of mascotas
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a mascota by its ID
     * @param {number|null} id - The ID of the mascota to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the mascota object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new mascota
     * @param {Object} resource - The mascota object to create
     * @param {string} resource.nombre - The name of the mascota
     * @param {number} resource.edad - The age of the mascota
     * @param {number} resource.usuarioId - The ID of the associated usuario
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created mascota
     */
    create(resource) {
        console.log('servicio create de mascota enviado');  // 👈 Asegúrate de que se imprima
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing mascota
     * @param {number|string} id - The ID of the mascota to update
     * @param {Object} resource - The updated mascota object
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated mascota
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a mascota by its ID
     * @param {number|string} id - The ID of the mascota to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the mascota is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves all mascotas by usuarioId
     * @param {number|string} userId - The ID of the user to filter mascotas
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of mascotas
     */
    getPetsByUserId(userId) {
        return httpInstance.get(`${this.resourceEndpoint}/owner/${userId}`);
    }


}
