<template>
  <section>
    <div class="header bg-gray">
      <h3 class="font-normal p-2 text-white">
        DETAILED INFORMATION ON THE ESTABLISHMENT
      </h3>
    </div>
    <div class="card mb-5">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-4">
              <div class="numbers-row">
                <label for="rooms">Number of rooms</label><br />
                <label for="name">{{ counter1 }}</label
                ><br />
                <button @click="decrementValue1" class="button-reset">-</button>
                <button @click="incrementValue1" class="button-reset">+</button>
              </div>
            </div>
            <div class="col-4">
              <div class="numbers-row">
                <label for="pools">Number of pools</label><br />
                <label for="name">{{ counter2 }}</label
                ><br />
                <button @click="decrementValue2" class="button-reset">-</button>
                <button @click="incrementValue2" class="button-reset">+</button>
              </div>
            </div>
            <div class="col-4">
              <div class="numbers-row">
                <label for="restaurants">Number of restaurants</label><br />
                <label for="name">{{ counter3 }}</label
                ><br />
                <button @click="decrementValue3" class="button-reset">-</button>
                <button @click="incrementValue3" class="button-reset">+</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <p>Children allowed</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
            <div class="col-4">
              <p>Spoken Languages</p>
              <select>
                <option value="Option 1">First Option</option>
                <option value="Option 2">2nd Option</option>
                <option value="Option 3">Option Number 3</option>
              </select>
            </div>
            <div class="col-4">
              <p>Pets</p>
              <input id="toggle-on" name="toggle3" type="radio" />
              <label for="toggle-on">Admitted</label>
              <input id="toggle-off" name="toggle3" type="radio" />
              <label for="toggle-off">Rejected</label>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-6">
              <p>Breakfast</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
            <div class="col-6">
              <p>Child Formula</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p>Half Board</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
            <div class="col-6">
              <p>Welcome Basket</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p>Full board</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
            <div class="col-6">
              <p>Refrigirator filled on request</p>
              <input id="toggle-on" name="toggle1" type="radio" />
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle1" type="radio" />
              <label for="toggle-off">No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>Guest Table</p>
              <select>
                <option value="Option 1">First Option</option>
                <option value="Option 2">2nd Option</option>
                <option value="Option 3">Option Number 3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <p>Pictures of establishment</p>
              <div>
                <img
                  src="../../../assets/picture_card.png"
                  alt=""
                  style="box-shadow: 0 2px 6px #85868a !important"
                />
                <form action="#" class="js">
                  <div class="input-file-container">
                    <input class="input-file" id="my-file" type="file" />
                    <label tabindex="0" for="my-file" class="input-file-trigger"
                      >Upload a file</label
                    >
                  </div>
                  <p class="file-return"></p>
                </form>
              </div>
            </div>
            <div class="col-12">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="../../../assets/backgrounds/background-main.png"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../../../assets/backgrounds/background-main.png"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../../../assets/backgrounds/background-main.png"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only"> - </span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailedInformation',
};
</script>
