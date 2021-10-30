<template>
    <div>
        <div class="info">
            <img class="avatar" src="/avatar.png">
        </div>
        <div>
            <h3>最近更新</h3>
            <Content :page-key="lastUpdatedKey"/>
        </div>
    </div>
</template>

<script>
import hash from "hash-sum";

export default {
    name: 'home',
    setup() {
        return {
            // reference @vuepress/core packages/@vuepress/core/src/page/createPage.ts
            // dont use pathInferred
            lastUpdatedKey: `v-${hash('/lastUpdated.html')}`
        }
    },
}
</script>

<style lang="scss" scoped>
.info {
    display: flex;
    justify-content: center;

    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
}
</style>