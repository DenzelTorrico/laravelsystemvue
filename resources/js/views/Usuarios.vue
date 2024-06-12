<template>
    <div class="card">
        <h1>Usuarios registrados</h1>
        <DataTable :value="users" tableStyle="min-width: 50rem">
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column header="Edit">
                <template #body="slotProps">
                    <Button severity="warning" @click="editUser(slotProps.data)"><span class="pi pi-search"></span>Editar
                    </Button>
                </template>    
            </Column>
            <Column header="Delete">
                <template #body="slotProps">
                    <Button severity="danger" @click="deleteUser(slotProps.data)"><i class="pi pi-times"></i>
                        Eliminar
                    </Button>
                </template>    
            </Column>
        </DataTable>
    </div>
    <modal-component   :title="'Edit Usuarios'" v-if="showModal" v-on:save="handleSave" v-on:cancel="this.showModal = false">
        <template v-slot:content>
            <edit-user :data="objeto" />
        </template>
    </modal-component>
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'
import EditUser from './Components/EditUser.vue';
export default {
    components: { DataTable, Column, ColumnGroup, Row,EditUser },
    data() {
        return {
            users: [],
            objeto: null,
            showModal:false
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        editUser(user){
            this.showModal = true
            this.objeto = user
        },
        deleteUser(user){
            axios.delete(`/api/user/${user.id}`).then(response => {
              if(response.data == "delete") this.getUser()
            }).catch(error => console.log(error))
        }
        ,
        getUser() {
            axios.get("/api/user").then(response => {
                this.users = response.data
            }).catch(error => console.log(error))
        }
    }
}
</script>