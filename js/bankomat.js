new Vue({
    el: "#app",

    data () {
        return {
            suma: '',
            state: {
                nominals: [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1],
                zasoby: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                ks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                zaloha: []
            }
        }
    },

    computed: {
        parsedSuma: {
            set (suma) {
                this.suma = suma
            },
            get () {
                return parseFloat(this.suma, 10) * 100 || 0
            }
        }
    },

    methods: {
        vydaj () {
            let povodnaSuma = this.suma
            this.ks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            this.zaloha = [...this.ks]
        
            for (let i = 0; i < this.state.nominals.length; i++) {
                while (this.parsedSuma >= this.state.nominals[i]) {
                    if (this.state.zasoby[i] > 0) {
                        this.state.ks[i]++
                        this.state.zasoby[i]--
                        this.parsedSuma -= this.state.nominals[i]
                    } else {
                        break
                    }
                }
            }
        }
    }
})