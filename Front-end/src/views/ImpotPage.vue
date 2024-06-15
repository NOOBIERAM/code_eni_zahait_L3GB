<template>
    <section class="section pb-0">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-7  text-lg-left">
                    <h1 class="mb-4">Vous êtes en difficulté de se souvenir vos impôt ? Nous pouvons vous aider.</h1>
                    <p class="mb-4 col-9" style="text-align: justify;">Les impôts sont des prélèvements obligatoires
                        effectués par les gouvernements sur
                        les revenus, les biens ou les activités économiques des individus et des entreprises.</p>

                </div>
                <div class="col-lg-4 d-lg-block d-none">
                    <img alt="illustration" class="img-fluid" src="../assets/4126.jpg">
                </div>
            </div>
        </div>
    </section>
    <!-- /banner -->

    <!-- topics -->
    <section class="section pb-0">
        <div class="container">
            <h2 class="section-title">Historique de vos Impôts</h2>
            <div class="row">
                <div class="table-responsive p-0 table-impot rounded" style="height: 300px !important;">
                    <table class="table table-borderless text-center">
                        <thead class="sticky-top shadow-sm">
                            <tr>
                                <th>Motif</th>
                                <th>Montant</th>
                                <th>Année</th>
                                <th>Statut<input type="checkbox" name="status" class="ms-3" v-model="checked"></input>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(imp, index) in impots" :key="index">
                                <td>{{ imp.motif }}</td>
                                <td>{{ imp.amount }}</td>
                                <td>{{ getYear(imp.annee) }}</td>
                                <td>
                                    <div class="badge mb-0 rounded-pill"
                                        :class="{ 'bg-danger': imp.status !== undefined, 'bg-success': imp.status === undefined }"
                                        style="font-size: smaller;"><i class="bi "
                                            :class="{ 'bi-x-lg me-1': imp.status !== undefined, 'bi-check-lg': imp.status === undefined }"></i>
                                        {{ (imp.status ===
                                            undefined) ? 'payé' : 'impayé' }}</div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </section>
    <!-- /topics -->
</template>
<script>
import { backServer } from '@/config/backServer';
export default {
    data() {
        return {
            isScrolled: false,
            scrollTitle: false,
            impots: [],
            impotNotPaye: {},
            checked:false
        }
    },
    mounted(){
        this.getImpots()
    },
    watch:{
        checked(){
            this.getImpots()
        }
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
        async getImpots() {
            try {
                const auth = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzE4NDEyMDY4LCJleHAiOjE3MTg0MTU2Njh9.tHoKTd7NQ5uO0dPMEPU9CqeNw3q7k3dvmBNsTjKLBPU`
                const resPaye = await backServer.get('/auth/impots')
                const resImpaye = await backServer.get('/auth/impots/impaye')
                if (this.checked) {
                    this.impots = [...resImpaye.data.impots]
                }
                else{
                    this.impots = [...resPaye.data.impots]
                    this.impots = [...this.impots,...resImpaye.data.impots]
                }
                
            } catch (error) {
                console.log(error);
            }
        },
        getYear(date){
            const dt = new Date(date)
            return dt.getFullYear()
        }
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

<style scoped>
.bagde {
    font-size: 2px !important;
}

.table-impot {
    box-shadow: 0 0.25rem 45px rgba(0, 0, 0, 0.075);
}

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

.toto {
    animation: slide-up 1s cubic-bezier(0.5, 0, 0.5, 1);
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
</style>