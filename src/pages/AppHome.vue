<script>
    export default {
        name: 'AppHome',

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div class="conteiner-md my-3 rounded">
        <div class="row justify-content-center">
            <div class="col text-center"><h1>Organizza la tua prossima serata</h1></div>
        </div>
    </div>
   <div class="container-md rounded">
        <div class="row justify-content-center">
            <div class="col-10">
                <div id="carouselExampleAutoplaying" class="carousel slide rounded" data-bs-ride="carousel">
                    <div class="carousel-inner rounded">
                        <div class="carousel-item active position-relative">
                            <img src="https://www.drcommodore.it/wp-content/uploads/2022/03/Rufy-1043-1.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Rufy</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            <div class="carousel-caption d-md-none">
                                <h6>Rufy</h6>
                                <div class="d-flex justify-content-between" >
                                    <span><a href="#">Leningrad</a></span>
                                    <span>22/05/1992</span>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.drcommodore.it/wp-content/uploads/2024/02/zoro.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Zoro</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://multiplayer.net-cdn.it/thumbs/images/2024/08/13/one-piece-nami-1_jpg_1376x774_crop_q85.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Nami</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/it/thumb/1/19/Usop.png/1200px-Usop.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Usopp</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.staynerd.com/wp-content/uploads/2021/11/sanji-10.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Sanji</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/it/thumb/0/01/TonyTony_Chopper.png/1200px-TonyTony_Chopper.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Chopper</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/it/thumb/0/06/Nico_Robin.png/1200px-Nico_Robin.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Nico Robin</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://lh3.googleusercontent.com/proxy/YqCFv8HiuL_uHfv4k1zpWx2Co397xX1rKUVxE4eT4VsO1i1G1qFqktOzQXJRWw4TPZAMb-M7XR7ZTOz23P2Oe3tnFP4RkWkWf8BCbb_Q6Ko3Vb60QvbPng" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Franky</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/it/thumb/5/55/Brook.png/1200px-Brook.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Brook</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/split-images-of-jinbe.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Jinbe</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
   </div>
</template>

<style scoped lang="scss">
// .container-md{
//     background-color: aqua;
// }
.carousel-item {
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
}



@media only screen and (min-width: 992px) {
    .carousel-item {
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
        }
    }
}

@media only screen and (max-width: 576px) {
   .carousel-caption{
    position: absolute;
    top: 55%;
    text-align: start;
    // overflow-y: scroll;
    p{
        margin-bottom: 0;
    }
}
}
</style>