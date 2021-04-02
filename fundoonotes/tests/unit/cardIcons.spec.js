/*************************************************************************
 *
 *
 * @file : cardicons.spec.js
 * purpose : to test cardIcons component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex'
import cardIcons from '../../src/components/cardIcons.vue';
const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuelidate);
localVue.use(Vuex);

describe('cardIcons.vue', () => {
    let wrapper;
    let actions
    let store

    beforeEach(() => {
        wrapper = shallowMount(cardIcons, {
            store,
            localVue,
            propsData: {
                singleNote: {
                    labelId: [],
                    isArchived: true,
                    isDeleted: false,
                    collaborator: [],
                    _id: '60582d714575e205d4ec5dab',
                    title: 'Payal',
                    description: 'Notesss',
                    userId: '604d0dcb0a0e790824607474',
                    createdAt: '2021-03-22T05:38:57.698Z',
                    updatedAt: '2021-03-31T18:45:34.753Z'
                }
            }
        })
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    });

    it('mounts and renders', () => {
        console.log("wrapper ", wrapper)
        expect(wrapper.html()).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit""toBeTruthy', () => {
        wrapper.vm.$emit('moveToTrash');
        expect(wrapper.emitted().moveToTrash).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"unArchieve"toBeTruthy', () => {
        wrapper.vm.$emit('unArchieve');
        expect(wrapper.emitted().unArchieve).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"archieve"toBeTruthy', () => {
        wrapper.vm.$emit('archieve');
        expect(wrapper.emitted().archieve).toBeTruthy();
    });

    // it('givenEvent_whenEmit_shouldEmit"archieve"toBeFalsy', () => {
    //     wrapper.vm.$emit('archieve');
    //     expect(wrapper.emitted().archieve).toBefalsy();
    // });
});