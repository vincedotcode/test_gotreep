<style scoped>
.hero-bg {
  background-image: url("../assets/backgrounds/banner-add-establishment.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 34vh;
  width: 100%;
}
</style>
<style scoped src="../assets/css/variables.css">

</style>

<template>
  <div class="content">
    <section class="hero-bg d-flex align-items-center justify-content-center">
      <div class="hero-content"></div>
    </section>

    <section>
      <div class="container pt-3">
        <div class="card border-0 shadow p-2">
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <router-link to="/add-establishment">
             <div class="btn btn-primary">
              Login
            </div>
            </router-link>
           
          </form>
        </div>
      </div>
    </section>
  </div>
</template>