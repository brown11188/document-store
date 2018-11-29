<template>
  <form @submit.prevent="saveProduct">
    <div class="flex-col">
      <div class="flex">
        <div class="flex-col">
          <label>Name</label>
          <input type="text" v-model="model.name" name="name" placeholder="Name">
        </div>
        <div class="flex-col">
          <label>Image</label>
          <input type="text" v-model="model.image" name="image" placeholder="Image">
        </div>
      </div>
      <div class="flex">
        <div class="flex-col">
          <div class="flex-col">
            <label>Price</label>
            <input type="number" v-model="model.price" name="price" placeholder="Price">
          </div>
          <div class="flex-col">
            <label>Manufacturer</label>
            <select type="text" v-model="model.manufactuter" name="manufacturer">
              <template v-for="manufactuter in manufactuters">
                <option
                  :key="manufactuter.id"
                  :value="manufacturer.id"
                  :selected="manufacturer._id = (model.manufacturer && model.manufacturer._id)"
                >{{manufacturer.name}}</option>
              </template>
            </select>
          </div>
        </div>
        <div class="flex-col">
          <label>Description</label>
          <input
            type="text"
            v-model="model.description"
            name="description"
            placeholder="Description"
          >
        </div>
      </div>
      <div class="flex">
        <button class="buttom">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>

