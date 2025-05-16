import httpInstance from "@/shared/services/http.instance.js";
import {MascotaService} from "@/bounded-context/services/mascota.service.js";

/**
 * @class HistorialService
 * @description Service class for handling CRUD operations on historiales using HTTP requests
 */
export class HistorialService {
    /** @type {string} The API endpoint for historiales */
    resourceEndpoint = import.meta.env.VITE_HISTORIALES_ENDPOINT_PATH;
    mascotaService = new MascotaService();

    /**
     * Retrieves all historiales
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of historiales
     */
    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    /**
     * Retrieves a historial by its ID
     * @param {number|null} id - The ID of the historial to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the historial object
     */
    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    /**
     * Retrieves historiales by mascota ID
     * @param {number|null} mascotaId - The ID of the mascota
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of historiales
     */
    getByMascotaId(mascotaId) {
        return httpInstance.get(`${this.resourceEndpoint}?mascotaId=${mascotaId}`);
    }

    /**
     * Retrieves historiales by user ID
     * @param {number|null} usuarioId - The ID of the user
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of historiales
     */
    getByUserId(usuarioId) {
        this.mascotaService.getByUsuarioId(usuarioId)
            .then(response => {
                const mascotaIds = response.data.map(m => m.id);
                const historialPromises = mascotaIds.map(id =>
                    this.getByMascotaId(id)  // Llamamos a getByMascotaId y le pasamos el id de la mascota
                );
                return Promise.all(historialPromises).then(responses =>
                    responses.flatMap(r => r.data)
                );
            });
    }

    /**
     * Creates a new historial
     * @param {Object} resource - The historial object to create
     * @param {number} resource.mascotaId - The ID of the mascota
     * @param {Array} resource.registros - List of registros
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the created historial
     */
    create(resource) {
        return httpInstance.post(this.resourceEndpoint, resource);
    }

    /**
     * Updates an existing historial
     * @param {number|null} id - The ID of the historial to update
     * @param {Object} resource - The updated historial object
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the updated historial
     */
    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    /**
     * Deletes a historial by its ID
     * @param {number|null} id - The ID of the historial to delete
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves when the historial is deleted
     */
    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }
}
