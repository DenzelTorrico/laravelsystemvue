<template>
    <div class="form-container">

        <form>
            <div class="p-fluid mt-5 mb-5">
                <div class="p-field">
                    <FloatLabel>
                        <InputText id="username" v-model="formData.name" />
                        <label for="username">Nombre de Usuario</label>
                    </FloatLabel>
                </div>

                <div class="p-field mt-5">
                    <FloatLabel>
                        <InputText id="email" v-model="formData.email" />
                        <label for="email">Correo Electrónico</label>
                    </FloatLabel>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    data() {
        return {
            formData: {
                name: this.data.name,
                email: this.data.email
            }
        }
    },
    mounted() {
        console.log(this.data)
    },
    watch: {
        formData: {
            handler(newVal) {
                this.$emit("edituser", newVal)
            }
        }
    }
}
</script>