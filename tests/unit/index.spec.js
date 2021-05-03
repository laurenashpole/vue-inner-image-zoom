import { mount } from '@vue/test-utils';
import { TEST_PROPS } from './constants';
import InnerImageZoom from '@/InnerImageZoom';

describe('InnerImageZoom', () => {
  const node = document.createElement('div');

  const innerImageZoom = (props = {}, attachToDoc) => {
    const testProps = {
      propsData: { ...props, src: TEST_PROPS.src }
    };

    if (attachToDoc) {
      testProps.attachTo = node;
    }

    return mount(InnerImageZoom, testProps);
  };

  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 150,
        height: 150,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
  });

  describe('mount', () => {
    describe('container', () => {
      it('renders a figure', () => {
        const wrapper = innerImageZoom();
        expect(wrapper.find('figure').exists()).toEqual(true);
      });

      it('renders a figure with a custom classname', () => {
        const wrapper = innerImageZoom({ className: TEST_PROPS.className });
        expect(wrapper.find(`.${TEST_PROPS.className}`).exists()).toEqual(true);
      });
    });

    describe('original image', () => {
      it('renders the original image', () => {
        const wrapper = innerImageZoom();
        expect(wrapper.find('.iiz__img').exists()).toEqual(true);
      });

      it('renders the original image with sources', () => {
        const wrapper = innerImageZoom({ sources: TEST_PROPS.sources });
        const sources = wrapper.findAll('source').wrappers;
        expect(sources.length).toEqual(2);
      });

      it('only renders sources that have srcSet set', () => {
        const wrapper = innerImageZoom({ sources: TEST_PROPS.invalidSources });
        const sources = wrapper.findAll('source').wrappers;
        expect(sources.length).toEqual(1);
      });
    });
  });

  describe('zoom in', () => {
    describe('render', () => {
      it('renders the zoomed image on mouse enter', async () => {
        const wrapper = innerImageZoom();
        const figure = wrapper.find('figure');
        await figure.trigger('mouseenter');
        expect(figure.find('.iiz__zoom-img').exists()).toEqual(true);
      });

      it('renders the zoomed image with unique src if set', async () => {
        const wrapper = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc });
        const figure = wrapper.find('figure');
        await figure.trigger('mouseenter');
        expect(figure.find('.iiz__zoom-img').attributes('src')).toEqual(
          'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000'
        );
      });

      it('renders the zoomed image on render if zoomPreload is true', () => {
        const wrapper = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc, zoomPreload: true });
        expect(wrapper.find('.iiz__zoom-img').exists()).toEqual(true);
      });
    });

    describe('show', () => {
      it('makes the zoomed image visible on click', async () => {
        const wrapper = innerImageZoom();
        const figure = wrapper.find('figure');
        await figure.trigger('mouseenter');
        await figure.trigger('click', { pageX: 100, pageY: 100 });
        await figure.find('.iiz__zoom-img').trigger('load');
        expect(figure.find('.iiz__zoom-img--visible').exists()).toEqual(true);
      });

      it('renders the zoomed image in a fullscreen portal if fullscreenOnMobile is set', async () => {
        global.innerWidth = 500;
        global.window.matchMedia = () => {
          return { matches: true };
        };

        const wrapper = innerImageZoom({ fullscreenOnMobile: true }, true);
        const figure = wrapper.find('figure');
        await figure.trigger('touchstart');
        await figure.trigger('mouseenter');
        await figure.trigger('click', { pageX: 100, pageY: 100 });
        expect(!!document.querySelector('.iiz__zoom-portal')).toEqual(true);
      });
    });
  });

  describe('move', () => {
    it('pans the zoomed image on figure mouse move', async () => {
      const wrapper = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc });
      const figure = wrapper.find('figure');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      const zoomImg = figure.find('.iiz__zoom-img');
      await zoomImg.trigger('load');
      const topPos = zoomImg.element.style.top;
      await figure.trigger('mousemove', { pageX: 150, pageY: 150 });
      const updatedTopPos = zoomImg.element.style.top;
      expect(parseInt(topPos, 10) === parseInt(updatedTopPos, 10)).toEqual(false);
    });

    it('ignores figure mouse move if moveType is drag', async () => {
      const wrapper = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc, moveType: 'drag' });
      const figure = wrapper.find('figure');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      const zoomImg = figure.find('.iiz__zoom-img');
      await zoomImg.trigger('load');
      const topPos = zoomImg.element.style.top;
      await figure.trigger('mousemove', { pageX: 150, pageY: 150 });
      const updatedTopPos = zoomImg.element.style.top;
      expect(parseInt(topPos, 10) === parseInt(updatedTopPos, 10)).toEqual(true);
    });
  });

  describe('zoom out', () => {
    it('hides the zoomed image on toggle click', async () => {
      const wrapper = innerImageZoom();
      const figure = wrapper.find('figure');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      expect(figure.find('.iiz__zoom-img--visible').exists()).toEqual(false);
    });

    it('hides the zoomed image on mouse leave', async () => {
      const wrapper = innerImageZoom();
      const figure = wrapper.find('figure');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      await figure.trigger('mouseleave');
      expect(figure.find('.iiz__zoom-img--visible').exists()).toEqual(false);
    });

    it('hides the zoomed image on close button click on touch devices', async () => {
      const wrapper = innerImageZoom();
      const figure = wrapper.find('figure');
      await figure.trigger('touchstart');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      await figure.find('.iiz__close').trigger('click', { pageX: 0, pageY: 0 });
      expect(figure.find('.iiz__zoom-img--visible').exists()).toEqual(false);
    });

    it('removes the zoomed image after fade transition', async (done) => {
      const wrapper = innerImageZoom();
      const figure = wrapper.find('figure');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      await figure.trigger('mouseleave');

      setTimeout(() => {
        expect(figure.find('.iiz__zoom-img').exists()).toEqual(false);
        done();
      }, 150);
    });

    it('removes the zoomed image after fade transition on touch devices', async (done) => {
      const wrapper = innerImageZoom();
      const figure = wrapper.find('figure');
      await figure.trigger('touchstart');
      await figure.trigger('mouseenter');
      await figure.trigger('click', { pageX: 100, pageY: 100 });
      await figure.find('.iiz__close').trigger('click', { pageX: 0, pageY: 0 });

      setTimeout(() => {
        expect(figure.find('.iiz__zoom-img').exists()).toEqual(false);
        done();
      }, 150);
    });
  });
});
