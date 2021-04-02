/*************************************************************************
 * @file : resetPassword.spec.js
 * purpose : to test resetPassword component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import { createLocalVue, shallowMount } from '@vue/test-utils';
import fundooTitle from '../../src/components/fundooTitle.vue';
import resetPassword from '../../src/pages/resetPassword.vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material';

describe('resetPassword.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        localVue.use(VueMaterial);
        wrapper = shallowMount(resetPassword, localVue);
    });

    it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
        expect(wrapper.contains(fundooTitle)).toBe(true);
    });

    it('has data', () => {
        expect(typeof resetPassword.data).toBe('function');
    });

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true);
    });



    it('inGivenPassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.password = '';
        expect(wrapper.vm.$v.form.password.required).toBe(false);
    });

    it('inGivenPassword_whenGivenMoreThan6char_shouldEvaluate"$invalid"False', () => {
        wrapper.vm.form.password = 'AAAAAAAA';
        expect(wrapper.vm.$v.form.password.$invalid).toBe(false);
    });

    it('inGivenPassword_whenGivenLessThan3char_shouldEvaluate"$invalid"True', () => {
        wrapper.vm.form.password = 'AAAAA';
        expect(wrapper.vm.$v.form.password.$invalid).toBe(true);
    });

    it('inGivenConfirmPassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.cpassword = '';
        expect(wrapper.vm.$v.form.cpassword.required).toBe(false);
    });

    it('inGivenConfirmPassword_whenGivenMoreThan6char_shouldEvaluate"$invalid"False', () => {
        wrapper.vm.form.cpassword = 'AAAAAAAA';
        expect(wrapper.vm.$v.form.cpassword.$invalid).toBe(false);
    });

    it('inGivenConfirmPassword_whenGivenLessThan3char_shouldEvaluate"$invalid"True', () => {
        wrapper.vm.form.cpassword = 'AAAAA';
        expect(wrapper.vm.$v.form.cpassword.$invalid).toBe(true);
    });

});