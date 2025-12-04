const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'My Simple List App',
            newItem: '',
            items: []
        };
    },
    methods: {
        addItem() {
            if (this.newItem.trim() !== '') {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
}).mount('#app');
