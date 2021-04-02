/*************************************************************************
 * @file : trashNotes.spec.js
 * purpose : to test trashNotes component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import trashNotes from '../../src/components/trashNotes'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('trashNotes.vue', () => {
    let getters
    let store

    beforeEach(() => {

        getters = {
            allTrashNotes: () => [{
                labelId: [],
                isArchived: true,
                isDeleted: true,
                collaborator: [],
                _id: '60582d714575e205d4ec5dab',
                title: 'Payal',
                description: 'Notesss',
                userId: '604d0dcb0a0e790824607474',
                createdAt: '2021-03-22T05:38:57.698Z',
                updatedAt: '2021-03-31T18:45:34.753Z'
            }]
        }
        store = new Vuex.Store({
            getters
        })
    })

    it('mounts and renders', () => {
        const wrapper = shallowMount(trashNotes, { store, localVue })
        console.log("wrapper ", wrapper)
        expect(wrapper.html()).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit""toBeTruthy', () => {
        const wrapper = shallowMount(trashNotes, { store, localVue })
        wrapper.vm.$emit('moveToTrash');
        expect(wrapper.emitted().moveToTrash).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"unArchieve"toBeTruthy', () => {
        const wrapper = shallowMount(trashNotes, { store, localVue })
        wrapper.vm.$emit('unArchieve');
        expect(wrapper.emitted().unArchieve).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"archieve"toBeTruthy', () => {
        const wrapper = shallowMount(trashNotes, { store, localVue })
        wrapper.vm.$emit('archieve');
        expect(wrapper.emitted().archieve).toBeTruthy();
    });
})