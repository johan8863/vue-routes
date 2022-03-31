<template>
  
    <div>
        <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon por id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->

        <custom-link 
            v-for="link in links"
            :key="link.to"
            :link=link
        />
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'Por Id', id: 150 },
                { to: 'pokemon-about', name: 'About' },
                
                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ-About' },

                { to: 'https://google.com', name: 'google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>

<style scoped>

    div {
        padding: 0px 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0px 10px;
    }

    /* div a.router-link-exact-active {
        color: #42b983;
    } */

</style>