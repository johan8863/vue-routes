<template>
    <h1>About Page</h1>
    <hr>
    <h4>{{ name }}</h4>
    <button @click="onChangeName">Change name</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Gisela'
        }
    },

    methods: {
        onChangeName() {
            this.name = this.name === 'Gisela'? 'Antonio': 'Gisela'
        }
    },

    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
    errorCaptured() {
        console.log('errorCaptured');
    },
    renderTracked() {
        console.log('renderTracked');
    },
    renderTriggered() {
        console.log('renderTriggered');
    },
}
</script>