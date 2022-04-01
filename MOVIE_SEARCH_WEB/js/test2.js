var sampleChild = {
    template: `<p>
                    {{message}}
                </p>`,
    data: function() {
      return {
        message: 'Hello'
      }
    }
  };
var app = new Vue({
    el: '#app',
    components: {
        'sample' : sampleChild
      }
  });

var app2 = new Vue({
el: '#app2',
components: {
    'sample' : sampleChild
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        json: []
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/cvc-ishikura/training2/main/sample.json')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.json = json;
            })
    }
});