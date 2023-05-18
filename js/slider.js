document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
      autoplay: true,
      interval: 10000,
  });
});
document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    const slider = new ItcSimpleSlider('.itcss');
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.arrow-1').onclick = () => {
        // перейдём к предыдущему слайду
        slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.arrow-2').onclick = () => {
        // перейдём к следующему слайду
        slider.next();
    }
});