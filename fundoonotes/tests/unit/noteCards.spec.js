 import Vuetify from 'vuetify';
 import Vuelidate from 'vuelidate';
 import { createLocalVue, shallowMount } from '@vue/test-utils';
 import noteCards from '../../src/components/noteCards.vue';
 import Vuex from 'vuex';
 import cardIcons from '../../src/components/cardIcons.vue';
 import dialogBox from '../../src/components/dialogBox.vue';
 import router from '@/router/route'
 const localVue = createLocalVue();
 localVue.use(Vuetify);
 localVue.use(Vuelidate);
 localVue.use(Vuex);

 describe('noteCards', () => {
     let wrapper;
     let actions
     let store

     wrapper = shallowMount(noteCards, {
         router,
         store,
         localVue
     })
     actions = {
         actionClick: jest.fn(),
         actionInput: jest.fn()
     }
     store = new Vuex.Store({
         actions
     })
     console.log("wrapper notecards ", wrapper)

     it('mounts and renders', () => {
         console.log("wrapper notecards ", wrapper)
         expect(wrapper.html()).toBeTruthy();
     });

     it('givenComponent_if"cardIcons"PresentInNoteCards_shouldEvaluateTrue', () => {
         expect(wrapper.contains(cardIcons)).toBe(true);
     });

     it('givenComponent_if"dialogBox"PresentInNoteCards_shouldEvaluateTrue', () => {
         expect(wrapper.contains(dialogBox)).toBe(true);
     });
 })






 // import Vuetify from 'vuetify';
 // import Vuelidate from 'vuelidate';
 // import { createLocalVue, mount, shallow } from '@vue/test-utils';
 // import noteCards from '../../src/components/noteCards.vue';
 // import jest from 'jest';
 // import Vuex from 'vuex';

 // describe('App.vue', () => {
 //     let wrapper;
 //     let actions;
 //     let store;

 //     // add this before each

 //     beforeEach(() => {
 //         const localVue = createLocalVue();
 //         localVue.use(Vuetify);
 //         localVue.use(Vuelidate);
 //         localVue.use(Vuex);
 //         wrapper = mount(noteCards, {
 //             localVue
 //         });

 //         console.log("wrapper notecards ", wrapper)
 //         actions = {
 //             SOME_ACTION: jest.fn()
 //         };
 //         store = new Vuex.Store({
 //             state: {},
 //             actions
 //         });
 //     });


 //     it('mounts and renders', () => {

 //         console.log("wrapper notecards1 ", wrapper)
 //         expect(wrapper.html()).toBeTruthy();
 //     });
 // });