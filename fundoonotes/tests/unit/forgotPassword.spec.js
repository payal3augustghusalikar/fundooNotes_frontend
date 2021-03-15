import { createLocalVue, shallowMount } from '@vue/test-utils'
import fundooTitle from '../../src/components/fundooTitle.vue';
import resetPassword from '../../src/pages/resetPassword.vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material';

describe('resetPassword.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        console.log("localVue", localVue)
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = shallowMount(resetPassword, localVue)
        console.log("localVue", wrapper)
    });

    it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
        expect(wrapper.contains(fundooTitle)).toBe(true);
    })

    it('has data', () => {
        expect(typeof resetPassword.data).toBe('function')
    })

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true)
    })

})