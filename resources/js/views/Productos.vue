<template>
    <div class="card">
        <h1>Productos registrados</h1>
        <DataTable :value="productos" tableStyle="min-width: 50rem">
            <Column field="id" header="Id"></Column>
            <Column field="name" header="Name"></Column>
        </DataTable>
    </div>
   
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'
export default {
    components: { DataTable, Column, ColumnGroup, Row },
    data() {
        return {
            productos: [],
            objeto: null,
            showModal:false
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
     
        getProduct() {
            axios.get("/api/products").then(response => {
                this.productos = response.data
            }).catch(error => console.log(error))
        }
    }
}
</script>