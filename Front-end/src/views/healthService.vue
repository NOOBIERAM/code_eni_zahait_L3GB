<template>
    <div>
        <section class="section pb-0">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-7 text-center text-lg-left">
                        <h1 class="mb-4">Service de la santé</h1>
                        <p class="mb-4">Les services de santé jouent un rôle primordial dans la société et l’économie,
                            et
                            les soins de santé sont reconnus comme un droit humain fondamental indispensable pour
                            préserver
                            la sécurité et la santé des populations</p>

                    </div>
                    <div class="col-lg-4 d-lg-block d-none">
                        <img alt="healthCare" class="img-fluid" src="../assets/images/patient.jpg">
                    </div>
                </div>
            </div>
        </section>
        <!-- /banner -->

        <!-- topics -->
        <section class="section pb-0">
            <div class="container">
                <h2 class="section-title text-center">Services existants</h2>
                <div class="row d-flex justify-content-center">
                    <!-- topic -->
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
                        <div class="card match-height">
                            <div class="card-body">
                                <i
                                    class="card-icon ti-panel mb-4 mt-0 d-flex justify-content-center align-items-center"><img
                                        src="../assets/images/plus.png"></i>
                                <h6 class="card-title">Hôpitaux</h6>
                                <a href="#cardShow" class="stretched-link" @click="setServiceIndex(0)"></a>
                            </div>
                        </div>
                    </div>
                    <!-- topic -->
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
                        <div class="card match-height">
                            <div class="card-body">
                                <i
                                    class="card-icon ti-panel mb-4 mt-0 d-flex justify-content-center align-items-center"><img
                                        src="../assets/images/pill.png" width="40"></i>
                                <h6 class="card-title">Pharmacies de garde</h6>
                                <a href="#cardShow" class="stretched-link" @click="setServiceIndex(1)"></a>
                            </div>
                        </div>
                    </div>
                    <!-- topic -->
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 slide-right">
                        <div class="card match-height">
                            <div class="card-body">
                                <i
                                    class="card-icon ti-panel mb-4 mt-0 d-flex justify-content-center align-items-center"><img
                                        src="../assets/images/ambu.png" width="40"></i>
                                <h6 class="card-title">Ambulances</h6>
                                <a href="#cardShow" class="stretched-link" @click="setServiceIndex(2)"></a>
                            </div>
                        </div>
                    </div>
                    <!-- topic -->

                </div>
            </div>
        </section>
        <!-- /topics -->

        <!-- faq -->
        <section id="cardShow" class="section pb-0">
            <div class="container">
                <ul class="d-flex justify-content-center text-center align-items-center mb-4">
                    <li class="me-4" v-for="(loc, index) of health" :key="index" @click="setServiceIndex(index)">
                        <p class="c-type nav-small" :class="{ 'text-primary ': locationIndex === index }">
                            {{ loc.service }}</p>
                    </li>
                </ul>
                <div class="d-flex">
                    <div class="me-5 col-3 ">

                        <ul class="p-0">
                            <li class=" c-type p-3 my-2 rounded slide-right-btn" v-for="(loc, index) of service" :key="index"
                                :class="{ 'bg-primary text-white': selectedIndex === index, 'bg-light bg-small': selectedIndex !== index }"
                                @click="setHospitalLocation(loc, index)"><span>{{ loc.location }}</span></li>
                        </ul>

                    </div>
                    <div class="col totox  rounded shadow-lg p-2">
                        <div v-if="loading" style="min-height: 250px;"
                            class=" d-flex justify-content-center align-items-center">
                            <div class="heart"></div>
                        </div>
                        <div v-else class="card-body">
                            <div>
                                <h3 class="card-title h4 mb-4">
                                </h3>
                                <ul class="ulList" v-for="(loc, index) of healthData" :key="index">
                                    <li class="card-text">{{ loc[0] }} <button v-if="loc[1]" class="btn btn-sm border-0 text-primary"
                                            @click="show(loc[1], loc[2])">Afficher</button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <div class="map-card rounded shadow-lg"
            :class="{ 'd-inlinine-block': showMap == true, 'd-none': showMap == false }">
            <div class="d-flex justify-content-center align-items-center">
                <p class="me-auto text-center flex-fill m-0">Carte</p>
                <button class="btn btn-sm btn-circle btn-dark text-center border-0" @click="showMap = false">x</button>
            </div>
            <div id="map" class="map d-flex justify-content-center align-items-center rounded shadow-lg">
                <div v-if="loadingMap" class="loader"></div>
            </div>
        </div>
    </div>
</template>


<script>
import { health } from '@/data';

