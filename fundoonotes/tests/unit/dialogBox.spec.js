/*************************************************************************
 *
 *
 * @file : dialogBox.spec.js
 * purpose : to test dialogBox component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/


import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex'
import dialogBox from '../../src/components/dialogBox.vue';
const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuelidate);
localVue.use(Vuex);

describe('dialogBox.vue', () => {
    let wrapper;
    let actions;
    let store;
    beforeEach(() => {
        wrapper = shallowMount(dialogBox, {
            store,
            localVue,
            propsData: {
                options: {
                    labelId: [],
                    isArchived: false,
                    isDeleted: false,
                    collaborator: [],
                    _id: '60582d714575e205d4ec5dab',
                    title: 'Payal',
                    description: 'Notesss',
                    userId: '604d0dcb0a0e790824607474',
                    createdAt: '2021-03-22T05:38:57.698Z',
                    updatedAt: '2021-03-31T18:45:34.753Z'
                }
            },

        })
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn(),

        }
        store = new Vuex.Store({
            actions
        })

        console.log("wrapper dialogBox", wrapper)
    });
    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    it('mounts and renders', () => {
        expect(wrapper.html()).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"deleteForever"toBeTruthy', () => {
        wrapper.vm.$emit('deleteForever');
        expect(wrapper.emitted().deleteForever).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"close"toBeTruthy', () => {
        wrapper.vm.$emit('close');
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('givenEvent_whenEmit_shouldEmit"onClickOutside"toBeTruthy', () => {
        wrapper.vm.$emit('onClickOutside');
        expect(wrapper.emitted().onClickOutside).toBeTruthy();
    });

});




















// import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
// import dashboard from '../../src/components/dashboard.vue';
// import Vuetify from 'vuetify';
// import Vuelidate from 'vuelidate';
// import Vuex from 'vuex'
// import dialogBox from '../../src/components/dialogBox.vue';
// const localVue = createLocalVue();
// localVue.use(Vuetify);
// localVue.use(Vuelidate);
// localVue.use(Vuex);

// describe.only('dialogBox.vue', () => {
//     let wrapper;
//     let actions
//     let store

//     beforeEach(() => {
//         wrapper = shallowMount(dialogBox, {
//             store,
//             localVue
//         })
//         actions = {
//             actionClick: jest.fn(),
//             actionInput: jest.fn()
//         }
//         store = new Vuex.Store({
//             actions
//         })
//         console.log("wrapper dialogBox", wrapper)
//     });

//     it('mounts and renders', () => {
//         expect(wrapper.html()).toBeTruthy();
//     });

//     it('givenEvent_whenEmit_shouldEmit"deleteForever"toBeTruthy', () => {
//         wrapper.vm.$emit('deleteForever');
//         expect(wrapper.emitted().deleteForever).toBeTruthy();
//     });

//     it('givenEvent_whenEmit_shouldEmit"close"toBeTruthy', () => {
//         wrapper.vm.$emit('close');
//         expect(wrapper.emitted().close).toBeTruthy();
//     });

//     it('givenEvent_whenEmit_shouldEmit"onClickOutside"toBeTruthy', () => {
//         wrapper.vm.$emit('onClickOutside');
//         expect(wrapper.emitted().onClickOutside).toBeTruthy();
//     });

// });