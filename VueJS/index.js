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
        increaseAge:function() {
            this.age ++;
            console.log("increaseAge ran.");
        },
        decreaseAge:function() {
            this.age--;
            console.log("decreaseA ran.");

        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
            console.log("updateXY ran.");
        }
    },

});

//Computed Properties
new Vue({
    el: "#computed-properties",
    data: {
        a: 0,
        b: 0,
        x: 0,
    },
    methods: {
        increaseA_fn: function() {
            this.a ++;
            console.log("increaseA_fn ran");
        },
        increaseB_fn: function() {
            this.b ++;
            console.log("increaseB_fn ran");
        },
        xPlusA_fn: function() {
            console.log("xPlusA_fn ran");
            return parseInt(this.x) + parseInt(this.a);
        
        },
        xPlusB_fn: function() {
            console.log("xPlusB_fn ran");
            return parseInt(this.x) + parseInt(this.b);
        }
    },
    computed: {
        increaseA: function() {
            this.a++;
            console.log("increaseA ran.");
        },
        increaseB: function() {
            this.b++;
            console.log("increaseB ran.");

        },        
        xPlusA: function() {
            console.log("xPlusA ran");
            return parseInt(this.x) + parseInt(this.a);
        },
        xPlusB: function() {
            console.log("xPlusB ran");
            return parseInt(this.x) + parseInt(this.b);
        }
    }
});

// Dynamic CSS Class
new Vue({

});
