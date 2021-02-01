
//Creating Vue component:
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: new Date().toLocaleDateString(),
        message_2: "new message",
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        dataArray: [
            { text: 'apple' },
            { text: 'grape' },
            { text: 'orange' }
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "What is your name:",
        is_clicked: false,
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        btnClick: function () {
            this.is_clicked = !this.is_clicked
        },
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: ''
    }
});

var app7 = new Vue({
    el: "#app-7",
    data: {
        dataArray: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});

var computedProperty = new Vue({
    el: '#computed-property',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        // In this case, we want to limit how often we access
        // yesno.wtf/api, waiting until the user has completely
        // finished typing before making the ajax request. To learn
        // more about the _.debounce function (and its cousin
        // _.throttle), visit: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
});

var bindingClass = new Vue ({
    el: "#binding-class",
    data: {
        classObject: {
            active: true,
            'text-danger': true
        },
        isActive: true,
        hasError: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    },
    computed: {

    }
});

// Conditional Rendering
var conditionalRendering = new Vue({
    el: "#conditional-rendering",
    data: {
        awesome: true,
    }
});

