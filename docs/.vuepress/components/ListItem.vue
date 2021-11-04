<template>
    <div>
        <p>{{title}}</p>
        <p>
            <span v-for="tag in tags" :key="tag">{{tag}}</span>
        </p>
        <router-link :to="routeKey">readme</router-link>
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