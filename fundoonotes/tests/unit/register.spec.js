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

    it('inGivenFirstName_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.firstName = '';
        expect(wrapper.vm.$v.form.firstName.required).toBe(false);
    });

    it('inGivenFirstName_whenGivenMoreThan3char_shouldEvaluate"$invalid"False', () => {
        wrapper.vm.form.firstName = 'Payal';
        expect(wrapper.vm.$v.form.firstName.$invalid).toBe(false);
    });

    it('inGivenFirstName_whenGivenLessThan3char_shouldEvaluate"$invalid"True', () => {
        wrapper.vm.form.firstName = 'Pa';
        expect(wrapper.vm.$v.form.firstName.$invalid).toBe(true);
    });

    it('inGivenLastName_whenNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.lastName = '';
        expect(wrapper.vm.$v.form.lastName.required).toBe(false);
    });

    it('inGivenLastName_whenGivenMoreThan3char_shouldEvaluate"$invalid"False', () => {
        wrapper.vm.form.lastName = 'Payal';
        expect(wrapper.vm.$v.form.lastName.$invalid).toBe(false);
    });

    it('inGivenLastName_whenGivenLessThan3char_shouldEvaluate"$invalid"True', () => {
        wrapper.vm.form.lastName = 'Pa';
        expect(wrapper.vm.$v.form.lastName.$invalid).toBe(true);
    });



    it('inGivenEmail_whenProper_shouldEvaluateTrue', () => {
        wrapper.vm.form.email = 'payalghusalikar9655@gmail.com';
        expect(wrapper.vm.$v.form.email.email).toBe(true);
    });

    it('givenEmailId_ifEmpty_shouldEvaluateFalse', () => {
        wrapper.vm.form.email = '';
        expect(wrapper.vm.$v.form.email.required).toBe(false);
    });

    it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
        wrapper.vm.form.email = ',,.,.,.@gmail.com';
        expect(wrapper.vm.$v.form.email.email).toBe(false);
    });

    it('inGivenEmail_when"@"isNotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.email = 'payalghusalikar9gmail.com';
        expect(wrapper.vm.$v.form.email.email).toBe(false);
    });

    it('inGivenEmail_when".com"NotPresent_shouldEvaluateFalse', () => {
        wrapper.vm.form.email = 'payalghusalikar9gmail';
        expect(wrapper.vm.$v.form.email.email).toBe(false);
    });

    it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
        wrapper.vm.form.email = 'pl123&&&';
        expect(wrapper.vm.$v.form.email.email).toBe(false);
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

    // it('inGivenlastName_whenNotPresent_shouldEvaluateFalse', () => {
    //     wrapper.vm.form.lastName = '';
    //     expect(wrapper.vm.$v.form.lastName.required).toBe(true);
    // });

    // it('inGivenpassword_whenNotPresent_shouldEvaluateFalse', () => {
    //     wrapper.vm.password = '';
    //     expect(wrapper.vm.$v.password.required).toBe(false);
    // });

    // it('inGivenpassword_whenNotPresent_shouldEvaluateFalse', () => {
    //     wrapper.vm.password = '';
    //     expect(wrapper.vm.$v.password.invalid).toBe(true);
    // });

    // it('inGivenCpassword_whenNotPresent_shouldEvaluateFalse', () => {
    //     wrapper.vm.Cpassword = '';
    //     expect(wrapper.vm.$v.Cpassword.required).toBe(false);
    // });

    // it('inGivenCpassword_whenNotPresent_shouldEvaluateFalse', () => {
    //     wrapper.vm.Cpassword = '';
    //     expect(wrapper.vm.$v.Cpassword.invalid).toBe(true);
    // });



});