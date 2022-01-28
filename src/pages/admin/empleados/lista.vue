<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-content>
            <table class="table" id="datatable">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Número de Identificación</th>
                  <th>Username</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products" :key="item.id">
                  <td>{{item.nombres}}</td>
                  <td>{{item.apellidos}}</td>
                  <td>{{item.num_identificacion}}</td>
                  <td>{{item.username}}</td>
                  <td>
                    <va-button style="margin-right: 0;" small @click="editar(item.id)">
                      <i class="glyphicon glyphicon-pencil va-icon glyphicon glyphicon-pencil" aria-hidden="true" notranslate="" style="font-size: 30px;"></i>
                    </va-button>
                  </td>
                </tr>
                
              </tbody>
            </table>    
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
  <div class="loader" id="loader-1" v-if="!isLoading"></div>
</template>
<script>
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import axios from 'axios';
import $ from 'jquery'; 

export default {
  mounted(){
    debugger;
    this.isLoading = false;
    axios
    .get("https://test-oskrgl.azurewebsites.net/pruebaOnelinkAdminAPI/api/SaveEmpleado/GetEmpleados")
    .then((response)=>
    {
      debugger;
      this.products = response.data.data;
      this.isLoading = true;
      setTimeout($('#datatable').DataTable(), 800);
    })
  },
  data: function() {
        return {
            products:[],
            isLoading:true
        }
  },
  methods: {
    editar(id) {
      this.$router.push({name:'editar',params:{idEmpleado:id}});
    },
  }
}
</script>
<style>
table.dataTable tbody th, table.dataTable tbody td{
  text-align: center;
}
</style>
<style>
  .row.row-inside {
    max-width: none;
  }

  .va-input-wrapper, fieldset {
    margin-bottom: 0.5rem;
  }
  /* ALL LOADERS */

  .loader{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
  }
  /* LOADER 1 */

  #loader-1:before, #loader-1:after{
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: #3498db;
  }

  #loader-1:before{
    z-index: 100;
    animation: spin 1s infinite;
  }

  #loader-1:after{
    border: 10px solid #ccc;
  }

  @keyframes spin{
    0%{
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100%{
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
