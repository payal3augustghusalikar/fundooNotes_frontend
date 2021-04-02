/*************************************************************************
 * @file : snackBar.spec.js
 * purpose : to test snackBar component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/


import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex'
import snackbar from '../../src/components/snackbarNotify.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuelidate);
localVue.use(Vuex);

describe('snackbar.vue', () => {
    let wrapper;
    let actions
    let store

    beforeEach(() => {
        wrapper = shallowMount(snackbar, {
            store,
            localVue,
        })
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    });

    it('mounts and renders', () => {
        console.log("wrapper ", wrapper)
        expect(wrapper.html()).toBeTruthy();
    });

    it('has data', () => {
        expect(typeof register.data).toBe('function');
    });

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true);
    });


});