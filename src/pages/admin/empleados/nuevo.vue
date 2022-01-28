<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('forms.inputs.title')">
          <va-card-content>
            <form>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12">
                  <va-input
                    v-model="nombres"
                    label="Ingrese los nombres del empleado"
                    placeholder="Ingrese los nombres del empleado"
                  />
                </div>
              </div>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12">
                  <va-input
                    v-model="apellidos"
                    label="Ingrese los apellidos del empleado"
                    placeholder="Ingrese los apellidos del empleado"
                  />
                </div>
              </div>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12">
                  <va-input
                    v-model="numIdentificacion"
                    label="Ingrese número de identificació del empleado"
                    placeholder="Ingrese número de identificació del empleado"
                  />
                </div>
              </div>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12">
                  <va-input
                    v-model="username"
                    label="Ingrese el usuario"
                    placeholder="Ingrese el usuario"
                  />
                </div>
              </div>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12">
                  <va-input
                    v-model="cargo"
                    label="Ingrese el cargo"
                    placeholder="Ingrese el cargo"
                  />
                </div>
              </div>
              <div class="row">
                <div class="flex md3 sm12 xs12"></div>
                <div class="flex md6 sm12 xs12 text-center">
                  <va-button style="margin-right: 0;" small @click="guardar">
                    GUARDAR
                  </va-button>
                </div>
              </div>
            </form>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nuevo',
  data () {
    return {
      numIdentificacion: 0,
      nombres: "",
      apellidos: "",
      username: "",
      password: "",
      isActive: 0,
      isAdmin: 0,
      tipo: 0,
      estado: "",
      cargo: ""
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
    guardar() {
      const res = this.guardar2();
      console.log(res);
    },

    async guardar2() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          numIdentificacion: this.numIdentificacion,
          nombres: this.nombres,
          apellidos: this.apellidos,
          username: this.username,
          password: this.password,
          isActive: this.isActive,
          isAdmin: this.isAdmin,
          tipo: this.tipo,
          estado: this.estado,
          cargo: this.cargo })
      };
      fetch('https://test-oskrgl.azurewebsites.net/pruebaOnelinkAdminAPI/api/SaveEmpleado/Save', requestOptions)
        .then(async response => {
          const data = await response.json();
          console.log(data);
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          this.$vaToast.init({
            message: 'Empleado guardado con éxito',
            iconClass: 'fa-star-o',
            position: 'bottom-right',
            duration: 2500,
            fullWidth: false,
          })
          debugger;
          setTimeout(this.$router.push({name:'dashboard',params:{}}), 8000);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error('There was an error!', error);
        });
    },
  },
}
</script>

<style>
  .row.row-inside {
    max-width: none;
  }

  .va-input-wrapper, fieldset {
    margin-bottom: 0.5rem;
  }
</style>
