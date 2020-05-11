<template>
  <section>
    <h2>Home</h2>
    <div class="breeds">
      <div class="breed">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Breeds',
    components: {  },
    data () {
      return {
        breeds: []
      }
    },
    methods: {
      getBreeds () {
        this.$http.get('https://api.thedogapi.com/v1/breeds' , {
          headers: {
            'x-api-key': '82b42407-90bc-4334-9fae-1987aeb07672'
          }
        }).then(data => {
          console.log(data);
          this.breeds = data.data
        })
      }
    },
    created () {
      this.getBreeds()
    }
  }
</script>

<style>

</style>
