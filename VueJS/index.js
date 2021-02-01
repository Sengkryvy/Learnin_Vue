// Variables and Method
const title = new Vue({
    el: '#title',
    data: {
        name: 'John',
        title: 'Learning Vue'
    },
    methods: {
        greet: function(text = 'Good Morning') {
            return text + ' ' + this.name + '!';
        }
    }
});

//Events
new Vue({
    el: '#events',
    data: {
        title: 'Event',
        age: 10,
        name: '',
        x: 0,
        y: 0
    },
    methods: {
        increaseAge:function(num = 1) {
            this.age += num;
        },
        decreaseAge:function() {
            this.age--;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

//Computed Properties

