<!-- ./src/pages/admin/New.vue -->
    <!-- @save-product:"addProduct" -->
<template>
<product-form 
    :model="model"
    :manufactuters="manufactuters"></product-form>
</template>

<script>
import ProductForm from '../../components/products/ProductForm.vue'
export default {
  data (){
    return {
      model: {},
      manufactuters: [
        {_id : '1', name : 'Samsung'},
        {_id : '2', name : 'Apple'}
      ]
    }
  },
  components:{
    'product-form' : ProductForm
  },
  methods:{
    addProduct(model){
      console.log('model', model);
    }
  }
}
</script>
