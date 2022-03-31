<template>
    <h1>Pokemon: <span>{{ pokemon.name }}</span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: null
            pokemon: null
        }
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json())
                this.pokemon = pokemon
            } catch (error) {
                this.$router.push('/')
                console.log('nothing to do...');
            }
        }
    },
    created() {
        this.getPokemon()

        // const { id } = this.$route.params
        // this.id = id

    },

    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>