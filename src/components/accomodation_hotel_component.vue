<style scoped>
.input-file-container {
  position: relative;
  width: 225px;
} 
.js .input-file-trigger {
  display: block;
  padding: 14px 45px;
  background: var(--pink);
  color: #fff;
  font-size: 1em;
  transition: all .4s;
  cursor: pointer;
}
.js .input-file {
  position: absolute;
  top: 0; left: 0;
  width: 225px;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
}
.js .input-file:hover + .input-file-trigger,
.js .input-file:focus + .input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
  background: #34495E;
  color: var(--white);
}
</style>



<template>
  <section>
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
                <img src="../assets/picture_card.png" alt="" style="box-shadow: 0 2px 6px #85868a !important;">
                <form action="#" class="js">
                    <div class="input-file-container">  
                        <input class="input-file" id="my-file" type="file">
                        <label tabindex="0" for="my-file" class="input-file-trigger">Upload a file</label>
                    </div>
                    <p class="file-return"></p>
                </form>

              </div>
            </div>
            <div class="col-12">
               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"> - </span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">+</span>
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-5">
            <p>Describe your institution in less than 100 words</p>
        </div>
        <div class="col-7">
            <textarea name="" id="" cols="50" rows="10"></textarea>
        </div>
    </div>
    <div class="card mb-5">
      <div class="row">
        <div class="col-9">
            <div class="row">
                <div class="col-3">
                    <p>Types of accomodation</p>
                    <select>
                        <option value="Option 1">First Option</option>
                        <option value="Option 2">2nd Option</option>
                        <option value="Option 3">Option Number 3</option>
                    </select>
                </div>
                <div class="col-3">
                    <p>Category</p>
                    <select>
                        <option value="Option 1">First Option</option>
                        <option value="Option 2">2nd Option</option>
                        <option value="Option 3">Option Number 3</option>
                    </select>
                </div>
                <div class="col-3">
                    <p>Name of accomodation</p>
                    <input type="text" placeholder="ex: deluxe room">
                </div>
                <div class="col-3">
                    <p>View</p>
                    <input type="text" placeholder="ex: Sea View">
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p>Superficie</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Ex. 12</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">m2 / Ft2</label>
                </div>
                <div class="col-3">
                    <p>Nombre de pièces</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard }}</label
                        ><br />
                        <button @click="decrementValueNextCard" class="button-reset">-</button>
                        <button @click="incrementValueNextCard" class="button-reset">+</button>
                    </div>
                </div>
                <div class="col-3">
                    <p>Capacité d’accueil</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard2 }}</label
                        ><br />
                        <button @click="decrementValueNextCard2" class="button-reset">-</button>
                        <button @click="incrementValueNextCard2" class="button-reset">+</button>
                    </div>
                </div>
                <div class="col-3">
                    <p>Chambres communicantes possible</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p>Lit Simple</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard3 }}</label
                        ><br />
                        <button @click="decrementValueNextCard3" class="button-reset">-</button>
                        <button @click="incrementValueNextCard3" class="button-reset">+</button>
                    </div>
                </div>
                <div class="col-3">
                    <p>Lit double</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard4 }}</label
                        ><br />
                        <button @click="decrementValueNextCard4" class="button-reset">-</button>
                        <button @click="incrementValueNextCard4" class="button-reset">+</button>
                    </div>
                </div>
                <div class="col-3">
                    <p>KingSize</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard5 }}</label
                        ><br />
                        <button @click="decrementValueNextCard5" class="button-reset">-</button>
                        <button @click="incrementValueNextCard5" class="button-reset">+</button>
                    </div>
                </div>
                <div class="col-3">
                    <p>Lit superposé</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard6 }}</label
                        ><br />
                        <button @click="decrementValueNextCard6" class="button-reset">-</button>
                        <button @click="incrementValueNextCard6" class="button-reset">+</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p>Autres</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard7 }}</label
                        ><br />
                        <button @click="decrementValueNextCard7" class="button-reset">-</button>
                        <button @click="incrementValueNextCard7" class="button-reset">+</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p>Baignoires</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
                <div class="col-3">
                    <p>Douche</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
                 <div class="col-3">
                    <p>Terrasse / balcony</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
                <div class="col-3">
                    <p>Jardin privatif</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <p>Piscine privée</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
                <div class="col-3">
                    <p>Jacuzzi</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
                <div class="col-3">
                     <p>Fumeur</p>
                    <input id="toggle-on" name="toggle1" type="radio" />
                    <label for="toggle-on">Yes</label>
                    <input id="toggle-off" name="toggle1" type="radio" />
                    <label for="toggle-off">No</label>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <p>Description</p>
                </div>
                <div class="col-4">
                    <p>Nb. de logements de ce type</p>
                    <div class="numbers-row">
                        <label for="name">{{ counterNextCard8 }}</label
                        ><br />
                        <button @click="decrementValueNextCard8" class="button-reset">-</button>
                        <button @click="incrementValueNextCard8" class="button-reset">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="row">
                <div class="col-12">
                    <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/backgrounds/background-main.png" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"> - </span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">+</span>
                </a>
                </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    <div class="section">
        <div class="row">
            <div class="col-5">
                <p>Describe your institution in less than 100 words</p>
            </div>
            <div class="col-7">
                <textarea name="" id="" cols="50" rows="10"></textarea>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            
        </div>
    </div>
    <div class="card">
        <div class="row">
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h5>CONDITIONS D’ANNULATION</h5>
                        <p>Combien de jours avant leur arrivée les clients peuvent-ils annuler?</p>
                        <input id="toggle-on" name="toggle1" type="radio" />
                        <label for="toggle-on">1 Day</label>
                        <input id="toggle-off" name="toggle1" type="radio" />
                        <label for="toggle-off">7 Day</label>
                        <input id="toggle-off" name="toggle1" type="radio" />
                        <label for="toggle-off">14 Day</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h5>Non-refundable Price</h5>
                        <p>Would you like to apply</p>
                        <input id="toggle-on" name="toggle1" type="radio" />
                        <label for="toggle-on">Yes</label>
                        <input id="toggle-off" name="toggle1" type="radio" />
                        <label for="toggle-off">No</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <p>If yesy, indicate percentage price change</p>
                    </div>
                    <div class="col-6">
                        <input type="text" placeholder="%change">
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h3>Customers Method of Payment</h3>
                        <p>Any reservation</p>
                    </div>
                    <div class="col-12">
                        <ol>
                            <li>
                                Le client réserve sur gotreep Le client réserve dans votre établissement via gotreep avec sa carte de crédit ou un autre moyen de paiement
                            </li>
                            <li>
                                2. Gotreep coordonne le paiement le client est débité selon nos conditions, et nous nous assurerons que le montant total de la réservation a été réglé avant son arrivée dans votre établissement
                            </li>
                        </ol>
                    </div>
                    <div class="col-12">
                        <p>Commission</p>
                        <input type="text" placeholder="Commission">
                    </div>
                </div>
            </div>
            <div class="col-4">
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AccomodationHotelComponent",

  methods: {
    incrementValue1() {
      this.counter1++;
    },
    decrementValue1() {
      this.counter1--;
    },
    incrementValue2() {
      this.counter2++;
    },
    decrementValue2() {
      this.counter2--;
    },
    incrementValue3() {
      this.counter3++;
    },
    decrementValue3() {
      this.counter3--;
    },
     incrementValueNextCard() {
      this.counterNextCard++;
    },
    decrementValueNextCard() {
      this.counterNextCard--;
    },
     incrementValueNextCard2() {
      this.counterNextCard2++;
    },
    decrementValueNextCard2() {
      this.counterNextCard2--;
    },
    incrementValueNextCard3() {
      this.counterNextCard3++;
    },
    decrementValueNextCard3() {
      this.counterNextCard3--;
    },
     incrementValueNextCard4() {
      this.counterNextCard4++;
    },
    decrementValueNextCard4() {
      this.counterNextCard4--;
    },
     incrementValueNextCard5() {
      this.counterNextCard5++;
    },
    decrementValueNextCard5() {
      this.counterNextCard5--;
    },
     incrementValueNextCard6() {
      this.counterNextCard6++;
    },
    decrementValueNextCard6() {
      this.counterNextCard6--;
    },
    incrementValueNextCard7() {
      this.counterNextCard7++;
    },
    decrementValueNextCard7() {
      this.counterNextCard7--;
    },
    incrementValueNextCard8() {
      this.counterNextCard8++;
    },
    decrementValueNextCard8() {
      this.counterNextCard8--;
    },
  },
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counterNextCard: 0,
      counterNextCard2: 0,
      counterNextCard3: 0,
      counterNextCard4: 0,
      counterNextCard5: 0,
      counterNextCard6: 0,
      counterNextCard7: 0,
      counterNextCard8: 0,
    };
  },
};
</script>



