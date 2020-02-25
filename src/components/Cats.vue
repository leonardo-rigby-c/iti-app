<template lang="html">
  <div class="row">
    <div class="col-lg-12 text-center">
      <strong class="text-dark">| Cats</strong>
    </div>
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-3">
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-3 " v-for="cat in cats" :key="cat.id">
                <img :src="cat.url" @click="selectCat(cat)" alt="" data-toggle="modal" data-target="#myModal">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <button type="button" @click="getMoreCats" class="btn btn-secondary btnmorecats" name="button">Mostrar mas</button>
        </div>
      </div>
      <div class="row">
        <!-- The Modal -->
        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <!-- Moda body -->
              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <img :src="url" class="modalcatimg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      cats: [],
      count: 0,
      cantidad: 12,
      url: null
    }
  },
  created() {
    this.getCats();
  },
  methods: {
    // var cou = 3;
    getCats() {
      this.count = this.cantidad;

      axios.get('https://api.thecatapi.com/v1/images/search?limit=' + this.count).then((response) => {
        console.log(response.data);
        for(var i=0;i<response.data.length;i++){
          this.cats.push(response.data[i]);
        }
        console.log(this.cats);
      });
    },
    getMoreCats() {
      console.log("more");
      var total = this.count + this.cantidad;
      axios.get('https://api.thecatapi.com/v1/images/search?limit=' + total).then((response) => {
        for(var i=0;i<response.data.length;i++){
          this.cats.push(response.data[i]);
        }
      });
    },
    selectCat(cat) {
      this.url = cat.url;
    }
  }
}
</script>

<style lang="css" scoped>
.divimg{
  margin-bottom: 3px;
  padding-right: 9px;
}
img{
  width: 150px;
  height: 150px;
}
.modalcatimg{
  width: 100%;
  height: 300px;
}
input{
  width: 30%;
}
.btnmorecats{
  margin-top: 9px;
}
</style>
