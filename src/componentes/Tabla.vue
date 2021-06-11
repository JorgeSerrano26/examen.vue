<template>
  <section class="src-components-tabla">
    <table class="table">
      <thead>
        <th>Nombre</th>
        <th>Nota</th>
      </thead>
      <tbody>
        <tr v-for="(alumno, index) in alumnos" :key="index">
          <td>{{ alumno.nombre + " " + alumno.apellido }}</td>
          <td>
            <span :class="setColor(alumno.nota)">{{ alumno.nota }}</span>
          </td>
        </tr>
        <tr>
          <td>Promedio</td>
          <td :color="setColor(promedio)"><span :class="setColor(promedio)">{{ promedio }}</span></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-tabla',
    props: ['alumnos', 'promedio'],
    mounted () {
    },
    methods: {
      setColor (nota){
        if(nota>=0 && nota<=3)
        {
          return "badge bg-danger"
        }
        else if(nota>3 && nota<=6)
        {
          return "badge bg-warning text-dark"
        }
        else {
            return "badge bg-success"
        }
      }
    },
    computed: {
    }
}
</script>
