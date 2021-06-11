<template>
  <section class="src-componentes-notas">
    <table class="table">
      <thead>
        <th>Pregunta</th>
        <th>Respuesta</th>
      </thead>
      <tbody>
        <tr v-for="(respuesta, index) in respuestas" :key="index">
          <td>{{ respuesta.numero }}</td>
          <td>
            {{ respuesta.respuestas.join(", ")}}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
            { numero: 1, respuestas: ["C"] },
            { numero: 2, respuestas: ["C"] },
            { numero: 3, respuestas: ["A", "B"] },
        ]
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.src-componentes-notas {
}
</style>
