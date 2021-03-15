// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import fundooTitle from '../../src/components/fundooTitle.vue';
// import vefyEmail from '../../src/pages/vefyEmail.vue';
// import Vuelidate from 'vuelidate';
// import Vuetify from 'vuetify';
// import VueMaterial from 'vue-material';

// describe('vefyEmail.vue', () => {
//     let wrapper;
//     beforeEach(() => {
//         const localVue = createLocalVue();
//         localVue.use(Vuetify);
//         localVue.use(Vuelidate);
//         wrapper = shallowMount(vefyEmail, localVue);
//     });

//     it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
//         expect(wrapper.contains(fundooTitle)).toBe(true);
//     });

//     it('has data', () => {
//         expect(typeof vefyEmail.data).toBe('function');
//     });

//     it('has a button', () => {
//         expect(wrapper.contains('md-button')).toBe(true);
//     });

// });