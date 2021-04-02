// // // /*************************************************************************
// // //  *
// // //  *
// // //  * @file : dashboard.spec.js
// // //  * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
// // //  * @version : 1.0
// // //  * @since : 05/03/2021
// // //  *
// // //  **************************************************************************/











// /*************************************************************************
//  *
//  *
//  * @file : cardicons.spec.js
//  * purpose : to test noteCards component
//  * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
//  * @version : 1.0
//  * @since : 05/03/2021
//  *
//  **************************************************************************/


// import Vuetify from 'vuetify';
// import Vuelidate from 'vuelidate';
// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import trashNotes from '../../src/components/trashNotes.vue';
// import Vuex from 'vuex';
// import router from '@/router/route'
// const localVue = createLocalVue();
// localVue.use(Vuetify);
// localVue.use(Vuelidate);
// localVue.use(Vuex);

// describe('trashNotes', () => {
//     let wrapper;
//     let actions
//     let store
//     beforeEach(() => {
//         wrapper = shallowMount(trashNotes, {
//             router,
//             store,
//             localVue
//         })

//         getters = {
//             clicks: () => 2,
//             allActiveNotes: () => [{ m: 1 }, { n: 2 }]
//         }
//         actions = {
//             actionClick: jest.fn(),
//             actionInput: jest.fn()
//         }
//         store = new Vuex.Store({
//             actions,
//             getters
//         })
//         console.log("wrapper trashNotes ", wrapper)
//     })

//     it('mounts and renders', () => {
//         console.log("wrapper notecards ", wrapper)
//         expect(wrapper.html()).toBeTruthy();
//     });

//     //   it('givenComponent_if"cardIcons"PresentInNoteCards_shouldEvaluateTrue', () => {
//     //       expect(wrapper.contains(cardIcons)).toBe(true);
//     //   });

//     //   it('givenComponent_if"dialogBox"PresentInNoteCards_shouldEvaluateTrue', () => {
//     //       expect(wrapper.contains(dialogBox)).toBe(true);
//     //   });
// })













// // // import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
// // // import dashboard from '../../src/components/dashboard.vue';
// // // import trashNotes from '../../src/components/trashNotes.vue';
// // // import Vuetify from 'vuetify';
// // // import Vuelidate from 'vuelidate';
// // // import Vuex from 'vuex'
// // // const localVue = createLocalVue();
// // // localVue.use(Vuetify);
// // // localVue.use(Vuelidate);
// // // localVue.use(Vuex);

// // // describe('trashNotes.vue', () => {
// // //     let wrapper;
// // //     let actions
// // //     let store;
// // //     let computed;
// // //     let mutations;
// // //     let getters;
// // //     let factory;
// // //     let state;
// // //     //  const recipeMock = jest.fn();
// // //     // factory = (dialogBox = {}) => {
// // //     //     return shallowMount(dialogBox, {
// // //     //         propsData: {},
// // //     //         mocks: {},
// // //     //         stubs: {},
// // //     //         methods: {},
// // //     //         computed,

// // //     //         store,
// // //     //         localVue,
// // //     //         data: {
// // //     //             allTrashNotes: [{
// // //     //                 labelId: [],
// // //     //                 isArchived: true,
// // //     //                 isDeleted: true,
// // //     //                 collaborator: [],
// // //     //                 _id: '60582d714575e205d4ec5dab',
// // //     //                 title: 'Payal',
// // //     //                 description: 'Notesss',
// // //     //                 userId: '604d0dcb0a0e790824607474',
// // //     //                 createdAt: '2021-03-22T05:38:57.698Z',
// // //     //                 updatedAt: '2021-03-31T18:45:34.753Z'
// // //     //             }]
// // //     //         }
// // //     //     });

// // //     beforeEach(() => {
// // //             //  wrapper = factory()

