class ApiService{

    url='http://localhost:3000/api/contactos/';

    async create(pNewcontacto){
        const requestOption = {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(pNewcontacto)
        }   
        const response =  await fetch(`${this.url}crear`, requestOption);    
        return await response.json();
    }

    async read(){
        const response = await fetch(`${this.url}obtener`);
        return await response.json();
    }

 

    async delete(pContactoId){
        const requestOption = {
            method:'DELETE'
        };
        const response = await fetch(`${this.url}eliminar/${pContactoId}`,requestOption);
        return await response.json();        
    }
}

const app = new Vue({
    el:'#app',
    data:{
       contactos:[],
       apiService: null,
       newcontacto: {},
    },
    
    async created(){
        this.apiService = new ApiService();
        this.contactos  = await this.apiService.read();        
         
        
    },
    methods:{
        onClickSendContacto: async function() {
            await this.apiService.create(this.newcontacto);
            this.contactos  = await this.apiService.read();
            this.newcontacto={};
        },

        onClickEliminar: async function(pContactoId){
            this.contactos  = await this.apiService.delete(pContactoId);
            this.contactos  = await this.apiService.read();
        }
    }
})

