class GetApiData{
    constructor() {
        this.data = null;
    }

    async cargarDatos(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();
            this.data = data;
            return data;
        } catch(error) {
            console.error
        }
        
    }
}