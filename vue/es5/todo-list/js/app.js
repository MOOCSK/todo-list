
var TodoItem = {
    props: ['content', 'index'],
    template: '<li @click="handleDelete">{{content}}</li>',
    methods: {
        handleDelete: function() {
            this.$emit('delete', this.index);
        }
    }
}

Vue.component('todo-list', {
    components: {'todo-item': TodoItem},
    template: '<div>'
                + '<input v-model="inputValue" />'
                + '<button @click="handleSubmit">提交</button>'
                + '<ul>'
                    + '<todo-item v-for="(item, index) of list" :key="index" '
                    +            ':content="item" ' 
                    +            ':index="index" ' 
                    +            '@delete="handleDelete">'
                    + '</todo-item>'
                + '</ul>'
            + '</div>',
    data: function() {
        return {
            inputValue: '',
            list: []
        }
    },
    methods: {
        handleSubmit: function() {
            this.list.push(this.inputValue);
            this.inputValue = '';
        },
        handleDelete: function(index) {
            this.list.splice(index, 1);
        }
    }
});