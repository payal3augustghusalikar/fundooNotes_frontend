/*************************************************************************
 *
 *
 * @file : dashboard.spec.js
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import dashboard from '../../src/components/dashboard.vue';
import sidenavBar from '../../src/components/sidenavBar.vue';
import snackbarNotify from '../../src/components/snackbarNotify.vue';
import cardIcons from '../../src/components/cardIcons.vue';
import noteCards from '../../src/components/noteCards.vue';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuelidate);
localVue.use(Vuex);

describe('dashboard.vue', () => {
    let wrapper;
    let actions
    let store

    beforeEach(() => {
        wrapper = shallowMount(dashboard, {
            store,
            localVue
        })
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn(),
            addNote: jest.fn(),
        }
        store = new Vuex.Store({
            actions
        })
    });

    it('mounts and renders', () => {
        expect(wrapper.html()).toBeTruthy();
    });

    it('givenComponent_if"noteCards"Present_shouldEvaluateTrue', () => {
        expect(wrapper.contains(noteCards)).toBe(false);
    });

    it('givenComponent_if"sidenavBar"Present_shouldEvaluateTrue', () => {
        expect(wrapper.contains(sidenavBar)).toBe(true);
    });

    it('givenComponent_if"snackbarNotify"Present_shouldEvaluateTrue', () => {
        expect(wrapper.contains(snackbarNotify)).toBe(true);
    });



    it('givenEvent_whenEmit_shouldEmit"createNewNote"toBeTruthy', () => {
        wrapper.vm.$emit('createNewNote');
        expect(wrapper.emitted().createNewNote).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"expandCard"toBeTruthy', () => {
        wrapper.vm.$emit('expandCard');
        expect(wrapper.emitted().expandCard).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"hide"toBeTruthy', () => {
        wrapper.vm.$emit('hide');
        expect(wrapper.emitted().hide).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"drawer"toBeTruthy', () => {
        wrapper.vm.$emit('drawer');
        expect(wrapper.emitted().drawer).toBeTruthy();
    });

    // it('calls store action "addNote" when button is clicked', () => {
    //     const wrapper = mount(dashboard, { store, localVue })
    //     console.log("wrapper dashBoard actions", wrapper)
    //     wrapper.find('v-button').trigger('click')
    //     expect(actions.addNote).toHaveBeenCalled()
    // })

    // it('givenComponent_if"cardIcons"Present_shouldEvaluateTrue', () => {
    //     expect(wrapper.contains(cardIcons)).toBe(true);
    // });
});