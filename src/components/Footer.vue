<style scoped>
.footer-container {
    background-color: #F7F7F7;
    bottom: 0;
    position: fixed;
    width: 100%;

  }
  p, a, small{
      color: #707070;
      text-decoration: none;
      font-weight: 600;
  }
@media (max-width: 992px) {
  p , small {
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  p , small {
    font-size: 10px;
  }
}
</style>




<template>
     <!----------------------------------FOOTER STRART--------------------------------------->
  <footer>
    <div class="footer-container">
      <div class="row mx-0 ">
        <div class="col-6 pt-3">
          <small>&#9400; GoTreep 2022</small>
        </div>
        <div class="col-6 d-flex justify-content-end">
            <div class="legal pt-3 px-3">
                <router-link to="/legalnotice"><p>Legal Notice</p></router-link>
            </div>
            <div class="gcu pt-3">
                <router-link to="/GCU"><p>GCU</p></router-link>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: "FooterView",
};
</script>