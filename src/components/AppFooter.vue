<script>
    export default {
        name: 'AppFooter',
        

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col my-3 d-flex align-items-center">
            <div class="fs-6 text-light" >
                Developed by Lorenzo Monteforte
            </div>
        </div>
        <div class="col my-3 d-flex align-items-center justify-content-end">
          <ul class="d-flex justify-content-end" >
                <li>
                    <a href="#" class="rounded-circle" ><i class="fab fa-facebook-f icon"></i></a>
                </li>
                <li>
                    <a href="#" class="rounded-circle" ><i class="fab fa-twitter icon"></i></a>
                </li>
                <li>
                    <a href="#" class="rounded-circle" ><i class="fab fa-linkedin-in icon"></i></a>
                </li>
                <li>
                    <a href="#" class="rounded-circle" ><i class="fab fa-google-plus-g icon"></i></a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .container-fluid{
    background-color: #141324;
 }

 ul {
  margin-bottom: 0;
  li {
  list-style: none;
}
}


ul li a {
  width: 7vw;  /* Base per mobile (grandezza cerchi per schermi piccoli) */
  height: 7vw;
  background-color: #fff;
  text-align: center;
  line-height: 6.9vw;  /* Centrato verticalmente */
  font-size: 3vw;  /* Font-size per icone su schermi piccoli */
  margin: 0 1vw;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 0.1vw solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: .5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: .5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before{
  background: #3b5999;
}

ul li:nth-child(2) a:before{
  background: #55acee;
}

ul li:nth-child(3) a:before {
  background: #0077b5;
}

ul li:nth-child(4) a:before {
  background: #dd4b39;
}

/* Media Queries per dispositivi più grandi (tablet e desktop) */

@media (min-width: 576px) {
  ul li a {
    width: 12vw;   /* Ridimensionamento per tablet */
    height: 12vw;
    line-height: 12vw;
    font-size: 3.5vw;
  }
}

@media (min-width: 768px) {
  ul li a {
    width: 4vw;  /* Ridimensionamento per tablet più grandi e piccoli desktop */
    height: 4vw;
    line-height: 3.9vw;
    font-size: 2vw;
    border: 0.1vw solid #fff;
  }
}

@media (min-width: 992px) {
  ul li a {
    ul li a {
    width: 4vw;  /* Ridimensionamento per tablet più grandi e piccoli desktop */
    height: 4vw;
    line-height: 3.9vw;
    font-size: 2vw;
    border: 0.1vw solid #fff;
  }
  }
}

@media (min-width: 1200px) {
  ul li a {
    width: 2vw;  /* Ridimensionamento per schermi molto grandi */
    height: 2vw;
    line-height: 1.9vw;
    font-size: 1vw;
    border: 0.1vw solid #fff;

  }
}

</style>