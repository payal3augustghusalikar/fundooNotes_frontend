import { createLocalVue, shallowMount } from '@vue/test-utils';
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
        localVue.use(VueMaterial);
        localVue.use(Vuelidate);
        wrapper = shallowMount(register, localVue);
    });

    it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
        expect(wrapper.contains(fundooTitle)).toBe(true);
    });

    it('has data', () => {
        expect(typeof register.data).toBe('function');
    });

    it('has a button', () => {
        expect(wrapper.contains('md-button')).toBe(true);
    });

    it('html should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('givenfirstName_whenContainsLessThan#characters_shouldEvaluateFalse', () => {
        let fieldName = 'firstName';
        field = this.$v.form[fieldName];
        wrapper.vm.field = 'pq';
        expect(wrapper.vm.$v.field.$invalid).toBe(False);
    });

    it('inGivenFirstName_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.firstName = '';
        expect(wrapper.vm.$v.firstName.required).toBe(true);
    });

    it('givenLastName_whenContainsLessThan3characters_shouldEvaluateFalse', () => {
        wrapper.vm.lastName = 'yt';
        expect(wrapper.vm.$v.lastName.invalid).toBe(true);
    });

    it('inGivenlastName_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.lastName = '';
        expect(wrapper.vm.$v.lastName.invalid).toBe(true);
    });

    it('inGivenpassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.password = '';
        expect(wrapper.vm.$v.password.required).toBe(false);
    });

    it('inGivenpassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.password = '';
        expect(wrapper.vm.$v.password.invalid).toBe(true);
    });

    it('inGivenCpassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.Cpassword = '';
        expect(wrapper.vm.$v.Cpassword.required).toBe(false);
    });

    it('inGivenCpassword_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.Cpassword = '';
        expect(wrapper.vm.$v.Cpassword.invalid).toBe(true);
    });

    it('inGivenEmail_whenImproperNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.emailId = 'payalghusalikar9@gmail.com';
        expect(wrapper.vm.$v.emailId.email).toBe(true);
    });

    it('inGivenEmail_when"@"isNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.emailId = 'payalghusalikar9gmail.com';
        expect(wrapper.vm.$v.emailId.email).toBe(false);
    });

    it('inGivenEmail_when".com"NotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.emailId = 'payalghusalikar9gmail';
        expect(wrapper.vm.$v.emailId.email).toBe(false);
    });

    it('inGivenEmail_whenImproperNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.emailId = 'pl123&&&';
        expect(wrapper.vm.$v.emailId.email).toBe(false);
    });

});