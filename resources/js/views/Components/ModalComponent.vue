<template>
    <!-- Main modal -->
    <div id="static-modal"
        class="text-black fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto">
        <div class="relative w-full max-w-2xl max-h-full p-4">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 border-b md:p-5 rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold">
                        {{ title }}
                    </h3>
                    <button type="button"
                        class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="static-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 space-y-4 md:p-5">
                    <!--Aqui Content-->
                    <slot name="content"></slot>

                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 border-t md:p-5 rounded-b dark:border-gray-600">
                    <button type="button" @click="save()"
                        class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Guardar</button>
                    <button type="button" @click="cancel()"
                        class="px-5  py-2.5 ms-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
    },
    methods: {
        cancel() {
            this.$emit("cancel")
        },
        save(){
            this.$emit("save")
        }

    }
}
</script>