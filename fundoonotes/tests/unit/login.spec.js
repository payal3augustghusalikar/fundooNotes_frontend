import { createLocalVue, shallowMount } from '@vue/test-utils';
import fundooTitle from '../../src/components/fundooTitle.vue';
import login from '../../src/pages/login.vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material';

describe('login.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        console.log('localVue', localVue);
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = shallowMount(login, localVue);
        console.log('localVue', wrapper);
    });

    it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
        expect(wrapper.contains(fundooTitle)).toBe(true);
    });

    it('givenEmailId_ifEmpty_shouldEvaluateFalse', () => {
        wrapper.vm.emailId = '';
        expect(wrapper.vm.$v.emailId.required).toBe(false);
    });

    // Inspect the raw component options
    it('has data', () => {
        expect(typeof login.data).toBe('function');
    });

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true);
    });

});