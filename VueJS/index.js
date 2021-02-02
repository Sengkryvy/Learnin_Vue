// Variables and Method
const title = new Vue({
    el: '#title',
    data: {
        name: 'John',
        title: 'Learning Vue'
    },
    methods: {
        greet: function (text = 'Good Morning') {
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
        increaseAge: function () {
            this.age++;
            console.log("increaseAge ran.");
        },
        decreaseAge: function () {
            this.age--;
            console.log("decreaseA ran.");

        },
        updateXY: function (event) {
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
        increaseA_fn: function () {
            this.a++;
            console.log("increaseA_fn ran");
        },
        increaseB_fn: function () {
            this.b++;
            console.log("increaseB_fn ran");
        },
        xPlusA_fn: function () {
            console.log("xPlusA_fn ran");
            return parseInt(this.x) + parseInt(this.a);

        },
        xPlusB_fn: function () {
            console.log("xPlusB_fn ran");
            return parseInt(this.x) + parseInt(this.b);
        }
    },
    computed: {
        increaseA: function () {
            this.a++;
            console.log("increaseA ran.");
        },
        increaseB: function () {
            this.b++;
            console.log("increaseB ran.");

        },
        xPlusA: function () {
            console.log("xPlusA ran");
            return parseInt(this.x) + parseInt(this.a);
        },
        xPlusB: function () {
            console.log("xPlusB ran");
            return parseInt(this.x) + parseInt(this.b);
        }
    }
});

// Dynamic CSS Class
new Vue({
    el: "#dynamic-css-class",
    data: {
        //css-class
        isDisable: true,
        isGreen: true,
        isRed: false,
    },
    methods: {
        changeColor: function () {
            this.isRed = this.isGreen;
            this.isGreen = !this.isGreen;
            console.log("changeColor ran");
        },
        changeState: function() {
            this.isDisable = !this.isDisable;
        }
    }
});

//Conditionals
new Vue({
    el: "#conditionals",
    data: {
        title: "Conditionals",
        desc: "v-if remove dom completely from the page, while v-show only apply css style \"display: nono\" to the dom element",
        isError: false,
        isSuccess: false,
    }
});

//Looping with v-for
new Vue({
    el: "#looping-with-v-for",
    data: {
        title: "Looping with v-for",
        characters: [
            "Mario", 
            "Luigi",
            "Bowser",
            "Peach",
            "Yishi"
        ],
        heroes: [
            {
                name: "Valir",
                role: "Mage",
                difficulty: "Medium"
            },
            {
                name: "Granger",
                role: "Markman",
                difficulty: "Easy"
            },
            {
                name: "Fanny",
                role: "Assassin",
                difficulty: "Hard"
            },
            {
                name: "Gusion",
                role: "Assassin/Mage",
                difficulty: "Hard"
            }
        ]
    }
});
