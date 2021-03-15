import { createLocalVue, shallowMount } from '@vue/test-utils'
import fundooTitle from '../../src/components/fundooTitle.vue';
import register from '../../src/pages/register.vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material';

describe('register.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = shallowMount(register, localVue)
    });

    it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
        expect(wrapper.contains(fundooTitle)).toBe(true);
    })

    // it('givenFirstName_ifEmpty_shouldEvaluateFalse', () => {
    //     wrapper.vm.firstName = '';
    //     expect(wrapper.vm.$v.firstName.required).toBe(false);
    // });

    // Inspect the raw component options
    it('has data', () => {
        expect(typeof register.data).toBe('function')
    })

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true)
    })

})