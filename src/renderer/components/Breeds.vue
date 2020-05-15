<template>
  <section>
    <h2>Home</h2>
    <div class="breeds">
      <div class="breed" v-for='breed in breeds' :key='breed.id'>
        <div class="breed-content">
          <p><strong>Name:</strong> {{ breed.name }}</p>
          <p v-if="breed.origin"><strong>Origin:</strong> {{ breed.origin }}</p>
          <p v-if="breed.life_span"><strong>Life Span:</strong> {{ breed.life_span }}</p>
          <p v-if="breed.breed_group"><strong>Breed Group:</strong> {{ breed.breed_group }}</p>
        </div>
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

<style lang='scss'>
  .breeds {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:15px;
    margin: 15px 0px;

    @media screen and (max-width:600px){
      grid-template-columns: repeat(1,1fr);
    }
    .breed {
      background-color:#FFF;
      box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
      padding:50px;
      &:hover {
        box-shadow: 0px 3px 8px 6px rgba(235,200,5,0.5)
      }
    }
  }
</style>
