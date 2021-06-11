<template>
  <section class="src-componentes-notas">
    <form autocomplete="off" novalidate @submit.prevent="enviar()">
      <!-- campo nombre -->
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          v-model.trim="formData.nombre"
          required
          minlength="3"
          maxlength="15"
        />
        <div
          v-if="
            (!formData.nombre || formData.nombre.length < 3 || formData.nombre.length > 15) && formDirty.nombre
          "
          class="alert alert-danger mt-1"
        >
          Este campo no cumple con los requisitos
        </div>
      </div>

      <!-- campo apellido -->
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          class="form-control"
          required
          v-model.trim="formData.apellido"
          minlength="3"
          maxlength="15"
        />
        <div
          v-if="
            (!formData.apellido || formData.nombre.apellido < 3 || formData.nombre.apellido > 15) && formDirty.apellido
          "
          class="alert alert-danger mt-1"
        >
          Este campo no cumple con los requisitos
        </div>
      </div>

      <!-- campo nota -->
      <div class="form-group">
        <label for="nota">nota</label>
        <input
          type="number"
          id="nota"
          class="form-control"
          v-model.number="formData.nota"
          required
          max="10"
          min="1"
        />
        <div
          v-if="
            (!formData.nota || formData.nombre.nota < 1) && formDirty.apellido
          "
          class="alert alert-danger mt-1"
        >
          Muy baja
        </div>
        <div
          v-if="
            (!formData.nota || formData.nombre.nota > 10 ) && formDirty.nota
          "
          class="alert alert-danger mt-1"
        >
          Muy alta
        </div>
      </div>
      <button class="btn btn-success my-3" type="submit">Enviar</button>
    </form>
    <Tabla v-bind:alumnos="alumnos" v-bind:promedio="promedio"  />
  </section>
</template>

<script lang="js">
import Tabla from './Tabla.vue';
  export default  {
    name: 'src-componentes-notas',
    components: {
      Tabla
    },
    props: [],
    mounted () {

    },
    data () {
      return {
          alumnos: [],
          formData : this.getInicialData(),
          formDirty : this.getInicialData(),
          promedio: 0
      }
    },
    methods: {
        enviar() {
            this.alumnos.push(this.formData);
            this.promedio = this.alumnos.reduce((acc, val) => acc+val.nota, 0) / this.alumnos.length;
            this.formData = this.getInicialData();
        },
        getInicialData() {
          return {
            nombre: '',
            apellido: '',
            nota: 0,
          }
      },
    },
    computed: {
    }
}
</script>
