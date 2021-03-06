 /*************************************************************************
  *
  *
  * @file : noteCards.spec.js
  * purpose : to test noteCards component
  * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
  * @version : 1.0
  * @since : 05/03/2021
  *
  **************************************************************************/


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
     store = new Vuex.Store({
         actions
     })
     console.log("wrapper notecards ", wrapper)

     it('mounts and renders', () => {
         wrapper = shallowMount(noteCards, {
             router,
             store,
             localVue
         })
         console.log("wrapper notecards ", wrapper)
         expect(wrapper.html()).toBeTruthy();
     });

     it('givenComponent_if"cardIcons"PresentInNoteCards_shouldEvaluateTrue', () => {
         wrapper = shallowMount(noteCards, {
             router,
             store,
             localVue
         })
         expect(wrapper.contains(cardIcons)).toBe(true);
     });

     it('givenComponent_if"dialogBox"PresentInNoteCards_shouldEvaluateTrue', () => {
         wrapper = shallowMount(noteCards, {
             router,
             store,
             localVue
         })
         expect(wrapper.contains(dialogBox)).toBe(true);
     });
 })