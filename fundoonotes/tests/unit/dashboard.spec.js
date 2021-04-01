/*************************************************************************
 *
 *
 * @file : dashboard.spec.js
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import { shallowMount, createLocalVue } from '@vue/test-utils';
import dashboard from '../../src/components/dashboard.vue';

import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';

describe('dashboard.vue', () => {
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = shallowMount(dashboard, {
            localVue
        });
    });

    it('Check emitted "createNewNote" event', () => {
        wrapper.vm.$emit('createNewNote');
        expect(wrapper.emitted().creatNewNote).toBeTruthy();
    });
    it('given"createNewNote"_atClickCloseEvent_shouldEvaluateTruthy', () => {
        wrapper.vm.$emit('createNewNote');
        expect(wrapper.emitted().creatNewNote).toBeTruthy();
    });

    it('given"expandCard"_atClickEvent_shouldEvaluateTruthy', () => {
        wrapper.vm.$emit('expandCard');
        expect(wrapper.emitted().expandCard).toBeTruthy();
    });

    it('given"drawer"_atClickEvent_shouldEvaluateTruthy', () => {
        wrapper.vm.$emit('drawer');
        expect(wrapper.emitted().drawer).toBeTruthy();
    });
});