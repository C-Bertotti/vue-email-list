// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue (
    {
        el: '#root',
        data: {
            email: '',
            emailList: []
        },
        mounted: function() {
            for ( var i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (rndEmail) => {
                    this.email = rndEmail.data.response;
                    console.log(this.email);
                    this.emailList.push(this.email);    
                });

            };
        }

    }
);