import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';

describe('App.vue', () => {
    let wrapper;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = mount(noteCards, {
            localVue
        });
    });

    it('mounts and renders', () => {
        expect(wrapper.html()).toBeTruthy();
    });
});