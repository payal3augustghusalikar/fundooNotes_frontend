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
        localVue.use(Vuelidate);
        wrapper = shallowMount(register, localVue);
    });


    // it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
    //     expect(wrapper.contains(fundooTitle)).toBe(true);
    // });

    // it('has data', () => {
    //     expect(typeof register.data).toBe('function');
    // });

    // it('has a button', () => {
    //     expect(wrapper.contains('md-button')).toBe(true);
    // });

    // it('html should render correctly', () => {
    //     expect(wrapper.html()).toMatchSnapshot()
    // })





    it('firstName should evaluate to false when it contains les than 2 characters', () => {
        // wrapper.vm.firstName = 'p';
        let fieldName = 'firstName'
            // field = this.$v.form[fieldName];
            //  const field ='p'
        wrapper.vm.field = 'p'
        expect(wrapper.vm.$v.field.$invalid).toBe(true);
    });


    // it('emailId should evaluate to false when "@" is missed', () => {
    //     wrapper.vm.emailId = 'payalghusalikar9gmail.com';
    //     expect(wrapper.vm.$v.emailId.email).toBe(false);
    // });


    // it('it will add the md-error class for invalid email', () => {
    //     const emailId = wrapper.find('md-input')
    //     expect(emailId.classes()).not.toContain('md-error') //Passes
    // });


    // it('it will add the red class for invalid email', () => {
    //     const emailId = wrapper.find('md-input')
    //     expect(emailId.classes()).toContain('md-error') //Passes

    //     wrapper.find('md-input').setValue('hghghghg')

    //     expect(wrapper.vm.$v.emailId.$invalid).toBe(true) //Passes
    //         //   expect(emailId.classes()).toContain('md-error') //Fails
    // })




    // it(' for invalid email', () => {
    //         // const emailId = wrapper.find('md-input').setValue('hghghghg')
    //         // expect(emailId.classes()).toContain('md-error') //Passes

    //         wrapper.find('md-input').setValue('hghghghg')

    //         expect(wrapper.vm.$v.emailId.$invalid).toBe(true) //Passes
    //             //   expect(emailId.classes()).toContain('md-error') //Fails
    //     })
    // Inspect the raw component options

});