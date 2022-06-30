<style scoped>
/* HeroSection */

.hero-bg {
  background-image: url("../assets/backgrounds/background-main.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: 100%;
}

/* HeroCard */

.hero-content .title {
  color: #5f5f5f;
}

.hero-content .card-main {
  width: 800px;
  border-radius: 0%;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  height: 45px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 8px;
  left: 16px;
  width: 30px;
}

.text-mini p {
  font-size: 15px;
  color: #35ba91;
  font-weight: 300;
  letter-spacing: 2px;
}

.search input::placeholder {
  text-align: center;
  font-size: 17px;
}
.card-layout {
  transition: 0.7s;
  text-decoration: none;
}
.card-layout a {
  text-decoration: none;
}
.card-layout:hover {
  background-color: #d2d2d268;
}
</style>



<template>
  <section class="hero-bg d-flex align-items-center justify-content-center">
    <div class="hero-content">
      <!----------------------------------HERO CARD START--------------------------------------->
      <div class="card border-0 shadow card-main d-none d-lg-block d-xl-block">
        <div class="card-body">
          <!----------------------------------CARD TITLE--------------------------------------->
          <div class="title text-center">
            <p>
              What if we
              <strong
                >all decrease<br />
                the carbon footprint</strong
              >
              of our travels <br /><strong
                >by planting trees / enlarging our forests</strong
              >?
            </p>
          </div>
          <!----------------------------------SEARCH BAR--------------------------------------->
          <div class="search-bar mb-4 px-5">
            <div class="search rounded-pill">
              <i class="fas fa-search"></i>
              <input
                type="text"
                class="form-control border-0 shadow rounded-pill"
                placeholder="Search Flight"
              />
            </div>
          </div>
          <!----------------------------------CARD SELECTION--------------------------------------->
          <div class="row">
            <div class="col-4">
              <div class="card border-0 shadow card-layout">
                <a href="#" data-toggle="modal" data-target="#flight">
                  <div class="img d-flex justify-content-center pt-2">
                    <img
                      src="../assets/images/icons/1.png"
                      alt="flights"
                      width="110px"
                    />
                  </div>
                  <div class="text-mini text-center pt-1">
                    <p>I WANT <br />A GREENER <br />FLIGHT</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-4">
              <div class="card border-0 shadow card-layout">
                <a href="#" data-toggle="modal" data-target="#accomodation">
                  <div class="img d-flex justify-content-center pt-2">
                    <img
                      src="../assets/images/icons/2.png"
                      alt="accomodation"
                      width="100px"
                    />
                  </div>
                  <div class="text-mini text-center pt-1">
                    <p>I WANT <br />A GREENER <br />ACCOMODATION</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-4">
              <div class="card border-0 shadow card-layout">
                <a href="#" data-toggle="modal" data-target="#idea">
                  <div class="img d-flex justify-content-center pt-2">
                    <img
                      src="../assets/images/icons/3.png"
                      alt="idea"
                      width="100px"
                    />
                  </div>
                  <div class="text-mini text-center pt-1">
                    <p>I WANT <br />A GREENER <br />TRAVEL IDEA</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!----------------------------------CARD SELECTION END--------------------------------------->
        </div>
      </div>
      <!----------------------------------HERO CARD END--------------------------------------->
    </div>

    <div
      class="modal fade"
      id="flight"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="flight">I want a greener flight</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<span class="form-label">Flying from</span>
										<input class="form-control" type="text" placeholder="City or airport">
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<span class="form-label">Flyning to</span>
										<input class="form-control" type="text" placeholder="City or airport">
									</div>
								</div>
							</div>
              <div class="col-md-12">
									<div class="form-group">
										<span class="form-label">Adults (18+)</span>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="accomodation"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="idea"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>