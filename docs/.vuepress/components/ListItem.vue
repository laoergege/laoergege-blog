<template>
    <div>
        <router-link :to="{ name: routeKey }"><h3>{{title}}</h3></router-link>
        <p>
            <span v-for="tag in tags" :key="tag">{{tag}}</span>
        </p>
        
    </div>
</template>

<script>
export default {
    setup(props, { attrs }) {
        const { title, routeKey, tags } = attrs

        return {
            title,
            routeKey,
            tags
        }
    },
}
</script>