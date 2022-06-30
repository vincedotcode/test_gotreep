<style scoped>
/* -----------------------NAVBAR CSS--------------------------- */

.navbar {
  color: #707070;
  background-color: white;
  font-size: 17px;
  font-weight: 300;
}

.navbar a {
  color: #707070;
}

.navbar-brand img {
  width: 150px;
  height: 100%;
}

.navbar-toggler {
  border: none;
  width: 30px;
}

.navbar-toggler-icon {
  width: 30px;
}

.mid-nav-text {
  font-weight: 600;
}
/* -----------------------NAVBAR MEDIA QUERIES CSS--------------------------- */
@media (min-width: 992px) {
  .navbar {
    padding: 0 150px 0 150px;
  }
  .nav-item a {
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  .mid-nav-text {
    display: none;
  }
  .navbar-brand {
    margin: 0 auto;
  }
  .navbar-brand img {
    width: 100px;
  }
}
</style>

<template>
  <!-----------------------------------------Navbar start--------------------------------------->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/"><a class="navbar-brand">
      <img src="../assets/logo/logo-edit.png" alt="gotreep" />
    </a></router-link>
    <div class="mid-nav-text">
      <p class="pt-3">Travel Greener</p>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
          <!----------------------------------Navbar Router start--------------------------------------->
        <li class="nav-item">
          <router-link to="/flight"
            ><a class="nav-link" href="#">FLIGHT</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/accomodation"
            ><a class="nav-link" href="#">ACCOMODATION</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/travel-idea"
            ><a class="nav-link" href="#">TRAVEL IDEA</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/gotreep"
            ><a class="nav-link" href="#">GOTREEP</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login-app"
            ><a class="nav-link" href="#"
              >ADD YOUR ESTABLISHMENT</a
            ></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contact"
            ><a class="nav-link" href="#">CONTACT</a></router-link
          >
        </li>
      </ul>
      <!----------------------------------Navbar Router END--------------------------------------->
    </div>
  </nav>
<!----------------------------------Navbar END--------------------------------------->
</template>

<script>
export default {
  name: "NavigationView",
};
</script>