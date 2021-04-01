import { createLocalVue, shallowMount } from '@vue/test-utils';
import cardIcons from '../../src/components/cardIcons.vue';

import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';


describe.only('cardIcons.vue', () => {
    let wrapper;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuelidate);
        wrapper = shallowMount(cardIcons, { localVue });
        console.log('wrapper', wrapper);
    });


    it('has data', () => {
        console.log('wrapper', wrapper);
        expect(typeof cardIcons.data).toBe('function');
    });

    it('onClickOf"archieve"_ShouldEmited"archieve"event', () => {
        wrapper.vm.$emit('archieve');
        expect(wrapper.emitted().archieve).toBeTruthy();
    });


    it('onClickOf"unarchieve"_ShouldEmited"archieve"event', () => {
        wrapper.vm.$emit('unarchieve');
        expect(wrapper.emitted().unarchieve).toBeTruthy();
    });

    it('onClickOf"moveToTrash"_ShouldEmited"archieve"event', () => {
        wrapper.vm.$emit('moveToTrash');
        expect(wrapper.emitted().moveToTrash).toBeTruthy();
    });



});