import httpInstance from "@/shared/services/http.instance.js";

/**
 * @class MedicinaMascotaService
 * @description Service class for handling CRUD operations on medicina-mascota entries using HTTP requests
 */
export class MedicinaMascotaService {
    /** @type {string} The API endpoint for medicina-mascota */
    resourceEndpoint = import.meta.env.VITE_MEDICINAS_MASCOTA_ENDPOINT_PATH;

    /**
     * Retrieves all medicina-mascota entries
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of medicina-mascota
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a medicina-mascota entry by its ID
     * @param {number|null} id - The ID of the entry to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the medicina-mascota object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Creates a new medicina-mascota entry
     * @param {MedicinaMascota} resource - The medicina-mascota object to create
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created entry
     */
    create(resource) {
        console.log("servicio create de medicina-mascota enviado");
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing medicina-mascota entry
     * @param {number|null} id - The ID of the entry to update
     * @param {Object} resource - The updated object
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated entry
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a medicina-mascota entry by its ID
     * @param {number|null} id - The ID of the entry to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the entry is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves all entries by user ID
     * @param {number|null} idUsuario - The ID of the user to filter by
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of entries
     */
    getByUsuarioId(idUsuario) {
        return httpInstance.get(`${this.resourceEndpoint}?idUsuario=${idUsuario}`);
    }

    /**
     * Retrieves all entries by mascota ID
     * @param {number|null} idMascota - The ID of the mascota to filter by
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of entries
     */
    getByMascotaId(idMascota) {
        return httpInstance.get(`${this.resourceEndpoint}?idMascota=${idMascota}`);
    }
}

