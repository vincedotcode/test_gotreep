<style scoped >
.hero-bg {
  background-image: url("../assets/backgrounds/banner-add-establishment.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 34vh;
  width: 100%;
}

.card-mini{
  width: 132px;
  height: 132px;
}
.information{
  padding: 0 400px;
}
.switch {
	position: relative;
	display: inline-block;
	width: 150px;
	height: 40px;
	margin: 20px;
}
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}
.slider {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	color: var(--gray);
	font-size: 13px;
  font-weight: 600;
	border-radius: 20px;
	transition: all 250ms ease;
  box-shadow: 0 2px 6px #85868a;
}
input:checked + .slider {
  background-color: var(--pink);
	color: white;
}
/*RADIO */
.switch-2 {
	position: relative;
	display: inline-block;
	width: 150px;
	height: 40px;
	margin: 20px;
}
.switch-2 input {
	opacity: 0;
	width: 0;
	height: 0;
}
.slider-2 {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: white;
	color: var(--gray);
	font-size: 13px;
  font-weight: 600;
	border-radius: 20px;
	transition: all 250ms ease;
  box-shadow: 0 2px 6px #85868a;
}
input:checked + .slider-2 {
  background-color: var(--green);
	color: white;
}


.input{
  border: 0;
  box-shadow: 0 2px 6px #85868a;
  border-radius: 15px;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  color: var(--gray);
}
.input input:focus-visible{
  border: 0;
}
::placeholder {
  text-align: center;
}

</style>
<style scoped src="../assets/css/variables.css">

</style>



<template>
  <div class="content">
    <section class="hero-bg d-flex align-items-center justify-content-center">
      <div class="hero-content"></div>
    </section>

    <!-- 3 Main Card -->
    <section class="content-main d-flex justify-content-center">
      <div class="row m-0 d-flex justify-content-center px-5 pt-4">
        <div class="col-4">
          <div class="card shadow-card d-flex justify-content-center border-0 p-3 card-mini" @click="getCategories('hotel'); setSelectedOption('hotel');">
            <img src="../assets/images/add-est-icon/Hotel_guest room1_pink.png" alt="hotel" height="100%" width="100px">
          </div>
        </div>
        <div class="col-4">
          <div class="card shadow-card d-flex justify-content-center border-0 p-3 card-mini" @click="getCategories('app'); setSelectedOption('appartment');">
            <img src="../assets/images/add-est-icon/apartment_pink.png" alt="apartment" width="100%">
          </div>
        </div>
        <div class="col-4">
          <div class="card shadow-card d-flex justify-content-center border-0 p-3 card-mini" @click="getCategories('atypical'); setSelectedOption('atypical');">
            <img src="../assets/images/add-est-icon/Atypical_pink.png" alt="atypical" width="100%">
          </div>
        </div>
      </div>
    </section>
    <section class="information pt-5">
      <HotelComponent v-if="selectedOption === 'hotel'" />
      <AppartmentComponent v-if="selectedOption === 'appartment'" />
      <AtypicalComponent v-if="selectedOption === 'atypical'" />

      <div class="header bg-pink" v-for= "header in generalHeader" :key="header.id">
        <h3 class="font-normal p-2 text-white">GENERAL INFORMATION {{header.title}}</h3>     
      </div>
      <p class="text-pink" v-for= "header in generalHeader" :key="header.id">In which category is your {{header.content}} located?</p>

      <div class="row">
        <div class="col-12">
          <div class="card card-category shadow d-block border-0">
            <label class="switch" v-for= "category in selectedCategories" :key="category.id">
              <input type="checkbox">
              <span class="slider" @click="setAccCategory(category.id)">{{category.title}}</span>
            </label>
          </div>
        </div>
      </div>
       <p class="text-green pt-2">Is your location eco-friendly ?</p>

       <div class="row">
        <div class="col-12">
          <div class="card card-category shadow d-block border-0">
            <div class="row">
              <div class="col-4 d-inline">
                <div class="row">
                  <div class="col-6">
                    <label class="switch-2">
                      <input type="radio" checked>
                      <span class="slider-2">Yes</span>
                    </label>
                  </div>
                  <div class="col-6">
                     <label class="switch-2">
                        <input type="radio">
                        <span class="slider-2">No</span>
                      </label>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-9">
                    <p class="text-green font-small">What label has your establishment received?</p>
                  </div>
                  <div class="col-3 d-flex justify-content-end align-items-center">
                    <select>
                      <option value="Option 1">First Option</option>
                      <option value="Option 2">2nd Option</option>
                      <option value="Option 3">Option Number 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-4 d-flex justify-content-end align-items-center">
                <label class="checkbox">
                  <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" class="text-gray"> We don't have a label yet!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-green pt-2" v-for= "header in generalHeader" :key="header.id">General information about your {{header.est}}</p>
      <div class="row">
        <div class="col-12">
          <div class="card card-category shadow d-block border-0 ">
            <div class="form-group p-1">
              <input class="input mx-2" placeholder="Name of institution">
              <input class="input mx-2" placeholder="Number of stars">
              <input class="input mx-2" placeholder="Street Name">
              <input class="input mx-2" placeholder="Number">
              <input class="input mx-2" placeholder="Postal Code">
              <input class="input mx-2" placeholder="City">
              <input class="input mx-2" placeholder="Country">
            </div>
            
          </div>
        </div>
      </div>
      <p class="text-green pt-2" v-for= "header in generalHeader" :key="header.id">Contact information about your {{header.est}}</p>
      <div class="row">
        <div class="col-8">
          <div class="card card-category shadow d-block border-0 " style="height: 50px;">
            <div class="form-group p-1">
              <input class="input mx-2" placeholder="Contact Name">
              <input class="input mx-2" placeholder="Phone Number">
              <input class="input mx-2" placeholder="Email Address">
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              
            </div>
            <div class="col-12">
              <p class="text-gray"> If yes, indicate the name of the channel manager</p>
              <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <DetailedInformation />
        </div>
      </div>
       


    </section>
  </div>
