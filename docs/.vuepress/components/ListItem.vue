<template>
  <div class="card my-6">
    <div class="card-body">
      <h1 class="card-title">{{ title }}
        <span v-for="tag in tags" :key="tag" class="badge mx-2">{{ tag }}</span>
      </h1> 
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      <div class="justify-end card-actions">
        <router-link :to="{ name: routeKey }">
          <button class="btn btn-primary">
               read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">  
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>                        
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { attrs }) {
    const { title, routeKey, tags } = attrs;

    return {
      title,
      routeKey,
      tags,
    };
  },
};
</script>
