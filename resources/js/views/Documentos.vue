<template>
    <div>
        <button @click="showModal = true">Show Modal</button>
        <modal-component-vue :title="'Edit Documentos'" v-if="showModal" v-on:save="handleSave" v-on:cancel="this.showModal = false">
            <template v-slot:content>
                <edit-document v-on:data="setData" />
            </template>
        </modal-component-vue>
   

        
    </div>
</template>

<script>
import ModalComponentVue from "./Components/ModalComponent.vue";
import EditDocument from "./Components/EditDocument.vue";
import FloatLabel from 'primevue/floatlabel';

export default {
    components: { ModalComponentVue,EditDocument },
    data() {
        return {
            showModal: false,
            text:"",
        }
    },
    methods: {
        handleSave(){

        },
        setData(e){
            console.log(e)
        }
    }
}
</script>