export default {
    data() {
        return {
            isScrolled: false,
            scrollTitle: false,
            position: null,
            loading: true,
            showMap: false,
            loadingMap: true,
            health,
            location: '',
            selectedIndex: 0,
            healthData: [],
            donnee: {},
            serviceIndex: 0,
            service: [],
            locationIndex: 0
        }
    },
    watch: {
        locationIndex(value) {
            // console.log(health[value].donnees[0].data);
            this.healthData = health[value].donnees[0].data
        }
    },
    mounted() {
        // this.healthData = health[0].data
        this.service = health[0].donnees
        setTimeout(() => {
            this.loading = false

            this.healthData = this.service[0].data
        }, 2000);
    },
    methods: {
        handleScrollTitle() {
            if (window.scrollY > 1000) {
                this.scrollTitle = true
            } else {
                this.scrollTitle = false
            }

        },
        handleScroll() {
            if (window.scrollY > 30) {
                this.isScrolled = true
            } else {
                this.isScrolled = false
            }

        },
        getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.position = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        };
                        this.loading = false;
                    },
                    (error) => {
                        this.error = "Erreur de géolocalisation : " + error.message;
                        this.loading = false;
                    }
                );
            } else {
                this.error = "La géolocalisation n'est pas prise en charge par ce navigateur.";
                this.loading = false;
            }
        },
        show(y, x) {
            this.showMap = this.loadingMap = true
            let view = document.getElementById("map")
            if (view.childNodes.length > 1) view.removeChild(view.childNodes[1])

            setTimeout(() => {
                this.loadingMap = false
                var mapView = new ol.View({
                    center: ol.proj.fromLonLat([x, y]),
                    zoom: 18
                });
                var map = new ol.Map({
                    target: 'map',
                    view: mapView
                });
                var osmTile = new ol.layer.Tile({
                    title: 'OpenStreetMap',
                    visible: true,
                    source: new ol.source.OSM()
                });
                map.addLayer(osmTile);

            }, 1500);
        },
        setServiceIndex(index) {
            this.locationIndex = index
            this.selectedIndex = 0
            this.service = health[index].donnees
            this.loading = true
            if (this.service[index] !== undefined) {
                setTimeout(() => {
                    this.loading = false
                    this.healthData = this.service[0].data
                }, 2550)
            }

        },
        setHospitalLocation(loc, index) {
            this.selectedIndex = index
            this.location = loc.location
            this.healthData = loc.data
        },



    },
    directives: {
        scroll: {
            created: (el, binding) => {
                window.addEventListener('scroll', binding.value)
            },
            unmounted: (el, binding) => {
                window.removeEventListener('scroll', binding.value)
            }
        },
    }
}
</script>
<style src="../assets/resources/ol/ol.css"></style>
<style src="../assets/resources/ol-layerswitcher.css"></style>
<style scoped>
.slide-right:nth-child(1) {
    animation: slide-right 2.75s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(2) {
    animation: slide-right 2s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(3) {
    animation: slide-right 1.25s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right:nth-child(4) {
    animation: slide-right 0.5s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right-btn:nth-child(1) {
    animation: slide-right 1s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right-btn:nth-child(2) {
    animation: slide-right 1.5s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right-btn:nth-child(3) {
    animation: slide-right 2s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-right-btn:nth-child(4) {
    animation: slide-right 2.75s cubic-bezier(0.5, 0, 0.5, 1);
}
.toto {
    animation: slide-up 1s cubic-bezier(0.5, 0, 0.5, 1);
}
.totox{
    animation: slide-show 1.5s cubic-bezier(0.5, 0, 0.5, 1);
}
@keyframes slide-right {
    from {
        opacity: 0;
        transform: translateX(-100%)
    }

    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: none;
    }
}
@keyframes slide-show {
    from {
        opacity: 0;
        
    }

    to {
        opacity: 1;
        
    }
}
.map-card {
    position: fixed;
    visibility: visible;
    opacity: 1;
    right: 20px;
    bottom: 20px;
    height: 300px;
    width: 400px;
    background: rgb(197, 197, 197);
    z-index: 88888;
    transition: all 0.4s;
    overflow: hidden
}

.map {
    height: 300px;
    width: 400px;
    z-index: 99999;
}
.loader {
    width: 40px;
    aspect-ratio: 1;
    position: relative;
    transform: rotate(45deg);
}

.loader:before,
.loader:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50% 50% 0 50%;
    background: #FF0043;
    -webkit-mask: radial-gradient(circle 10px at 50% 50%, #0000 94%, #000);
}

.loader:after {
    animation: l6 1s infinite;
    transform: perspective(300px) translateZ(0px)
}

@keyframes l6 {
    to {
        transform: perspective(300px) translateZ(150px);
        opacity: 0
    }
}

.heart {
    width: 50px;
    aspect-ratio: 1;
    color: #FF0043;
    background:
        radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
        radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
        linear-gradient(to bottom left, currentColor 42%, #0000 43%) bottom left,
        linear-gradient(to bottom right, currentColor 42%, #0000 43%) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
}

.heart:after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    opacity: 0.4;
    animation: l3 1s infinite;
}

@keyframes l3 {
    to {
        transform: scale(1.8);
        opacity: 0
    }
}

.c-type {
    cursor: pointer;
}

.nav-small:hover {
    color: var(--baseColor) !important;;
    
}

.bg-small:hover {
    color: #fff !important;
    background: var(--baseColor) !important;
}

.ulList {
    list-style: disc;

}
</style>