/*************************************************************************
 *
 *
 * @file : archieved.spec.js
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

import archieved from '../../src/components/archieved.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('archieved.vue', () => {
    let getters
    let store

    beforeEach(() => {

        getters = {
            allArchievedNotes: () => [{
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
            }]
        }
        store = new Vuex.Store({
            getters
        })
    })

    it('mounts and renders', () => {
        const wrapper = shallowMount(archieved, { store, localVue })
        console.log("wrapper ", wrapper)
        expect(wrapper.html()).toBeTruthy();
    });
})