'use strict';

function HomeCtrl($stateParams, $state, $filter, $log) {
	var vm = this;

    vm.tiles = [
        {
            name: 'Air Conditioner',
            img: '',
            link: ''
        },
        {
            name: 'Stove',
            img: '',
            link: ''
        },
        {
            name: 'Oven',
            img: '',
            link: ''
        },
        {
            name: 'Washer',
            img: '',
            link: ''
        },
        {
            name: 'Dryer',
            img: '',
            link: ''
        },
        {
            name: 'Refrigerator',
            img: '',
            link: ''
        },
        {
            name: 'Furnace',
            img: '',
            link: ''
        }
    ];
}

HomeCtrl.$inject = ['$stateParams', '$state', '$filter', '$log'];

export default HomeCtrl;
