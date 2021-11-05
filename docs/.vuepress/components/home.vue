<template>
    <div class="wrapper">
        <div class="info">
            <img class="avatar" src="/avatar.png">
            <div>Hi</div>
        </div>
        <div>
            <Content :page-key="lastUpdatedKey" class="list"/>
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
.wrapper{
    max-width: 80%;
    margin: 0 auto;
    margin-top: 30px;
}

.info {
    display: flex;
    justify-content: center;

    .avatar{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
}
.list{
    list-style: auto;
}
</style>