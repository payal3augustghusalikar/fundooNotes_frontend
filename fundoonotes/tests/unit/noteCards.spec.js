import { createLocalVue, mount } from '@vue/test-utils';
import noteCards from '../../src/components/noteCards.vue';
import router from '../../src/router/route.js';
import Vue from "vue";
import store from './store'
import Vuetify from 'vuetify';

describe('noteCards.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = mount(noteCards, {
            localVue
        });
    });


    // beforeEach(() => {
    //     Vue.use(router);
    //     //const localVue = createLocalVue();
    //     //  localVue.use(Vuetify);
    //     //localVue.use(Vuelidate);
    //     wrapper = mount(noteCards, router);
    //     console.log('wrapper', wrapper);
    //     // console.log('localVue', localVue);
    // });

    // Inspect the raw component options
    it('has data', () => {
        expect(typeof noteCards.data).toBe('function');
    });
});