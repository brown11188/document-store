<!-- ./src/pages/admin/Index.vue -->
<template>
    <div class="admin-new flex-auto">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li class="admin-item"><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
    </div>
</template>

<style>
.admin-menu{
  margin-top: 20px;
}
.admin-menu li{
  background: #efdb06;
  border: 1px solid #dbc718;
  padding: 10px 0 5px 10px;
}
</style>