// // //             getters = {
// // //                 allTrashNotes: () => [{
// // //                     labelId: [],
// // //                     isArchived: true,
// // //                     isDeleted: false,
// // //                     collaborator: [],
// // //                     _id: '60582d714575e205d4ec5dab',
// // //                     title: 'Payal',
// // //                     description: 'Notesss',
// // //                     userId: '604d0dcb0a0e790824607474',
// // //                     createdAt: '2021-03-22T05:38:57.698Z',
// // //                     updatedAt: '2021-03-31T18:45:34.753Z'
// // //                 }]
// // //             }
// // //             store = new Vuex.Store({
// // //                 getters
// // //             })
// // //         })
// // //         // })
// // //         // wrapper.setData({
// // //         // allTrashNotes: [{
// // //         //         labelId: [],
// // //         //         isArchived: true,
// // //         //         isDeleted: false,
// // //         //         collaborator: [],
// // //         //         _id: '60582d714575e205d4ec5dab',
// // //         //         title: 'Payal',
// // //         //         description: 'Notesss',
// // //         //         userId: '604d0dcb0a0e790824607474',
// // //         //         createdAt: '2021-03-22T05:38:57.698Z',
// // //         //         updatedAt: '2021-03-31T18:45:34.753Z'
// // //         //     }]
// // //         // });
// // //         // actions = {
// // //         //     actionClick: jest.fn(),
// // //         //     actionInput: jest.fn()
// // //         // }
// // //         // store = new Vuex.Store({
// // //         //     actions,
// // //         //     getters: {
// // //         //         allTrashNotes: [{
// // //         //             labelId: [],
// // //         //             isArchived: true,
// // //         //             isDeleted: false,
// // //         //             collaborator: [],
// // //         //             _id: '60582d714575e205d4ec5dab',
// // //         //             title: 'Payal',
// // //         //             description: 'Notesss',
// // //         //             userId: '604d0dcb0a0e790824607474',
// // //         //             createdAt: '2021-03-22T05:38:57.698Z',
// // //         //             updatedAt: '2021-03-31T18:45:34.753Z'
// // //         //         }]
// // //         //     }

// // //     //{ allTrashNotes: recipeMock }

// // //     //{
// // //     // allTrashNotes: [{
// // //     //     labelId: [],
// // //     //     isArchived: true,
// // //     //     isDeleted: false,
// // //     //     collaborator: [],
// // //     //     _id: '60582d714575e205d4ec5dab',
// // //     //     title: 'Payal',
// // //     //     description: 'Notesss',
// // //     //     userId: '604d0dcb0a0e790824607474',
// // //     //     createdAt: '2021-03-22T05:38:57.698Z',
// // //     //     updatedAt: '2021-03-31T18:45:34.753Z'
// // //     // }]
// // //     // },
// // //     // })
// // //     mutations = {
// // //         someMutation: jest.fn(),
// // //         allTrashNotes: jest.fn()
// // //     };
// // //     // state = {
// // //     //     key: {}
// // //     // };

// // //     wrapper = shallowMount(trashNotes, {
// // //         store,
// // //         localVue,
// // //     });

// // //     it('mounts and renders', () => {
// // //         console.log("wrapper ", wrapper)
// // //         expect(wrapper.html()).toBeTruthy();
// // //     });

// // //     // it('givenEvent_whenEmit_shouldEmit""toBeTruthy', () => {
// // //     //     wrapper.vm.$emit('moveToTrash');
// // //     //     expect(wrapper.emitted().moveToTrash).toBeTruthy();
// // //     // });

// // //     // it('givenEvent_whenEmit_shouldEmit"unArchieve"toBeTruthy', () => {
// // //     //     wrapper.vm.$emit('unArchieve');
// // //     //     expect(wrapper.emitted().unArchieve).toBeTruthy();
// // //     // });

// // //     // it('givenEvent_whenEmit_shouldEmit"archieve"toBeTruthy', () => {
// // //     //     wrapper.vm.$emit('archieve');
// // //     //     expect(wrapper.emitted().archieve).toBeTruthy();
// // //     // });
// // // });




// // import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
// // import dashboard from '../../src/components/dashboard.vue';
// // import trashNotes from '../../src/components/trashNotes.vue';
// // import Vuetify from 'vuetify';
// // import Vuelidate from 'vuelidate';
// // import Vuex from 'vuex'
// // const localVue = createLocalVue();
// // localVue.use(Vuetify);
// // localVue.use(Vuelidate);
// // localVue.use(Vuex);

// // describe('trashNotes.vue', () => {
// //     let wrapper;
// //     let actions
// //     let store;
// //     let computed;
// //     let mutations;
// //     let getters;
// //     let factory;
// //     let state;
// //     const recipeMock = jest.fn();
// //     factory = (dialogBox = {}) => {
// //         return shallowMount(dialogBox, {
// //             propsData: {},
// //             mocks: {},
// //             stubs: {},
// //             methods: {},
// //             computed,