</template>



<script>
import DetailedInformation from "../components/add_accomodation_components/hotel_components/detailed_information.vue";
    export default {
      name: "add-establishment",

      components: {
        DetailedInformation,
        HotelComponent: () => import('./testComponents/hotel.component.vue'),
        AppartmentComponent: () => import('./testComponents/appartment.component.vue'),
        AtypicalComponent: () => import('./testComponents/atypical.component.vue'),
      },
        data() {
          
          return {
            selectedOption: 'hotel',

            //HEADER TITLE CONTENT START
            counter1: 0,
            counter2: 0,
            counter3: 0,
            generalHeader: [],
            header: [
              {
                title: "ABOUT THE FACILITY",
                content: "hotel",
                est: "institution",
                type: "hotel"
              },
              {
                title: "ON HOUSING",
                content: "home",
                est: "establishment",
                type: "app"
              },
              {
                title: "HOUSING",
                content: "home",
                est: "establishment",
                type: "atypical"
              }
            ],
             //HEADER TITLE CONTENT END

             //CATEGORY CHECKBOX BUTTON START
            selectedCategories:[],
            categories: [
              {
                id: 1,
                title: "hotel",
                type:'hotel'
              },
              {
                id: 1,
                title: "Palace",
                type:'hotel'
              },
              {
                id: 1,
                title: "Apartment Hotel",
                type:'hotel'
              },
              {
                id: 1,
                title: "Hotel Capsule",
                type:'hotel'
              },
              {
                id: 2,
                title: "Apartment",
                type:'app'
              },
              {
                id: 2,
                title: "House",
                type:'app'
              },
              {
                id: 2,
                title: "Semi-detached house",
                type:'app'
              },
              {
                id: 2,
                title: "Townhouse",
                type:'app'
              }
            ],

             //CATEGORY CHECKBOX BUTTON END

            //GENERAL INFORMATION ABOUT YOUR INSTITUTION START
            selectedInformation:[],
            information: [
              {
                id: 1,
                title: "hotel",
                type:'hotel'
              },
              {
                id: 1,
                title: "Palace",
                type:'hotel'
              },
              {
                id: 1,
                title: "Apartment Hotel",
                type:'hotel'
              },
              {
                id: 1,
                title: "Hotel Capsule",
                type:'hotel'
              },
              {
                id: 2,
                title: "Apartment",
                type:'app'
              },
              {
                id: 2,
                title: "House",
                type:'app'
              },
              {
                id: 2,
                title: "Semi-detached house",
                type:'app'
              },
              {
                id: 2,
                title: "Townhouse",
                type:'app'
              }
            ],

            selectedInstitution: [],
            institutions: [
              {
                id: 2,
                title: "CHECK CHECK",
                type:'hotel'
              }
            ]
            ,selectedCategory: ''
          }
        },
        methods: {
          setSelectedOption: function (value) {
            this.selectedOption = value;
          },

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
        getCategories: function (name) {

          //HEADER JS 
          this.generalHeader = this.header.filter((item) => {
            return item.type.toLowerCase() == name.toLowerCase();
          });



          this.selectedCategories = this.categories.filter((item) => {
            return item.type.toLowerCase() == name.toLowerCase();
          });
          this.selectedInstitution = this.institutions.filter((item) => {
            return item.type.toLowerCase() == name.toLowerCase();
          });


        }
        ,setAccCategory(categoryId) {
          this.selectedCategory = categoryId;

          console.log(this.selectedCategory)

        }
  },
  mounted() {
    this.getCategories('hotel');
      },
        computed :{
     
     
   }
    }
</script>










<!-- <ul>
        <li v-for= "category in selectedCategories" :key="category.id">
          {{category.title}}
        </li>
      </ul>
      <ul>
        <li v-for= "category in selectedInstitution" :key="category.id">
          {{category.title}}
        </li>
      </ul> -->
