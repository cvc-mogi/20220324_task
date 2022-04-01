var app = new Vue({
    el: '#app',
    data: {
        json: [],
        param: getParam('no')
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/cvc-ishikura/training2/main/sample.json')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.json = json;
            })
    },
    computed:{
        runningTime: function() {
            return function(runningTimeS) {
                if (isNaN(runningTimeS)) {
                    return "NoRecord"
                }
                return Math.floor((runningTimeS / 3600) * 10) / 10 + "h"
            }
        }
    },
    methods: {
        emptyJug: function(value) {
            if(typeof value === 'undefined'){
                return "NoRecord"
            }
            return value
        },
        // 詳細画面へ遷移
        detailUrl: function(index) {
            location.href = 'movie_ditail.html?no=' + index;
        },
        formatDate: function(data, format){
            if (data == null || data == '') {
                return '';
            }

            const week = [ "日", "月", "火", "水", "木", "金", "土" ];
            let date = new Date(data);
            format = (format == null) ? 'YYYY/MM/DD' : format;
            format = format.replace('YYYY', date.getFullYear());
            format = format.replace('MM', ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace('DD', ('0' + date.getDate()).slice(-2));

            return format;
        }
    },
});

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}