// //             store,
// //             localVue,
// //             data: {
// //                 allTrashNotes: [{
// //                     labelId: [],
// //                     isArchived: true,
// //                     isDeleted: true,
// //                     collaborator: [],
// //                     _id: '60582d714575e205d4ec5dab',
// //                     title: 'Payal',
// //                     description: 'Notesss',
// //                     userId: '604d0dcb0a0e790824607474',
// //                     createdAt: '2021-03-22T05:38:57.698Z',
// //                     updatedAt: '2021-03-31T18:45:34.753Z'
// //                 }]
// //             }
// //         });
// //     };
// //     beforeEach(() => {
// //         wrapper = factory()
// //             // wrapper = shallowMount(trashNotes, {
// //             //     store,
// //             //     localVue,
// //         getters = {
// //                 allTrashNotes: () => 'input'
// //             }
// //             // [{
// //             //         labelId: [],
// //             //         isArchived: true,
// //             //         isDeleted: false,
// //             //         collaborator: [],
// //             //         _id: '60582d714575e205d4ec5dab',
// //             //         title: 'Payal',
// //             //         description: 'Notesss',
// //             //         userId: '604d0dcb0a0e790824607474',
// //             //         createdAt: '2021-03-22T05:38:57.698Z',
// //             //         updatedAt: '2021-03-31T18:45:34.753Z'
// //             //     }]
// //             // }

// //         // })
// //         // wrapper.setData({
// //         // allTrashNotes: [{
// //         //         labelId: [],
// //         //         isArchived: true,
// //         //         isDeleted: false,
// //         //         collaborator: [],
// //         //         _id: '60582d714575e205d4ec5dab',
// //         //         title: 'Payal',
// //         //         description: 'Notesss',
// //         //         userId: '604d0dcb0a0e790824607474',
// //         //         createdAt: '2021-03-22T05:38:57.698Z',
// //         //         updatedAt: '2021-03-31T18:45:34.753Z'
// //         //     }]
// //         // });
// //         actions = {
// //             actionClick: jest.fn(),
// //             actionInput: jest.fn()
// //         }
// //         store = new Vuex.Store({
// //             actions,
// //             getters
// //             //  = {
// //             //     allTrashNotes: [{
// //             //         labelId: [],
// //             //         isArchived: true,
// //             //         isDeleted: false,
// //             //         collaborator: [],
// //             //         _id: '60582d714575e205d4ec5dab',
// //             //         title: 'Payal',
// //             //         description: 'Notesss',
// //             //         userId: '604d0dcb0a0e790824607474',
// //             //         createdAt: '2021-03-22T05:38:57.698Z',
// //             //         updatedAt: '2021-03-31T18:45:34.753Z'
// //             //     }]
// //             // }

// //             //{ allTrashNotes: recipeMock }

// //             //{
// //             // allTrashNotes: [{
// //             //     labelId: [],
// //             //     isArchived: true,
// //             //     isDeleted: true,
// //             //     collaborator: [],
// //             //     _id: '60582d714575e205d4ec5dab',
// //             //     title: 'Payal',
// //             //     description: 'Notesss',
// //             //     userId: '604d0dcb0a0e790824607474',
// //             //     createdAt: '2021-03-22T05:38:57.698Z',
// //             //     updatedAt: '2021-03-31T18:45:34.753Z'
// //             // }]
// //             // },
// //         })
// //         mutations = {
// //             someMutation: jest.fn(),
// //             allTrashNotes: jest.fn()
// //         };
// //         state = {
// //             key: {}
// //         };
// //     });

// //     it('mounts and renders', () => {
// //         console.log("wrapper ", wrapper)
// //         expect(wrapper.html()).toBeTruthy();
// //     });

// //     // it('givenEvent_whenEmit_shouldEmit""toBeTruthy', () => {
// //     //     wrapper.vm.$emit('moveToTrash');
// //     //     expect(wrapper.emitted().moveToTrash).toBeTruthy();
// //     // });

// //     // it('givenEvent_whenEmit_shouldEmit"unArchieve"toBeTruthy', () => {
// //     //     wrapper.vm.$emit('unArchieve');
// //     //     expect(wrapper.emitted().unArchieve).toBeTruthy();
// //     // });

// //     // it('givenEvent_whenEmit_shouldEmit"archieve"toBeTruthy', () => {
// //     //     wrapper.vm.$emit('archieve');
// //     //     expect(wrapper.emitted().archieve).toBeTruthy();
// //     // });
// // });