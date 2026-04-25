const menu = [
  {
    category: "Пельмени",
    items: [
      { name: "Классические со свининой", weight: "300 г", price: "320 ₽" },
      { name: "С говядиной и луком", weight: "300 г", price: "350 ₽" },
      { name: "Сибирские (3 мяса)", weight: "300 г", price: "390 ₽" },
      { name: "С грибами и сыром", weight: "300 г", price: "340 ₽" },
      { name: "С семгой", weight: "300 г", price: "420 ₽" },
    ],
  },
  {
    category: "Добавки",
    items: [
      { name: "Сметана домашняя", weight: "50 г", price: "60 ₽" },
      { name: "Сливочное масло", weight: "20 г", price: "40 ₽" },
      { name: "Бульон куриный", weight: "200 мл", price: "80 ₽" },
    ],
  },
  {
    category: "Напитки",
    items: [
      { name: "Морс клюквенный", weight: "400 мл", price: "120 ₽" },
      { name: "Чай с чабрецом", weight: "400 мл", price: "100 ₽" },
      { name: "Квас домашний", weight: "400 мл", price: "110 ₽" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-neutral-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наше меню</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          Всё лепится<br />вручную
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <img
            src="https://cdn.poehali.dev/projects/73022c51-4ff2-415e-9901-c83728c706a4/files/2670d5c4-9a63-4679-b178-1376d193558c.jpg"
            alt="Ассортимент пельменей"
            className="w-full aspect-square object-cover"
          />

          <div className="flex flex-col gap-10">
            {menu.map((section) => (
              <div key={section.category}>
                <h3 className="uppercase text-xs tracking-widest text-neutral-400 mb-4 border-b border-neutral-200 pb-2">
                  {section.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-4">
                      <div>
                        <span className="text-neutral-900 text-base">{item.name}</span>
                        <span className="text-neutral-400 text-sm ml-2">{item.weight}</span>
                      </div>
                      <span className="text-neutral-900 font-medium whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
