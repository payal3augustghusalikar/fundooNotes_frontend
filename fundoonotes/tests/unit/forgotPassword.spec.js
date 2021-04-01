// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import fundooTitle from '../../src/components/fundooTitle.vue';
// import forgotPassword from '../../src/pages/forgotPassword.vue';
// import Vuelidate from 'vuelidate';
// import Vuetify from 'vuetify';
// import VueMaterial from 'vue-material';

// describe('forgotPassword.vue', () => {
//     let wrapper;
//     beforeEach(() => {
//         const localVue = createLocalVue();
//         localVue.use(Vuetify);
//         localVue.use(Vuelidate);
//         localVue.use(VueMaterial);
//         wrapper = shallowMount(forgotPassword, localVue);
//         console.log('localVue', wrapper);
//     });

//     it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
//         expect(wrapper.contains(fundooTitle)).toBe(true);
//     });

//     it('has data', () => {
//         expect(typeof forgotPassword.data).toBe('function');
//     });

//     it('has a button', () => {
//         expect(wrapper.contains('md-button')).toBe(true);
//     });


//     it('inGivenEmail_whenProper_shouldEvaluateTrue', () => {
//         wrapper.vm.form.email = 'payalghusalikar9655@gmail.com';
//         expect(wrapper.vm.$v.form.email.email).toBe(true);
//     });

//     it('givenEmailId_ifEmpty_shouldEvaluateFalse', () => {
//         wrapper.vm.form.email = '';
//         expect(wrapper.vm.$v.form.email.required).toBe(false);
//     });

//     it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
//         wrapper.vm.form.email = ',,.,.,.@gmail.com';
//         expect(wrapper.vm.$v.form.email.email).toBe(false);
//     });

//     it('inGivenEmail_when"@"isNotPresent_shouldEvaluateFalse', () => {
//         wrapper.vm.form.email = 'payalghusalikar9gmail.com';
//         expect(wrapper.vm.$v.form.email.email).toBe(false);
//     });

//     it('inGivenEmail_when".com"NotPresent_shouldEvaluateFalse', () => {
//         wrapper.vm.form.email = 'payalghusalikar9gmail';
//         expect(wrapper.vm.$v.form.email.email).toBe(false);
//     });

//     it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
//         wrapper.vm.form.email = 'pl123&&&';
//         expect(wrapper.vm.$v.form.email.email).toBe(false);
//     });

// });