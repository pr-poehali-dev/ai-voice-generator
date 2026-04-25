export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/73022c51-4ff2-415e-9901-c83728c706a4/files/2cf1b0a6-6f9f-4dcf-8f7c-8c2f64586167.jpg"
          alt="Лепка домашних пельменей"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему у нас вкуснее</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Только ручная лепка, домашнее тесто и отборное мясо. Каждый пельмень — как от бабушки,
          только подают быстро и красиво.
        </p>
        <div className="flex flex-col gap-4 mb-8 text-neutral-700 text-base lg:text-lg">
          <span>🥟 Тесто замешивается каждое утро</span>
          <span>🥩 Начинка из свежего фарша без добавок</span>
          <span>🍵 Подаём с бульоном, маслом или сметаной</span>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть меню
        </button>
      </div>
    </div>
  );
}